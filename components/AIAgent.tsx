
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, Volume2, Globe, Loader2 } from 'lucide-react';
import { Message } from '../types';
import { getGeminiResponse, getGeminiTTS, playAudio } from '../services/geminiService';

const AIAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'नमस्ते! Hello! I am the Techline Studio Assistant. How can I help you today regarding our AI & Cybersecurity training?' },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const result = await getGeminiResponse(userMsg);
    
    const assistantMsg: Message = { 
      role: 'assistant', 
      content: result.text 
    };

    setMessages(prev => [...prev, assistantMsg]);
    setIsLoading(false);

    // Auto-TTS for the last message
    handleTTS(result.text);
  };

  const handleTTS = async (text: string) => {
    setIsSpeaking(true);
    const audioData = await getGeminiTTS(text);
    if (audioData) {
      await playAudio(audioData);
    }
    setIsSpeaking(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-2xl z-40 transition-all transform hover:scale-110 flex items-center space-x-2 animate-bounce hover:animate-none"
      >
        <Bot className="h-8 w-8" />
        <span className="font-bold pr-2 hidden md:inline">Ask AI Agent</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[95vw] md:w-96 h-[80vh] md:h-[600px] bg-white rounded-3xl shadow-2xl flex flex-col z-50 border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-10 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-6 flex justify-between items-center text-white">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-xl">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-black">Techline Assistant</h3>
                <div className="flex items-center text-[10px] font-bold uppercase tracking-widest text-blue-100">
                  <span className="h-1.5 w-1.5 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  AI Powered + Internet Search
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-lg transition-colors">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-none shadow-md'
                      : 'bg-white text-gray-800 rounded-tl-none border border-slate-200 shadow-sm'
                  }`}
                >
                  {msg.content}
                  {msg.role === 'assistant' && (
                    <button 
                      onClick={() => handleTTS(msg.content)}
                      className="mt-3 block text-blue-600 hover:text-blue-800 transition-colors"
                      disabled={isSpeaking}
                    >
                      <Volume2 className={`h-4 w-4 ${isSpeaking ? 'animate-pulse' : ''}`} />
                    </button>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm">
                  <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="flex items-center space-x-2 bg-slate-50 p-2 rounded-2xl border border-slate-200">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about AI course, fees, location..."
                className="flex-1 bg-transparent border-none focus:ring-0 px-3 py-2 text-sm outline-none"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-xl transition-all disabled:opacity-50"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-3 font-medium">
              Try: "When is the next batch?" or "What is AI?"
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAgent;
