import Image from "next/image";
import Link from 'next/link';

export default function TopBar() {
    return (
      // INSERT_YOUR_REWRITE_HERE
      <div className="py-3 flex justify-between items-center">
        <Link href="/pages/connection">
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
        </Link>
        <div>
            <Link href="/pages/notification">
                <Image
                    src="/bell.png"
                    alt="Notifications"
                    width={30}
                    height={30}
                />
            </Link>
        </div>
      </div>
    );
  }