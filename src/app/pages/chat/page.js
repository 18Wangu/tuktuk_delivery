'use client';

import React, { useState, useEffect } from 'react';
import { PushAPI, CONSTANTS } from '@pushprotocol/restapi';
import { ethers } from 'ethers';
import TopBar from '@/app/components/top-bar';
import Navbar from '@/app/components/navbar';

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);
  const [messageContent, setMessageContent] = useState('');
  const [receiverAddress, setReceiverAddress] = useState('0x00270677B33bdDA535959C61DCB4f33d0ef5Fcf4');
  const [signer, setSigner] = useState(null);

  const initializeUser = async () => {
    try {
      const storedSigner = localStorage.getItem('signer');
      let newSigner;

      if (storedSigner) {
        newSigner = new ethers.Wallet(storedSigner);
      } else {
        newSigner = ethers.Wallet.createRandom();
        localStorage.setItem('signer', newSigner.privateKey);
      }

      setSigner(newSigner);

      const userAlice = await PushAPI.initialize(newSigner, {
        env: CONSTANTS.ENV.STAGING,
      });
      setUser(userAlice);

      // Clear messages on page refresh
      setMessages([]);
      await fetchMessages(userAlice);
    } catch (err) {
      console.error('Error initializing user:', err);
      setError('Unable to retrieve messages.');
    }
  };

  const fetchMessages = async (userAlice) => {
    try {
      const response = await userAlice.chat.history(receiverAddress);
      const receivedMessages = response.messages || [];
      setMessages(receivedMessages);
    } catch (err) {
      console.error('Error fetching messages:', err);
      // setError('Unable to retrieve message history.');
    }
  };

  const pollForNewMessages = async () => {
    try {
      if (user && signer) {
        await fetchMessages(user);
      }
    } catch (err) {
      console.error('Error fetching messages:', err);
    }
  };

  const sendMessage = async () => {
    try {
      if (!messageContent) {
        alert('Message cannot be empty.');
        return;
      }

      // Envoi du message
      const response = await user.chat.send(receiverAddress, {
        content: messageContent,
        type: 'Text',
      });

      // Ajout du message envoyé à l'interface
      const newMessages = [
        ...messages,
        { sender: 'You', content: messageContent, timestamp: Date.now() },
      ];
      setMessages(newMessages);
      setMessageContent('');

      // Simuler la réponse après 10 secondes
      setTimeout(() => {
        const simulatedResponse = {
          sender: 'TukTukBot',
          content: `Hello, it will be ready in 6 minutes. Thank you for your patience!`,
          timestamp: Date.now() + 10000, // 10 secondes plus tard
        };

        setMessages((prevMessages) => [...prevMessages, simulatedResponse]);
      }, 10000);
    } catch (err) {
      console.error('Error sending message:', err);
      setError('Unable to send the message.');
    }
  };

  useEffect(() => {
    initializeUser();
    const interval = setInterval(pollForNewMessages, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='bg-[#F8F9E9]'>
      <div className='px-5'>
        <TopBar />
        <div className="min-h-screen p-5">
          <h1 className="text-2xl font-bold text-center text-black mb-4">Chat TukTuk Delivery</h1>
          {error && <p className="text-red-500 text-center">{error}</p>}

          <div className="bg-white rounded-lg shadow-md p-5 mb-4">
            {messages.length > 0 ? (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-3 my-2 rounded-lg ${
                    msg.sender === 'You' ? 'bg-green-200 text-right' : 'bg-gray-200 text-left'
                  }`}
                >
                  <strong className="text-black">{msg.sender}:</strong>
                  <p className='text-black'>{msg.content}</p>
                  <small className="text-black">{new Date(msg.timestamp).toLocaleString()}</small>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">No messages available.</p>
            )}
          </div>

          <textarea
            value={messageContent}
            onChange={(e) => setMessageContent(e.target.value)}
            placeholder="Type your message"
            className="text-black w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-300"
          />

          <button
            onClick={sendMessage}
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition mb-24"
          >
            Send Message
          </button>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default ChatPage;