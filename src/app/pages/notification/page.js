"use client";

import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";
import TopBar from "@/app/components/top-bar";
import Image from "next/image";
import Navbar from "@/app/components/navbar";

const Notification = () => {
  const [account, setAccount] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);

  const connectMetaMask = async () => {
    if (typeof window.ethereum === "undefined") {
      alert("Veuillez installer MetaMask pour interagir avec l'application.");
      return;
    }

    try {
      setLoading(true);

      // Initialiser MetaMask
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      // Récupérer l'adresse de l'utilisateur
      const userAddress = await signer.getAddress();
      setAccount(userAddress);
      console.log("a");


      // Initialiser Push Protocol
      const userAlice = await PushAPI.initialize(signer, {
        env: CONSTANTS.ENV.STAGING, // Utilisation du testnet (STAGING)
      });
      console.log("b");

      // Récupérer les notifications
      const channelAddress = "0x00270677B33bdDA535959C61DCB4f33d0ef5Fcf4";
      const allNotifications = await userAlice.channel.notifications(channelAddress);
      console.log(allNotifications)
      setNotifications(allNotifications.notifications);
    } catch (error) {
      console.error("Erreur lors de la connexion à MetaMask ou PushAPI", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      connectMetaMask();
    }
  }, []);

  return (
    <div className="bg-[#F8F9E9]">
      <div className="px-5 text-black">
          <TopBar />
          <div>
          {/*
          <p>Compte connecté : {account ? account : "Aucun compte connecté"}</p>
          
          <button onClick={connectMetaMask} className="px-3 py-2 rounded-3xl bg-black text-white">
              Connecter MetaMask
          </button>
          */}

          {loading ? (
              <p>Chargement des notifications...</p>
          ) : notifications.length > 0 ? (
              <ul>
              {notifications.map((notification, index) => (
                  <li key={index} class="px-6 py-3 rounded-3xl shadow-lg flex items-center">
                      <Image
                          src="/logo.png"
                          alt="logo"
                          width={50}
                          height={50}
                      />
                      <div className="ml-3">
                          <p><strong>{notification.message.notification.title}</strong></p>
                          <p className="text-xs">{notification.message.notification.body}</p>
                      </div>
                  </li>
              ))}
              </ul>
          ) : (
              <p>No notification available.</p>
          )}
          </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Notification;
