
import Navbar from "../Components/Navbar";
import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });


export const metadata = {
  title: "To-Do APP - Projeto Francisco Vieira",
  description: "Projeto Francisco Vieira",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}> 
        <Navbar />
        {children}
      </body>
    </html>
  );
}
