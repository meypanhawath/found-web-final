import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, Bot, User, Send, X } from "lucide-react";

const GEMINI_API_KEY = "AIzaSyAB_RruVTxe_DwIdX6YS6dA-uUHq0W9rzo";
const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" +
  GEMINI_API_KEY;

export default function ChatBot() {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hello, I'm your AI assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false); // ✅ popup state
  const messagesEndRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Suggestions
  const suggestions = {
    "What's new?": "🚀 We've added new templates and improved performance.",
    Features:
      "✨ Includes AI assistance, templates, and real-time collaboration.",
    Templates:
      "📂 Explore ready-to-use templates for blogs, portfolios, and business sites.",
    "Can't log in":
      "🔑 Try resetting your password. If the issue persists, contact support.",
    Domain: "🌐 Connect your custom domain under Settings → Domains.",
  };

  const handleSuggestionClick = (q) => {
    setMessages((msgs) => [
      ...msgs,
      { role: "user", text: q },
      { role: "bot", text: suggestions[q] },
    ]);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setMessages((msgs) => [...msgs, { role: "user", text: input }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(GEMINI_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: input }] }],
        }),
      });
      const data = await res.json();
      const botText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't understand that.";
      setMessages((msgs) => [...msgs, { role: "bot", text: botText }]);
    } catch {
      setMessages((msgs) => [
        ...msgs,
        { role: "bot", text: "⚠️ Error: Unable to reach Gemini API." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ✅ Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}

      {/* ✅ Popup Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 w-96 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[600px] font-sans">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
                <MessageSquare className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h1 className="font-bold text-lg">AI Assistant</h1>
                <p className="text-xs opacity-80">
                  {loading ? "Typing..." : "Online"}
                </p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="hover:opacity-80">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "bot" && (
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-2 flex-shrink-0">
                    <Bot className="h-5 w-5 text-purple-600" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[80%] ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-br-none"
                      : "bg-white text-gray-800 shadow-sm rounded-bl-none border border-gray-100"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center ml-2 flex-shrink-0">
                    <User className="h-5 w-5 text-white" />
                  </div>
                )}
              </div>
            ))}

            <div ref={messagesEndRef} />

            {/* Suggestions */}
            {!loading && messages[messages.length - 1]?.role === "bot" && (
              <div className="mt-4">
                <p className="text-xs text-gray-500 mb-2 ml-1">
                  Quick questions:
                </p>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(suggestions).map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSuggestionClick(q)}
                      className="px-3 py-2 text-sm bg-white text-purple-600 rounded-full border border-purple-200 hover:bg-purple-50 shadow-sm transition-all duration-150 hover:shadow-md"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Typing Indicator */}
            {loading && (
              <div className="flex justify-start">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-2 flex-shrink-0">
                  <Bot className="h-5 w-5 text-purple-600" />
                </div>
                <div className="p-3 rounded-2xl bg-white text-gray-800 shadow-sm rounded-bl-none border border-gray-100 flex items-center">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "200ms" }}
                    />
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "400ms" }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={sendMessage}
            className="border-t border-gray-200 bg-gray-50 p-3"
          >
            <div className="flex items-center">
              <input
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent shadow-inner"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                disabled={loading}
              />
              <button
                type="submit"
                className="ml-2 p-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full hover:from-purple-700 hover:to-indigo-700 disabled:opacity-50 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center"
                disabled={loading || !input.trim()}
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
