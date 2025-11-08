"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";

// Types
interface Message {
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
}

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

// Editable FAQ database
const initialFAQs: FAQ[] = [
  {
    question: "What programs do you offer?",
    answer: "We offer comprehensive programs in Mathematics, Science, Coding & Robotics, Creative Arts, Language Arts, Test Preparation, and Life Skills development.",
    category: "programs"
  },
  {
    question: "What are your class schedules?",
    answer: "We offer flexible scheduling with morning, afternoon, evening, and weekend sessions. Both in-person and online options are available.",
    category: "scheduling"
  },
  {
    question: "How much do courses cost?",
    answer: "Our course fees vary based on the program and duration. We offer competitive pricing with flexible payment plans and scholarship opportunities.",
    category: "pricing"
  },
  {
    question: "What age groups do you serve?",
    answer: "We serve students from elementary school through high school (ages 6-18) with age-appropriate curriculum and teaching methods.",
    category: "admissions"
  },
  {
    question: "Are your tutors qualified?",
    answer: "All our tutors are certified educators with advanced degrees and undergo continuous professional development in our teaching methodology.",
    category: "quality"
  },
  {
    question: "Do you offer trial classes?",
    answer: "Yes! We offer complimentary trial sessions for all new students to experience our teaching approach before enrollment.",
    category: "admissions"
  }
];

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [adminMode, setAdminMode] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      sender: "bot", 
      text: "Hello! 👋 I'm U-Fill Academy Assistant. I can help with program info, scheduling, admissions, and more!",
      timestamp: new Date()
    },
  ]);
  const [input, setInput] = useState("");
  const [faqs, setFaqs] = useState<FAQ[]>(initialFAQs);
  const [editingFaq, setEditingFaq] = useState<FAQ | null>(null);
  const [suggestedQuestions, setSuggestedQuestions] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    // Update suggested questions based on FAQ categories
    const suggestions = faqs.slice(0, 3).map(faq => faq.question);
    setSuggestedQuestions(suggestions);
  }, [faqs]);

  const findBestAnswer = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Exact match check
    const exactMatch = faqs.find(faq => 
      faq.question.toLowerCase().includes(input) || 
      input.includes(faq.question.toLowerCase())
    );
    
    if (exactMatch) return exactMatch.answer;

    // Keyword-based matching
    const keywords: Record<string, FAQ | undefined> = {
      "program": faqs.find(faq => faq.category === "programs"),
      "course": faqs.find(faq => faq.category === "programs"),
      "schedule": faqs.find(faq => faq.category === "scheduling"),
      "time": faqs.find(faq => faq.category === "scheduling"),
      "price": faqs.find(faq => faq.category === "pricing"),
      "cost": faqs.find(faq => faq.category === "pricing"),
      "fee": faqs.find(faq => faq.category === "pricing"),
      "age": faqs.find(faq => faq.category === "admissions"),
      "tutor": faqs.find(faq => faq.category === "quality"),
      "teacher": faqs.find(faq => faq.category === "quality"),
      "trial": faqs.find(faq => faq.category === "admissions"),
      "free": faqs.find(faq => faq.category === "admissions")
    };

    for (const [keyword, faq] of Object.entries(keywords)) {
      if (input.includes(keyword) && faq) {
        return faq.answer;
      }
    }

    return "I'm not sure about that specific question. Could you rephrase it or ask about our programs, schedules, or admissions process? I'd be happy to connect you with our admin team for more detailed information!";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage: Message = { sender: "user", text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    
    setTimeout(() => {
      const botResponse = findBestAnswer(input);
      const botMessage: Message = { sender: "bot", text: botResponse, timestamp: new Date() };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
    
    setInput("");
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
    setTimeout(() => handleSend(), 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Admin functions
  const addFaq = () => {
    const newFaq: FAQ = {
      question: "New question?",
      answer: "New answer...",
      category: "general"
    };
    setFaqs(prev => [...prev, newFaq]);
    setEditingFaq(newFaq);
  };

  const updateFaq = (index: number, field: keyof FAQ, value: string) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index] = { ...updatedFaqs[index], [field]: value };
    setFaqs(updatedFaqs);
  };

  const deleteFaq = (index: number) => {
    setFaqs(prev => prev.filter((_, i) => i !== index));
    setEditingFaq(null);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999] flex flex-col items-end">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="w-[90vw] max-w-80 h-96 bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 shadow-2xl rounded-2xl overflow-hidden mb-4 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <div className="flex items-center gap-2">
                <span className="font-semibold">U-Fill Assistant</span>
                {adminMode && (
                  <span className="text-xs bg-red-500 px-2 py-1 rounded-full">Admin</span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setAdminMode(!adminMode)}
                  className="p-1 hover:bg-white/20 rounded transition"
                  title="Admin Mode"
                >
                  <Icon icon={adminMode ? "ph:lock-key-open" : "ph:lock-key"} width={16} />
                </button>
                <button onClick={() => setOpen(false)} className="p-1 hover:bg-white/20 rounded transition">
                  <Icon icon="ph:x-bold" width={18} />
                </button>
              </div>
            </div>

            {/* Admin Panel */}
            {adminMode && (
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-2 border-b">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-black">FAQ Management</span>
                  <button 
                    onClick={addFaq}
                    className="text-xs bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition"
                  >
                    Add FAQ
                  </button>
                </div>
              </div>
            )}

            {/* Messages Area */}
            <div className="flex-1 p-3 overflow-y-auto space-y-3 scrollbar-thin">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`px-3 py-2 rounded-2xl text-sm max-w-[85%] ${msg.sender === "user"
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-bl-none"
                    }`}
                  >
                    <div className="text-black dark:text-white">{msg.text}</div>
                    <div className={`text-xs mt-1 ${msg.sender === "user" ? "text-blue-100" : "text-gray-600 dark:text-gray-400"}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Suggested Questions */}
              {messages.length <= 2 && (
                <div className="space-y-2 mt-4">
                  <p className="text-xs text-gray-600 dark:text-gray-400">Quick questions:</p>
                  {suggestedQuestions.map((question, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickQuestion(question)}
                      className="block w-full text-left text-xs bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition text-black dark:text-gray-300"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-black/10 dark:border-white/10">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about programs, schedules, admissions..."
                  className="flex-1 bg-transparent outline-none text-sm px-3 py-2 border border-black/10 dark:border-white/20 rounded-xl text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  <Icon icon="ph:paper-plane-tilt-bold" width={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Admin FAQ Management Modal */}
      <AnimatePresence>
        {adminMode && open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000] p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-white dark:bg-neutral-900 rounded-2xl p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-black dark:text-white">Manage FAQ Database</h3>
                <button 
                  onClick={() => setAdminMode(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                >
                  <Icon icon="ph:x-bold" width={20} />
                </button>
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block text-black dark:text-white">Question</label>
                        <textarea
                          value={faq.question}
                          onChange={(e) => updateFaq(index, 'question', e.target.value)}
                          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded text-sm resize-none text-black dark:text-white bg-white dark:bg-gray-800"
                          rows={2}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block text-black dark:text-white">Answer</label>
                        <textarea
                          value={faq.answer}
                          onChange={(e) => updateFaq(index, 'answer', e.target.value)}
                          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded text-sm resize-none text-black dark:text-white bg-white dark:bg-gray-800"
                          rows={2}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <select
                        value={faq.category}
                        onChange={(e) => updateFaq(index, 'category', e.target.value)}
                        className="text-sm border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-black dark:text-white bg-white dark:bg-gray-800"
                      >
                        <option value="programs">Programs</option>
                        <option value="scheduling">Scheduling</option>
                        <option value="pricing">Pricing</option>
                        <option value="admissions">Admissions</option>
                        <option value="quality">Quality</option>
                        <option value="general">General</option>
                      </select>
                      <button
                        onClick={() => deleteFaq(index)}
                        className="text-red-500 hover:text-red-700 transition text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-end gap-2 mt-6">
                <button
                  onClick={() => setAdminMode(false)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition text-black dark:text-white"
                >
                  Close
                </button>
                <button
                  onClick={addFaq}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Add New FAQ
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chatbot Button - Clean PNG Logo Only */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-2xl flex items-center justify-center cursor-pointer select-none bg-transparent"
      >
        {/* Replace with your actual logo PNG */}
        <div className="w-full h-full flex items-center justify-center bg-transparent">
          <Image
            src="/u-robo.png" // Replace with your logo PNG path
            alt="U-Fill Academy Assistant"
            width={80}
            height={80}
            className="w-full h-full object-contain rounded-full"
          />
        </div>
        
        {/* Notification dot when closed */}
        {!open && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-1 right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-gray-800"
          />
        )}
      </motion.button>
    </div>
  );
};

export default Chatbot;