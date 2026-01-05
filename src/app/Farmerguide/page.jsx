

'use client'

import { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function Page() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [showFAQ, setShowFAQ] = useState(true);
  const [showTips, setShowTips] = useState(false);
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  // Farming tips that rotate automatically
  const farmingTips = [
    "Crop rotation helps prevent soil depletion and reduces pest problems.",
    "Water early in the morning to reduce evaporation and fungal growth.",
    "Use organic mulch to conserve moisture and suppress weeds.",
    "Test your soil pH before planting to ensure optimal growing conditions.",
    "Integrated Pest Management (IPM) can reduce pesticide use and costs.",
    "Save seeds from your best-performing plants for next season.",
    "Consider companion planting to naturally deter pests and enhance growth.",
    "Maintain farm equipment regularly to avoid breakdowns during critical periods.",
  ];

  // Frequently asked questions
  const faqs = [
    { question: "What crops are best for my region?", topic: "Crop Selection" },
    { question: "How do I improve soil fertility naturally?", topic: "Soil Health" },
    { question: "What are current market prices for wheat?", topic: "Market Prices" },
    { question: "How to control common pests without chemicals?", topic: "Pest Control" },
    { question: "What government subsidies are available?", topic: "Financial Aid" },
    { question: "How to plan crop rotation for my fields?", topic: "Farming Techniques" },
    { question: "Which fertilizers are best for organic farming?", topic: "Organic Farming" },
    { question: "How to conserve water during dry seasons?", topic: "Water Management" },
  ];

  // Rotate through farming tips
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTipIndex((prevIndex) => (prevIndex + 1) % farmingTips.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  async function generateAnswer(e) {
    e.preventDefault();
    if (!question.trim()) return;
    
    setGeneratingAnswer(true);
    setShowFAQ(false);
    
    // Add user question to chat history
    const newChatHistory = [...chatHistory, { role: 'user', content: question }];
    setChatHistory(newChatHistory);
    
    // Temporary loading message
    const tempMessage = { role: 'assistant', content: 'Thinking...', isLoading: true };
    setChatHistory([...newChatHistory, tempMessage]);
    
    setQuestion("");

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.NEXT_PUBLIC_GOGGLEKEY}`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });
      
      const botResponse = response["data"]["candidates"][0]["content"]["parts"][0]["text"];
      
      // Replace loading message with actual response
      setChatHistory(prev => 
        prev.map((msg, i) => 
          i === prev.length - 1 ? { role: 'assistant', content: botResponse } : msg
        )
      );
      
    } catch (error) {
      console.error(error);
      
      // Replace loading message with error
      setChatHistory(prev => 
        prev.map((msg, i) => 
          i === prev.length - 1 ? { role: 'assistant', content: "Sorry - Something went wrong. Please try again!" } : msg
        )
      );
    }
    
    setGeneratingAnswer(false);
  }

  function handleFaqClick(question) {
    setQuestion(question);
    setShowFAQ(false);
  }

  function toggleSection(section) {
    if (section === 'faq') {
      setShowFAQ(true);
      setShowTips(false);
    } else if (section === 'tips') {
      setShowFAQ(false);
      setShowTips(true);
    } else {
      setShowFAQ(false);
      setShowTips(false);
    }
  }

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-green-50 to-blue-50 text-black">
      {/* Header */}
      <header className="bg-green-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <h1 className="text-2xl font-bold">Sarthi</h1>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => toggleSection('faq')} 
              className={`text-xs px-2 py-1 rounded-full ${showFAQ ? 'bg-white text-green-600' : 'bg-green-700 text-white'}`}
            >
              FAQs
            </button>
            <button 
              onClick={() => toggleSection('tips')} 
              className={`text-xs px-2 py-1 rounded-full ${showTips ? 'bg-white text-green-600' : 'bg-green-700 text-white'}`}
            >
              Tips
            </button>
            <p className="text-sm hidden md:block ml-2">Your Farming Assistant</p>
          </div>
        </div>
      </header>
      
      {/* Farming Tip Banner */}
      <div className="bg-yellow-50 border-b border-yellow-100 px-4 py-2 relative overflow-hidden">
        <div className="max-w-3xl mx-auto flex items-center">
          <div className="flex-shrink-0 bg-yellow-100 p-2 rounded-full mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-sm text-yellow-800 animate-fade-in-out">
            <span className="font-semibold">Tip:</span> {farmingTips[currentTipIndex]}
          </p>
        </div>
      </div>
      
      {/* Chat Area */}
      <div className="flex-1 overflow-auto p-4 md:p-6">
        <div className="max-w-3xl mx-auto">
          {chatHistory.length === 0 ? (
            <div>
              {showFAQ ? (
                <div className="bg-white rounded-lg shadow-md p-5 mb-6">
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">Frequently Asked Questions</h2>
                  <div className="grid gap-3 md:grid-cols-2">
                    {faqs.map((faq, index) => (
                      <button
                        key={index}
                        className="text-left bg-green-50 hover:bg-green-100 p-3 rounded-md border border-green-200 transition-colors"
                        onClick={() => handleFaqClick(faq.question)}
                      >
                        <span className="block text-sm text-green-600 font-medium mb-1">{faq.topic}</span>
                        <span className="block text-gray-700">{faq.question}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : showTips ? (
                <div className="bg-white rounded-lg shadow-md p-5 mb-6">
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">Seasonal Farming Tips</h2>
                  <div className="space-y-4">
                    {farmingTips.map((tip, index) => (
                      <div key={index} className="flex items-start p-3 bg-blue-50 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                        </svg>
                        <p className="text-blue-800">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="inline-flex justify-center items-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-700 mb-2">Welcome to Sarthi</h2>
                  <p className="text-gray-500 max-w-md mx-auto mb-6">
                    Ask any farming or agriculture-related questions. I'm here to help farmers and buyers connect better!
                  </p>
                  <div className="flex justify-center gap-3">
                    <button 
                      onClick={() => toggleSection('faq')}
                      className="bg-green-100 hover:bg-green-200 text-green-800 px-4 py-2 rounded-md transition-colors flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Browse FAQs
                    </button>
                    <button 
                      onClick={() => toggleSection('tips')}
                      className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded-md transition-colors flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Farming Tips
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              {chatHistory.map((chat, index) => (
                <div key={index} className={`mb-4 ${chat.role === 'user' ? 'flex justify-end' : 'flex justify-start'}`}>
                  <div
                    className={`max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-lg ${
                      chat.role === 'user'
                        ? 'bg-green-600 text-white rounded-br-none'
                        : 'bg-white shadow-md rounded-bl-none'
                    } ${chat.isLoading ? 'animate-pulse' : ''}`}
                  >
                     <ReactMarkdown>{chat.content}</ReactMarkdown>
                    
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Resource Categories (visible when no active chat) */}
      {chatHistory.length === 0 && !showFAQ && !showTips && (
        <div className="max-w-3xl mx-auto px-4 mb-4">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Popular Categories</h3>
          <div className="flex flex-wrap gap-2">
            {['Crop Management', 'Weather Forecasts', 'Market Prices', 'Pest Control', 'Soil Health', 'Government Schemes'].map((category) => (
              <button 
                key={category}
                onClick={() => setQuestion(`Tell me about ${category.toLowerCase()}`)}
                className="bg-white text-green-700 text-sm px-3 py-1 rounded-full border border-green-200 hover:bg-green-50 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 p-4">
        <form onSubmit={generateAnswer} className="max-w-3xl mx-auto flex gap-2">
          <textarea
            required
            className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask about farming, crops, markets, or agricultural tips..."
            rows="2"
          />
          <button
            type="submit"
            className={`bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center ${
              generatingAnswer ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={generatingAnswer}
          >
            {generatingAnswer ? (
              <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </form>
        <div className="max-w-3xl mx-auto mt-2 text-xs text-center text-gray-500">
          Sarthi is your AI farming assistant • Developed for farmers and buyers
        </div>
      </div>
    </div>
  );
}

export default Page;