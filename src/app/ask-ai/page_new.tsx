'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Brain, Code, Database, Cpu, Terminal, Lightbulb, MessageCircle, Zap, ArrowRight, ChevronUp, ChevronDown } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface SuggestedQuestion {
  icon: React.ElementType;
  question: string;
  description: string;
}

const suggestedQuestions: SuggestedQuestion[] = [
  {
    icon: Terminal,
    question: "How do I install Nanite on my system?",
    description: "Learn about installation requirements and process"
  },
  {
    icon: Cpu,
    question: "What are the hardware requirements for Nanite?",
    description: "Find out minimum and recommended specs"
  },
  {
    icon: Brain,
    question: "What AI models are included with Nanite?",
    description: "Discover the built-in AI capabilities"
  },
  {
    icon: Code,
    question: "How do I set up a development environment?",
    description: "Get started with AI development on Nanite"
  },
  {
    icon: Database,
    question: "How does Nanite handle data privacy?",
    description: "Learn about security and local processing"
  },
  {
    icon: Lightbulb,
    question: "What makes Nanite different from other Linux distros?",
    description: "Understand Nanite's unique features"
  }
];

export default function AskAIPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentResponse, setCurrentResponse] = useState('');
  const [isChatExpanded, setIsChatExpanded] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, currentResponse]);

  // Auto-expand chat when user starts typing or clicks a suggested question
  useEffect(() => {
    if (input.length > 0 && !hasInteracted) {
      setIsChatExpanded(true);
    }
  }, [input, hasInteracted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // Mark as interacted and ensure chat is expanded
    setHasInteracted(true);
    setIsChatExpanded(true);

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setCurrentResponse('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input.trim(),
          conversationHistory: messages.map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('No response body');
      }

      let accumulatedResponse = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = new TextDecoder().decode(value);
        accumulatedResponse += chunk;
        setCurrentResponse(accumulatedResponse);
      }

      // Add the complete response as a message
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: accumulatedResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setCurrentResponse('');

    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error while processing your request. Please try again.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
    setHasInteracted(true);
    setIsChatExpanded(true);
    inputRef.current?.focus();
  };

  const toggleChatExpansion = () => {
    setIsChatExpanded(!isChatExpanded);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-24">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl mb-4 shadow-lg">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
            Ask Nanite AI
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get instant answers about Nanite OS, installation guides, development tips, and more from our AI assistant.
          </p>
        </div>

        {/* Suggested Questions - Only show when no interaction has happened */}
        {!hasInteracted && (
          <div className="mb-8 animate-fade-in">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">
              Popular Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {suggestedQuestions.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestedQuestion(item.question)}
                  className="group relative p-5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:border-yellow-300 dark:hover:border-yellow-600 transition-all duration-300 text-left shadow-sm hover:shadow-lg transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                        {item.question}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-yellow-500 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Chat Container - Popup Style */}
        <div className={`bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden transition-all duration-500 transform ${
          isChatExpanded ? 'scale-100 opacity-100' : hasInteracted ? 'scale-98 opacity-95' : 'scale-100 opacity-100'
        }`}>
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 dark:from-yellow-500/5 dark:to-orange-500/5 px-6 py-4 border-b border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">Nanite AI Assistant</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Online • Powered by Llama 4</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Active</span>
                </div>
                {hasInteracted && (
                  <button
                    onClick={toggleChatExpansion}
                    className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                    title={isChatExpanded ? "Minimize chat" : "Expand chat"}
                  >
                    {isChatExpanded ? (
                      <ChevronDown className="w-5 h-5" />
                    ) : (
                      <ChevronUp className="w-5 h-5" />
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className={`overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-transparent to-gray-50/30 dark:to-gray-800/30 transition-all duration-500 ${
            isChatExpanded ? 'h-[500px]' : 'h-[300px]'
          }`}>
            {messages.length === 0 && !currentResponse && (
              <div className="text-center py-8">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                  Ready to help! 🚀
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm max-w-md mx-auto">
                  I'm your specialized AI assistant for everything related to Nanite OS. Ask me anything!
                </p>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                {message.role === 'assistant' && (
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                
                <div
                  className={`max-w-[75%] px-4 py-3 rounded-2xl shadow-sm ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-br-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-lg'
                  }`}
                >
                  <div className="prose prose-sm max-w-none dark:prose-invert">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        code: ({ children, className, ...props }) => {
                          const match = /language-(\w+)/.exec(className || '');
                          const isInline = !match;
                          return isInline ? (
                            <code className={`px-1.5 py-0.5 rounded text-sm font-mono ${
                              message.role === 'user' 
                                ? 'bg-white/20 text-white' 
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                            }`} {...props}>
                              {children}
                            </code>
                          ) : (
                            <pre className={`p-3 rounded-lg overflow-x-auto my-2 ${
                              message.role === 'user'
                                ? 'bg-white/20'
                                : 'bg-gray-200 dark:bg-gray-700'
                            }`}>
                              <code className="text-sm font-mono" {...props}>{children}</code>
                            </pre>
                          );
                        },
                        p: ({ children }) => <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>,
                        ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>,
                        ol: ({ children }) => <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>,
                        li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                        h1: ({ children }) => <h1 className="text-lg font-bold mb-2">{children}</h1>,
                        h2: ({ children }) => <h2 className="text-base font-bold mb-2">{children}</h2>,
                        h3: ({ children }) => <h3 className="text-sm font-bold mb-2">{children}</h3>,
                        blockquote: ({ children }) => (
                          <blockquote className={`border-l-4 pl-4 italic my-2 ${
                            message.role === 'user' 
                              ? 'border-white/30' 
                              : 'border-gray-400 dark:border-gray-600'
                          }`}>
                            {children}
                          </blockquote>
                        ),
                        a: ({ children, href }) => (
                          <a 
                            href={href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`underline hover:no-underline ${
                              message.role === 'user' 
                                ? 'text-white/90 hover:text-white' 
                                : 'text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300'
                            }`}
                          >
                            {children}
                          </a>
                        ),
                      } as Components}
                  >
                    {message.content}
                  </ReactMarkdown>
                  </div>
                  <div className={`text-xs mt-2 ${
                    message.role === 'user' ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>

                {message.role === 'user' && (
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  </div>
                )}
              </div>
            ))}

            {/* Current streaming response */}
            {currentResponse && (
              <div className="flex gap-3 justify-start animate-fade-in">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="max-w-[75%] px-4 py-3 rounded-2xl rounded-bl-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm">
                  <div className="prose prose-sm max-w-none dark:prose-invert">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        code: ({ children, className, ...props }) => {
                          const match = /language-(\w+)/.exec(className || '');
                          const isInline = !match;
                          return isInline ? (
                            <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
                              {children}
                            </code>
                          ) : (
                            <pre className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg overflow-x-auto my-2">
                              <code className="text-sm font-mono" {...props}>{children}</code>
                            </pre>
                          );
                        },
                        p: ({ children }) => <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>,
                        ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>,
                        ol: ({ children }) => <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>,
                        li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                      } as Components}
                  >
                    {currentResponse}
                  </ReactMarkdown>
                  </div>
                  <div className="inline-flex items-center gap-1 mt-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Enhanced Input Area */}
          <div className="border-t border-gray-200/50 dark:border-gray-700/50 p-6 bg-gradient-to-r from-gray-50/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50">
            <form onSubmit={handleSubmit} className="flex gap-4">
              <div className="flex-1 relative">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                  placeholder="Ask me anything about Nanite OS... (Press Enter to send)"
                  rows={1}
                  className="w-full px-5 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 resize-none text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 shadow-sm transition-all duration-300"
                  disabled={isLoading}
                  style={{ minHeight: '50px' }}
                />
                <div className="absolute bottom-2 right-3 flex items-center gap-2">
                  <span className="text-xs text-gray-400">
                    {input.length}/500
                  </span>
                </div>
              </div>
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="group flex-shrink-0 px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:shadow-none hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed transform"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span className="hidden sm:block">Thinking...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="hidden sm:block">Send</span>
                  </div>
                )}
              </button>
            </form>
            
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <Zap className="w-3 h-3" />
                <span>Powered by Nanite AI • Llama 4 Scout</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Response time: ~2s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
