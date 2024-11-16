"use client";

import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";
import TopBar from "@/app/components/top-bar";
import Image from "next/image";
import Navbar from "@/app/components/navbar";

const Notification = () => {
  const [account, setAccount] = useState(null);
  const [lastNotification, setLastNotification] = useState(null);
  const [loading, setLoading] = useState(false);

  const channelAddress = "0x00270677B33bdDA535959C61DCB4f33d0ef5Fcf4";

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

      // Initialiser Push Protocol
      const userAlice = await PushAPI.initialize(signer, {
        env: CONSTANTS.ENV.STAGING, // Utilisation du testnet (STAGING)
      });

      // Récupérer la dernière notification
      const allNotifications = await userAlice.channel.notifications(channelAddress);
      if (allNotifications.notifications && allNotifications.notifications.length > 0) {
        setLastNotification(allNotifications.notifications[0]); // Dernière notification
      }
    } catch (error) {
      console.error("Erreur lors de la connexion à MetaMask ou PushAPI", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchNotifications = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const userAlice = await PushAPI.initialize(signer, {
        env: CONSTANTS.ENV.STAGING,
      });

      // Récupérer la dernière notification
      const allNotifications = await userAlice.channel.notifications(channelAddress);
      if (allNotifications.notifications && allNotifications.notifications.length > 0) {
        setLastNotification(allNotifications.notifications[0]); // Dernière notification
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des notifications", error);
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      connectMetaMask();

      // Mettre à jour les notifications toutes les 10 secondes
      const interval = setInterval(() => {
        fetchNotifications();
      }, 30000); // Intervalle de 10 secondes

      // Nettoyage de l'intervalle lors du démontage du composant
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="bg-[#F8F9E9]">
      <div className="px-5 text-black">
        <TopBar />
        <div>
          {loading ? (
            <p>Chargement des notifications...</p>
          ) : lastNotification ? (
            <div className="px-6 py-3 rounded-3xl shadow-lg flex items-center">
              <Image src="/logo.png" alt="logo" width={50} height={50} />
              <div className="ml-3">
                <p><strong>{lastNotification.message.notification.title}</strong></p>
                <p className="text-xs">{lastNotification.message.notification.body}</p>
              </div>
            </div>
          ) : (
            <p>Aucune notification disponible.</p>
          )}
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Notification;