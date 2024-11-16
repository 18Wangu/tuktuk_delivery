import Image from "next/image";

export default function TopBar() {
    return (
      // INSERT_YOUR_REWRITE_HERE
      <div className="py-3 flex justify-between items-center">
        <div className="flex">
            <Image
                src="/user-profil.png"
                alt="Profil image"
                width={50}
                height={50}
                className="border-white border-2 rounded-full"
            />
            <div className="ml-4">
                <h1 className="font-mono text-black text-xl">Theo</h1>
                <h2 className="text-green-500 text-xs">connecté</h2>
            </div>
        </div>
        <div>
            <Image
                src="/bell.png"
                alt="Notifications"
                width={30}
                height={30}
            />
        </div>
      </div>
    );
  }