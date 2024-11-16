import "./globals.css";
import Head from "next/head"; // Ajoutez cette ligne

export const metadata = {
  title: "TukTuk Delivery",
  description: "Create by Theo Premartin & Valentin Bonnet",
  icons: {
    icon: "/logo.png", // Chemin vers votre logo
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#F8F9E9]">
      <body className="font-mono">
        {children}
      </body>
    </html>
  );
}
