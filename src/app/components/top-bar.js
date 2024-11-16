import Image from "next/image";

export default function TopBar() {
    return (
      // INSERT_YOUR_REWRITE_HERE
      <div className="p-5">
        <Image
          src="/profil-removebg-preview.png"
          alt="Profil image"
          width={50}
          height={50}
          className="border-white border-2 rounded-full"
        />
      </div>
    );
  }