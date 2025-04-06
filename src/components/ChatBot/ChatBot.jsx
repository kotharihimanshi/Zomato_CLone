import React, { useState } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hey! How can I assist you today?' }
  ]);
  const [userMessage, setUserMessage] = useState('');

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (!userMessage.trim()) return;

    const userText = userMessage.toLowerCase();
    const newMessages = [...messages, { sender: 'user', text: userMessage }];
    setMessages(newMessages);
    setUserMessage('');

    let botReply = "I'm not sure how to help with that. Try asking about menu, offers, or orders.";

    if (userText.includes("hello") || userText.includes("hi")) {
      botReply = "Hello! 👋 How can I help you today?";
    } else if (userText.includes("menu")) {
      botReply = "You can view the full menu from the 'Menu' section above 🍕🍔🥗";
    } else if (userText.includes("offers") || userText.includes("discount")) {
      botReply = "We're currently offering discounts! 🎉 Check the homepage banner.";
    } else if (userText.includes("cancel")) {
      botReply = "You can cancel your order from the 'My Orders' section.";
    } else if (userText.includes("track") || userText.includes("status")) {
      botReply = "You can track your order in 'My Orders' > Order Status 📦";
    } else if (userText.includes("delivery")) {
      botReply = "Delivery usually takes 30-45 minutes ⏱️";
    } else if (userText.includes("thank")) {
      botReply = "You're welcome! 😊";
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    }, 500);
  };

  const recommendedQuestions = [
    "What's on the menu?",
    "Any current offers?",
    "How do I cancel an order?",
    "How long does delivery take?",
    "Can I track my order?"
  ];

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={toggleChatbot}>
        💬
      </button>

      {isOpen && (
        <div className="chatbox">
          <div className="chatbox-header">Zomato Bot</div>
          <div className="chatbox-body">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="recommended-questions">
            <p className="recommend-title">🧠 Recommended:</p>
            <div className="question-list">
              {recommendedQuestions.map((q, i) => (
                <button
                  key={i}
                  className="question-btn"
                  onClick={() => {
                    setUserMessage(q);
                    setTimeout(handleSendMessage, 100);
                  }}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          <div className="chatbox-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
