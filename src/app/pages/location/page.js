"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import TopBar from "@/app/components/top-bar";
import Navbar from "@/app/components/navbar";

const OrderStatus = {
  Ordered: "Ordered",
  Preparing: "Preparing",
  OnTheWay: "OnTheWay",
  Delivered: "Delivered",
};

const Location = () => {
  const [currentStatus, setCurrentStatus] = useState(OrderStatus.Ordered);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatus((prevStatus) => {
        if (prevStatus === OrderStatus.Ordered) return OrderStatus.Preparing;
        if (prevStatus === OrderStatus.Preparing) return OrderStatus.OnTheWay;
        if (prevStatus === OrderStatus.OnTheWay) return OrderStatus.Delivered;
        return prevStatus;
      });
    }, 10000); // Change state every 10 seconds

    return () => clearInterval(interval);
  }, []);

  // Calculate the progress percentage based on current status
  const getProgressPercentage = (status) => {
    switch (status) {
      case OrderStatus.Ordered:
        return 25;
      case OrderStatus.Preparing:
        return 50;
      case OrderStatus.OnTheWay:
        return 75;
      case OrderStatus.Delivered:
        return 100;
      default:
        return 0;
    }
  };

  const progress = getProgressPercentage(currentStatus);

  return (
    <div>
        <div className="bg-[#F8F9E9] px-5 pb-8 sm:px-10 sm:py-12">
        {/* Top Bar */}
        <TopBar />

        {/* Header */}
        <div className="text-center mb-8">
            <h1
            className={`text-4xl font-semibold ${getTextColor(
                currentStatus
            )} shadow-md p-3 rounded-md`}
            >
            {getNotificationTitle(currentStatus)}
            </h1>
            <p className={`mt-3 text-lg ${getTextColor(currentStatus)} text-gray-600`}>
            {getNotificationBody(currentStatus)}
            </p>
        </div>

        {/* Status Icons with titles */}
        <div className="flex justify-around items-center my-8">
            <StatusIcon icon="/check-out.png" title="Order Confirmed" isActive={currentStatus === OrderStatus.Ordered} />
            <StatusIcon icon="/cooking.png" title="Preparing" isActive={currentStatus === OrderStatus.Preparing} />
            <StatusIcon icon="/fast-delivery.png" title="On the Way" isActive={currentStatus === OrderStatus.OnTheWay} />
            <StatusIcon icon="/delivery-man.png" title="Delivered" isActive={currentStatus === OrderStatus.Delivered} />
        </div>

        {/* Progress Bar with circles */}
        <div className="relative w-full mt-8 sm:mt-10">
            <div className="w-full h-3 bg-gray-200 rounded-full">
            <div
                className="h-full bg-green-500 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${progress}%` }}
            />
            </div>
            {/* Circles */}
            <div className="absolute top-1/2 transform -translate-y-1/2 left-0 w-full flex justify-between px-1">
            <ProgressCircle isFilled={progress >= 25} />
            <ProgressCircle isFilled={progress >= 50} />
            <ProgressCircle isFilled={progress >= 75} />
            <ProgressCircle isFilled={progress === 100} />
            </div>
        </div>

        {/* Order History Link */}
        <div className="mt-6 text-center">
            <a
            href="https://eth-sepolia.blockscout.com/address/0x57188097febBb33e97b2fF066624F11d9d016B90"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700 text-lg font-medium transition duration-300"
            >
            View Your Order's On-Chain Status
            </a>
        </div>

        {/* Bottom Navbar */}
        </div>
        <Navbar />
    </div>
  );
};

// Status icon component to reuse for each step
const StatusIcon = ({ icon, title, isActive }) => (
  <div
    className={`flex flex-col items-center transition-all duration-300 ${isActive ? "opacity-100" : "opacity-60"}`}
  >
    <Image src={icon} alt={title} width={60} height={60} />
    <span className="text-xs sm:text-sm text-center text-black mt-2 font-medium">{title}</span>
  </div>
);

// Progress Circle Component
const ProgressCircle = ({ isFilled }) => (
  <div
    className={`w-6 h-6 rounded-full transition-all duration-300 ${
      isFilled ? "bg-green-500" : "bg-gray-300"
    }`}
  />
);

// Text color based on order status
const getTextColor = (status) => {
  switch (status) {
    case OrderStatus.Ordered:
      return "text-blue-500";
    case OrderStatus.Preparing:
      return "text-yellow-500";
    case OrderStatus.OnTheWay:
      return "text-orange-500";
    case OrderStatus.Delivered:
      return "text-green-500";
    default:
      return "";
  }
};

// Notification title based on status
const getNotificationTitle = (status) => {
  switch (status) {
    case OrderStatus.Ordered:
      return "🛒 Order Confirmed";
    case OrderStatus.Preparing:
      return "🍳 Order is Being Prepared";
    case OrderStatus.OnTheWay:
      return "🚴 Order is On the Way";
    case OrderStatus.Delivered:
      return "✅ Order Delivered";
    default:
      return "";
  }
};

// Notification body based on status
const getNotificationBody = (status) => {
  switch (status) {
    case OrderStatus.Ordered:
      return "Thank you for ordering with TukTuk Delivery! Your order is now confirmed and will be prepared shortly.";
    case OrderStatus.Preparing:
      return "Our chefs are busy preparing your delicious order. Hang tight, it's almost ready!";
    case OrderStatus.OnTheWay:
      return "Great news! Your order is on its way and will reach you soon. Enjoy!";
    case OrderStatus.Delivered:
      return "Your order has been successfully delivered. Thank you for choosing TukTuk Delivery. Bon appétit!";
    default:
      return "";
  }
};

export default Location;