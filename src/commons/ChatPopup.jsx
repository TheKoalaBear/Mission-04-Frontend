import React, { useState, useEffect, useRef } from "react";
import styles from "./ChatPopup.module.css";
import sendIcon from "../assets/send.png";
import chatIcon from "../assets/chaticon.svg";

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasOptedIn, setHasOptedIn] = useState(false);
  const [isConversationEnded, setIsConversationEnded] = useState(false);
  const [sessionId] = useState(() => Math.random().toString(36).substring(7));
  const chatContentRef = useRef(null);

  const toggleChat = async () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Reset states when opening chat
      setIsConversationEnded(false);
      setHasOptedIn(false);
      // When opening chat, show initial message
      setMessages([
        {
          text: "Hello! I'm Tina. I can help you to choose right insurance policy. Would you like me to help you find the best insurance coverage for your vehicle? Yes/No",
          sender: "system",
        },
      ]);
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() && !isConversationEnded) {
      // Add user message to chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, sender: "user" },
      ]);
      setMessage(""); // Clear the input field after submission
      setIsLoading(true);

      // Check if this is the opt-in response
      if (!hasOptedIn && messages.length === 2) {
        const optInResponse = message.toLowerCase();
        if (optInResponse === "yes") {
          setHasOptedIn(true);
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              text: "Great! I'll help you find the best insurance coverage. What type of vehicle do you have?",
              sender: "system",
            },
          ]);
        } else if (optInResponse === "no") {
          setHasOptedIn(false);
          setIsConversationEnded(true);
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              text: "I understand. Since you've chosen not to opt-in, I won't be able to provide personalized recommendations. Feel free to start a new conversation if you change your mind. Have a great day!",
              sender: "system",
            },
          ]);
        } else {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              text: "Please respond with 'Yes' or 'No' to opt-in.",
              sender: "system",
            },
          ]);
        }
        setIsLoading(false);
        return;
      }

      try {
        // Send message to backend
        const response = await fetch("http://localhost:3000/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message,
            sessionId,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to get response from server");
        }

        const data = await response.json();

        // Add system response to chat
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: data.response, sender: "system" },
        ]);
      } catch (error) {
        console.error("Error:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "Sorry, I'm having trouble connecting to the server. Please try again later.",
            sender: "system",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className={styles.chatContainer}>
      {!isOpen && (
        <button className={styles.chatButton} onClick={toggleChat}>
          <img src={chatIcon} alt="Chat" className={styles.chatButtonIcon} />
        </button>
      )}
      {isOpen && (
        <div className={styles.chatBox}>
          <button className={styles.closeButton} onClick={toggleChat}>
            ✖
          </button>
          <div className={styles.chatHeader}>
            <h2>Tina </h2>
            <h4>AI Insurance Assistant</h4>
          </div>
          <div className={styles.chatContent} ref={chatContentRef}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.sender === "user"
                    ? styles.userBubble
                    : styles.systemBubble
                }
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className={styles.systemBubble}>
                <div className={styles.typingIndicator}>Tina is typing...</div>
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit} className={styles.chatForm}>
            <input
              type="text"
              value={message}
              onChange={handleMessageChange}
              className={styles.chatInput}
              placeholder={
                isConversationEnded
                  ? "Conversation ended. Click 'Chat with us' to start a new one."
                  : "Type your message..."
              }
              disabled={isLoading || isConversationEnded}
            />
            <button
              type="submit"
              className={styles.chatSubmitButton}
              disabled={isLoading || isConversationEnded}
            >
              <img
                className={styles.chatSubmitButtonIcon}
                src={sendIcon}
                alt="Send"
              />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatPopup;
