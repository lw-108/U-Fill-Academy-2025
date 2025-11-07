"use client";

import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Spline from "@splinetool/react-spline";


const Chatbot = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hello! 👋 I’m U-Fill Assistant. How can I help you today?" },
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages((prev) => [...prev, { sender: "user", text: input }]);
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: `You said: "${input}". I’ll forward that to admin soon.` },
            ]);
        }, 800);
        setInput("");
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="w-80 h-96 bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 shadow-2xl rounded-2xl overflow-hidden mb-4 flex flex-col"
                    >
                        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                            <span className="font-semibold">U-Fill Chatbot</span>
                            <button onClick={() => setOpen(false)} className="hover:text-gray-200 transition">
                                <Icon icon="ph:x-bold" width={18} />
                            </button>
                        </div>

                        <div className="flex-1 p-3 overflow-y-auto space-y-2 scrollbar-thin">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"
                                        }`}
                                >
                                    <div
                                        className={`px-3 py-2 rounded-2xl text-sm max-w-[80%] ${msg.sender === "user"
                                                ? "bg-blue-500 text-white rounded-br-none"
                                                : "bg-gray-200 dark:bg-gray-700 dark:text-white rounded-bl-none"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="p-2 border-t border-black/10 dark:border-white/10 flex gap-2">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type a message..."
                                className="flex-1 bg-transparent outline-none text-sm px-3 py-2 border border-black/10 dark:border-white/20 rounded-xl dark:text-white"
                            />
                            <button
                                onClick={handleSend}
                                className="bg-blue-600 text-white px-3 rounded-xl hover:bg-blue-700 transition"
                            >
                                <Icon icon="ph:paper-plane-tilt-bold" width={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 3D Spline Bot */}
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-44 h-44 cursor-pointer select-none -translate-y-12 -translate-x-12"
                onClick={() => setOpen(!open)}
            >
                <div className="relative w-80 h-80 overflow-hidden rounded-full cursor-pointer select-none">
                        <Spline scene="https://prod.spline.design/FsF2shqYFYXmma4y/scene.splinecode" />
                </div>

            </motion.div>
        </div>
    );
};

export default Chatbot;
