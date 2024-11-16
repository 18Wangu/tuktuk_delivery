import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed bottom-0 w-full bg-[#F8F9E9] border-t-2 border-black">
        <div className="flex justify-around my-3">
            <Link href="/">
                <Image
                src="/home.png"
                alt="Home"
                width={30}
                height={30}
                />
            </Link>
            <Link href="/pages/location">
                <Image
                src="/location-pin.png"
                alt="Location"
                width={30}
                height={30}
                />
            </Link>
            <Link href="/pages/chat">
                <Image
                src="/chat.png"
                alt="Chat"
                width={30}
                height={30}
                />
            </Link>
        </div>
    </div>
  );
};

export default Navbar;
