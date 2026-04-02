import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import './Chatbot.css';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // initial greeting
      setIsTyping(true);
      setTimeout(() => {
        setMessages([{ id: Date.now(), text: "Hi there! I'm NaguBot 🤖 Ready for some timepass or got questions about Nagesh?", sender: 'bot' }]);
        setIsTyping(false);
      }, 1000);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    const userMsg: Message = { id: Date.now(), text, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      let botReply = getBotResponse(text.toLowerCase());
      setMessages(prev => [...prev, { id: Date.now(), text: botReply, sender: 'bot' }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 800);
  };

  const getBotResponse = (inputRaw: string) => {
    const input = inputRaw.toLowerCase();
    
    // Greetings & pleasantries
    if (input.match(/^(hi|hello|hey|yo|namaste|sup)\b/)) {
      const responses = ["Hello! It's great to see you.", "Hey there! How can I help you today?", "Hi! 👋 Welcome to Nagesh's digital world!"];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    if (input.includes('how are you') || input.includes('how do you do') || input.includes('how are u') || input.includes('how r u')) {
      return "I'm just a bunch of React state, so I'm feeling perfectly functional! 100% bug-free (mostly). How about you?";
    }
    if (input.includes('good') || input.includes('great') || input.includes('fine') || input.includes('okay')) {
      if (!input.includes('not')) return "Glad to hear that! You must be enjoying this UI. Anything you're looking for specifically?";
    }
    if (input.includes('who are you') || input.includes('what are you') || input.includes('your name')) {
      return "I'm NaguBot! Your friendly neighborhood virtual assistant, coded up by Nagesh to answer questions and tell bad jokes.";
    }
    if (input.includes('thank') || input.includes('thx')) {
      return "You're very welcome! If you love the site, don't hesitate to reach out to Nagesh directly.";
    }
    if (input.includes('bye') || input.includes('see ya') || input.includes('cya')) {
      return "Catch you later! Keep exploring the portfolio. ✨";
    }

    // Professional queries
    if (input.includes('stack') || input.includes('skills') || input.includes('technolog')) {
      return "Nagesh is a full-stack wizard 🧙‍♂️! He works with React, Node.js, AI/ML pipelines, Supabase, and much more. He's a fast learner too.";
    }
    if (input.includes('hire') || input.includes('resume') || input.includes('cv') || input.includes('job') || input.includes('work')) {
      return "Looking to hire? Excellent decision. You can download his resume from the upper section, or shoot an email via the Contact form!";
    }
    if (input.includes('project') || input.includes('portfolio') || input.includes('build')) {
      return "Check out the Projects section! From 'Hunt the Wumpus' games to AI/ML tools, Nagesh has built it all.";
    }
    if (input.includes('thoughtscrest') || input.includes('intern') || input.includes('experience')) {
      return "Ah, ThoughtsCrest! That's where Nagesh works on Core Banking and Automation. He's getting real enterprise experience there. 🏦";
    }
    if (input.includes('education') || input.includes('college') || input.includes('degree')) {
      return "He's currently pursuing his B.E. in Artificial Intelligence and Machine Learning (2022-2026). Always learning, always building!";
    }
    if (input.includes('contact') || input.includes('email') || input.includes('reach')) {
      return "Scroll down to the bottom or use the Contact section to send Nagesh a message directly!";
    }

    // Timepass / Fun stuff
    if (input.includes('joke')) {
      const jokes = [
        "Why do programmers prefer dark mode? Because light attracts bugs! 🪲",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem! 💡",
        "I told a UDP joke once... but I'm not sure if anyone got it.",
        "A SQL query goes into a bar, walks up to two tables and asks... 'Can I join you?'",
        "Why did the programmer quit his job? Because he didn't get arrays. 😂",
        "There are 10 types of people in the world: those who understand binary, and those who don't.",
        "If at first you don't succeed; call it version 1.0.",
        "A programmer is told to 'go to hell'. He finds the worst part about it is the server latency.",
        "Real programmers count from 0. ☕"
      ];
      return jokes[Math.floor(Math.random() * jokes.length)];
    }
    if (input.includes('roast')) {
      const roasts = [
        "Your code is so bad, even StackOverflow would just reply 'No.' ...Just kidding! 🔥",
        "I'd roast you, but I don't want to overheat your CPU.",
        "I'm an AI, but even I know you should probably step away and blink a few times today.",
        "Your commit messages look like they were written by a cat walking across the keyboard. 🐈",
        "I've seen more logic in a random number generator than your last pull request.",
        "You copy-paste from ChatGPT so much, I'm surprised your 'Ctrl' and 'V' keys still work.",
        "Your inline comments explain *how* it works, but not *why* you thought that was a good idea.",
        "You're the reason they have 'Are you sure?' prompts before deleting files.",
        "You don't need a debugger, you need an exorcist. 👻"
      ];
      return roasts[Math.floor(Math.random() * roasts.length)];
    }
    if (input.includes('wumpus')) {
      return "I smell a Wumpus... Oh wait, that's just a game Nagesh built. Grab some arrows and check the Projects section! 🦇";
    }

    // Default fallbacks with context probing
    const defaults = [
      "I'm not exactly sure what you mean, but tell me more! Or try asking about Nagesh's 'skills', 'experience', or ask for a 'joke'.",
      "My natural language processing is still a work in progress! Want to hear a joke instead?",
      "Interesting perspective! So, did you check out the projects section yet?",
      "I'm taking notes! Beep boop. Meanwhile, want to ask me what my 'stack' is?",
      "You've stumped me. Nagesh is much smarter than I am; you should probably hire him!"
    ];
    return defaults[Math.floor(Math.random() * defaults.length)];
  };

  const quickReplies = [
    "Tell me a joke 🎭",
    "Roast me 🔥",
    "What's your stack? 💻",
    "ThoughtsCrest? 🏦"
  ];

  return (
    <div className="chatbot-wrapper">
      {/* FAB */}
      <button 
        className={`chatbot-fab ${isOpen ? 'hidden' : ''}`}
        onClick={() => setIsOpen(true)}
      >
        <Sparkles className="fab-icon-bg" size={24} />
        <MessageSquare className="fab-icon" size={28} />
      </button>

      {/* Chat Window */}
      <div className={`chatbot-window glass-effect ${isOpen ? 'active' : ''}`}>
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="bot-avatar"><Bot size={20} /></div>
            <div>
              <h3>NaguBot</h3>
              <span className="status">Online & Ready to vibe</span>
            </div>
          </div>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.sender}`}>
              {msg.sender === 'bot' && <div className="msg-avatar"><Bot size={14} /></div>}
              <div className="bubble">{msg.text}</div>
              {msg.sender === 'user' && <div className="msg-avatar user"><User size={14} /></div>}
            </div>
          ))}
          {isTyping && (
            <div className="message bot">
               <div className="msg-avatar"><Bot size={14} /></div>
               <div className="bubble typing">
                 <span></span><span></span><span></span>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        {!isTyping && messages.length > 0 && (
          <div className="quick-replies">
            {quickReplies.map((qr, idx) => (
              <button key={idx} className="qr-btn" onClick={() => handleSend(qr)}>
                {qr}
              </button>
            ))}
          </div>
        )}

        <div className="chat-input-area">
          <input 
            type="text" 
            placeholder="Type 'joke' or 'roast'..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' ? handleSend(inputValue) : null}
          />
          <button className="send-btn" onClick={() => handleSend(inputValue)} disabled={!inputValue.trim()}>
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
