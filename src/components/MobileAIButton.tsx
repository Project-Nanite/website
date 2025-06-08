'use client';

import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

const MobileAIButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState('');
  const router = useRouter();

  const quickQuestions = [
    "How do I install Nanite?",
    "What are the system requirements?",
    "How to set up development environment?",
    "Tell me about AI features"
  ];

  const handleQuickQuestion = (question: string) => {
    setInput(question);
  };

  const handleOpenFullChat = () => {
    router.push('/ask-ai');
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    setResponse('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input.trim(),
          conversationHistory: []
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
        setResponse(accumulatedResponse);
      }

    } catch (error) {
      console.error('Error:', error);
      setResponse('Sorry, I encountered an error. Please try the full chat interface.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Mobile AI Button - Only visible on mobile */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group hover:scale-110 transform"
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
        </button>
      </div>

      {/* Mobile AI Popup */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex items-end">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Popup */}
          <div className="relative w-full bg-white dark:bg-gray-900 rounded-t-3xl shadow-2xl border-t border-gray-200 dark:border-gray-700 max-h-[80vh] flex flex-col animate-slide-up">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">Nanite AI</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Ask me anything!</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleOpenFullChat}
                  className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-lg text-xs font-medium"
                >
                  Full Chat
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4">
              {!response ? (
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Hi! I'm your Nanite AI assistant. Try asking me one of these questions:
                  </p>
                  <div className="space-y-2">
                    {quickQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickQuestion(question)}
                        className="w-full p-3 bg-gray-50 dark:bg-gray-800 rounded-xl text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-colors"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-3 rounded-2xl rounded-br-lg max-w-[80%]">
                      <p className="text-sm">{input}</p>
                    </div>
                  </div>
                  
                  {/* AI Response */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-2xl rounded-bl-lg flex-1">
                      <p className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                        {response}
                      </p>
                      {isLoading && (
                        <div className="flex items-center gap-1 mt-2">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></div>
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse delay-100"></div>
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse delay-200"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-4">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Nanite OS..."
                  className="flex-1 px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="px-4 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:shadow-none disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </form>
              
              <div className="flex items-center justify-center gap-2 mt-3 text-xs text-gray-500 dark:text-gray-400">
                <Sparkles className="w-3 h-3" />
                <span>Powered by Nanite AI</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileAIButton;
