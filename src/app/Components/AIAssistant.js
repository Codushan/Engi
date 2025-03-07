// Components/AIAssistant.js
import { useState } from 'react';
import styles from './AIAssistant.module.css';

export default function AIAssistant({ isOpen, onClose }) {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([
    { 
      text: 'How can I help you with the EngiFuture 2025 event?',
      isBot: true 
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    setMessages([...messages, { text: inputValue, isBot: false }]);
    
    // Simulate AI response (in real app, this would be an API call)
    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages, 
        { 
          text: `Thanks for your question about "${inputValue}". Our team will get back to you with more information soon.`, 
          isBot: true 
        }
      ]);
    }, 1000);
    
    setInputValue('');
  };

  if (!isOpen) return null;

  return (
    <div className={styles.aiAssistant}>
      <button className={styles.closeButton} onClick={onClose}>×</button>
      
      <div className={styles.header}>
        <h3>EngiFuture AI Assistant</h3>
      </div>
      
      <div className={styles.messages}>
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`${styles.message} ${message.isBot ? styles.botMessage : styles.userMessage}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      
      <form className={styles.inputArea} onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask me anything about the event..."
          className={styles.input}
        />
        <button type="submit" className={styles.sendButton}>Send</button>
      </form>
    </div>
  );
}