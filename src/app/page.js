import Image from "next/image";
import Navbar from "./components/navbar";
import TopBar from "./components/top-bar";

export default function Home() {
  return (
    <div className="bg-[#F8F9E9]">
      <TopBar />
      
      {/* home screen */}
      <div>
        <Image
          src="/home-page.jpg"
          alt="Profil image"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover rounded-b-lg"
        />
        
        {/* 1st resto */}
        <div className="flex border rounded-md">
          <div>
            <Image
              src="/pad-thai.jpg"
              alt="Profil image"
              width={100}
              height={100}
            />
          </div>
          <div>
            <h1>TukTuk resto</h1>
            <h2>255 Bath</h2>
            <h2>15 min</h2>
          </div>
        </div>

        {/* 2nd resto */}
        <div className="flex border rounded-md">
          <div>
            <Image
              src="/pad-thai.jpg"
              alt="Profil image"
              width={100}
              height={100}
            />
          </div>
          <div>
            <h1>Blabla resto</h1>
            <h2>800 Bath</h2>
            <h2>5 min</h2>
          </div>
        </div>

        {/* 2nd resto */}
        <div className="flex border rounded-md">
          <div>
            <Image
              src="/pad-thai.jpg"
              alt="Profil image"
              width={100}
              height={100}
            />
          </div>
          <div>
            <h1>Blabla resto</h1>
            <h2>800 Bath</h2>
            <h2>5 min</h2>
          </div>
        </div>
        {/* 2nd resto */}
        <div className="flex border rounded-md">
          <div>
            <Image
              src="/pad-thai.jpg"
              alt="Profil image"
              width={100}
              height={100}
            />
          </div>
          <div>
            <h1>Blabla resto</h1>
            <h2>800 Bath</h2>
            <h2>5 min</h2>
          </div>
        </div>
        {/* 2nd resto */}
        <div className="flex border rounded-md">
          <div>
            <Image
              src="/pad-thai.jpg"
              alt="Profil image"
              width={100}
              height={100}
            />
          </div>
          <div>
            <h1>Blabla resto</h1>
            <h2>800 Bath</h2>
            <h2>5 min</h2>
          </div>
        </div>
        {/* 2nd resto */}
        <div className="flex border rounded-md">
          <div>
            <Image
              src="/pad-thai.jpg"
              alt="Profil image"
              width={100}
              height={100}
            />
          </div>
          <div>
            <h1>Blabla resto</h1>
            <h2>800 Bath</h2>
            <h2>5 min</h2>
          </div>
        </div>
        {/* 2nd resto */}
        <div className="flex border rounded-md">
          <div>
            <Image
              src="/pad-thai.jpg"
              alt="Profil image"
              width={100}
              height={100}
            />
          </div>
          <div>
            <h1>Blabla resto</h1>
            <h2>800 Bath</h2>
            <h2>5 min</h2>
          </div>
        </div>
        {/* 2nd resto */}
        <div className="flex border rounded-md">
          <div>
            <Image
              src="/pad-thai.jpg"
              alt="Profil image"
              width={100}
              height={100}
            />
          </div>
          <div>
            <h1>Blabla resto</h1>
            <h2>800 Bath</h2>
            <h2>5 min</h2>
          </div>
        </div>
      </div>

      {/* nav bar */}
      <Navbar />

    </div>
  );
}
