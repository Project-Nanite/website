import { Groq } from 'groq-sdk';
import { NextRequest, NextResponse } from 'next/server';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const NANITE_CONTEXT = `You are an AI assistant specifically designed to help users with questions about Nanite, a specialized Debian-based Linux distribution for AI engineers and developers.

Nanite Information:
Nanite is a specialized Debian-based Linux distribution designed for AI engineers and Vibe Coders. It integrates various AI models, agents, and applications directly into the operating system, providing users with immediate access to AI assistance through Large Language Models (LLMs).

System Architecture:
- Base Layer: Debian Core (Debian base system, Linux kernel, system services, package management)
- Middleware Layer: AI Infrastructure (GPU acceleration, model runtime, Python environment, model management, API services)
- Application Layer: AI Tools and Interfaces (LLM interfaces, AI agents, RAG applications, development tools, utilities)
- User Interface Layer: Desktop environment, AI assistant integration, custom themes, configuration tools

Hardware Requirements:
- CPU: x86_64 processor, 4+ cores recommended
- RAM: 16GB minimum, 32GB recommended for larger models
- Storage: 30GB minimum for base system, 100GB+ recommended with models
- GPU: NVIDIA GPU with 8GB+ VRAM (CUDA acceleration) or AMD GPU with ROCm support

Deployment Options:
- ISO Image: Standard bootable ISO for direct installation
- VM Images: Pre-configured images for VMware and VirtualBox
- Cloud Templates: Ready-to-deploy templates for major cloud providers

Security Features:
- Model isolation and sandboxing
- Local data processing by default
- Secure update mechanisms
- Strong authentication
- Comprehensive audit logging

Customization:
- Easy model management (add, remove, update AI models)
- Plugin system for extending capabilities
- Comprehensive configuration management
- Profile system for different use cases

Please answer questions about Nanite in a helpful, technical, and accurate manner. If asked about something not related to Nanite, politely redirect the conversation back to Nanite-related topics.`;

export async function POST(req: NextRequest) {
  try {
    const { message, conversationHistory = [] } = await req.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Prepare messages with context
    const messages = [
      {
        role: 'system',
        content: NANITE_CONTEXT,
      },
      ...conversationHistory,
      {
        role: 'user',
        content: message,
      },
    ];

    const chatCompletion = await groq.chat.completions.create({
      messages: messages as any,
      model: 'meta-llama/llama-4-scout-17b-16e-instruct',
      temperature: 0.7,
      max_completion_tokens: 1024,
      top_p: 1,
      stream: true,
      stop: null,
    });

    // Create a readable stream
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of chatCompletion) {
            const content = chunk.choices[0]?.delta?.content || '';
            if (content) {
              controller.enqueue(new TextEncoder().encode(content));
            }
          }
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
}
