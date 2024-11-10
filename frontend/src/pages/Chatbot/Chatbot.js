import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import classes from './chatbot.module.css';  // Import CSS module

const Chatbot = () => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const chatContainerRef = useRef(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatHistory]);

    const sendMessage = async (e) => {
        e?.preventDefault();
        
        if (message.trim() === '' || isLoading) return;

        setIsLoading(true);
        
        setChatHistory(prev => [...prev, { 
            sender: 'user', 
            text: message,
            timestamp: new Date().toISOString()
        }]);

        try {
            const response = await axios.post('http://localhost:5000/api/chatbot/ask', 
                { message },
                { timeout: 30000 }
            );

            if (response.data.reply) {
                setChatHistory(prev => [...prev, { 
                    sender: 'bot', 
                    text: response.data.reply,
                    timestamp: new Date().toISOString()
                }]);
            }
        } catch (error) {
            console.error('Chatbot error:', error);
            
            const errorMessage = error.response?.data?.error || 
                'Sorry, I encountered an error. Please try again.';
            
            setChatHistory(prev => [...prev, { 
                sender: 'bot', 
                text: errorMessage,
                timestamp: new Date().toISOString(),
                isError: true
            }]);
        } finally {
            setIsLoading(false);
            setMessage('');
        }
    };

    return (
        <div className={classes['chatbot-container']}>
            <div 
                ref={chatContainerRef}
                className={classes['chat-container']}
            >
                {chatHistory.map((entry, index) => (
                    <div
                        key={index}
                        className={`${classes.message} ${entry.sender === 'user' ? classes.user : classes.bot}`}
                    >
                        <div className={`${classes.content} ${entry.isError ? classes.error : ''}`}>
                            {entry.text}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className={classes.loading}>
                        <div className={classes.content}>Typing...</div>
                    </div>
                )}
            </div>
            
            <form onSubmit={sendMessage} className={classes['input-container']}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    disabled={isLoading}
                    className={classes.input}
                />
                <button
                    type="submit"
                    disabled={isLoading || !message.trim()}
                    className={classes.button}
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default Chatbot;
