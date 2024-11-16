import Image from "next/image";
import Navbar from "./components/navbar";
import TopBar from "./components/top-bar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#F8F9E9]">
      <div className="px-5">
        <TopBar />
        
        {/* home screen */}
        <div>
          <Image
            src="/home-page.jpg"
            alt="Profil image"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover rounded-lg mb-4"
          />
          
          {/* 1st resto */}
          <div className="flex  border-black rounded-lg my-2">
            <div>
              <Image
                src="/pad-thai.jpg"
                alt="Pad Thai"
                width={100}
                height={100}
                className="rounded-lg"
              />
            </div>
            <div className="text-black ml-3">
              <h1 className="text-xl">Chef Thanom</h1>
              <h2 className="text-xs">฿300–400</h2>
              <h2 className="text-xs">15 min</h2>
            </div>
          </div>
          {/* 2nd resto */}
          <div className="flex  border-black rounded-lg my-2">
            <div>
              <Image
                src="/tom-yum.jpg"
                alt="Tom Yum Food"
                width={100}
                height={100}
                className="rounded-lg"
              />
            </div>
            <div className="text-black ml-3">
              <h1 className="text-xl">Jim Thompson</h1>
              <h2 className="text-xs">฿350</h2>
              <h2 className="text-xs">7 min</h2>
            </div>
          </div>
          {/* 3rd resto */}
          <div className="flex  border-black rounded-lg my-2">
            <div>
              <Image
                src="/soup.jpg"
                alt="Tom Yum Food"
                width={100}
                height={100}
                className="rounded-lg"
              />
            </div>
            <div className="text-black ml-3">
              <h1 className="text-xl">Blue Elephant</h1>
              <h2 className="text-xs">฿150</h2>
              <h2 className="text-xs">20 min</h2>
            </div>
          </div>
          {/* 4th resto */}
          <div className="flex  border-black rounded-lg my-2">
            <div>
              <Image
                src="/brochette.jpg"
                alt="Tom Yum Food"
                width={100}
                height={100}
                className="rounded-lg"
              />
            </div>
            <div className="text-black ml-3">
              <h1 className="text-xl">Raan Jay Fai</h1>
              <h2 className="text-xs">฿400</h2>
              <h2 className="text-xs">3 min</h2>
            </div>
          </div>
          {/* 5th resto */}
          <div className="flex  border-black rounded-lg my-2">
            <div>
              <Image
                src="/carrot.jpg"
                alt="Tom Yum Food"
                width={100}
                height={100}
                className="rounded-lg"
              />
            </div>
            <div className="text-black ml-3">
              <h1 className="text-xl">Issaya Siamese</h1>
              <h2 className="text-xs">฿350-600</h2>
              <h2 className="text-xs">8 min</h2>
            </div>
          </div>
          {/* 6th resto */}
          <div className="flex  border-black rounded-lg my-2">
            <div>
              <Image
                src="/thai-breakfast.jpg"
                alt="Tom Yum Food"
                width={100}
                height={100}
                className="rounded-lg"
              />
            </div>
            <div className="text-black ml-3">
              <h1 className="text-xl">Nahm</h1>
              <h2 className="text-xs">฿220</h2>
              <h2 className="text-xs">13 min</h2>
            </div>
          </div>
          {/* 7th resto */}
          <div className="flex  border-black rounded-lg my-2 mb-20">
            <div>
              <Image
                src="/thai-coconut.jpg"
                alt="Tom Yum Food"
                width={100}
                height={100}
                className="rounded-lg"
              />
            </div>
            <div className="text-black ml-3">
              <h1 className="text-xl">Bo.Lan</h1>
              <h2 className="text-xs">฿130</h2>
              <h2 className="text-xs">9 min</h2>
            </div>
          </div>
        </div>
      </div>
  
      {/* nav bar */}
      <Navbar />

    </div>
  );
}
