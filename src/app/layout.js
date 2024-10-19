import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import NavBar from "../../components/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Tic-Tac-Toe | Home",
  description: "Enjoy the classic XO game (Tic-Tac-Toe)! Challenge your friends or play against the computer in this fun, strategic game. Perfect for all ages!",
  keywords: ["game", "tic tac toe game", "games", "board game", "tic tac toe game in java", "tic-tac-toe (game)", "tic-tac-toe game", "xo game", "card game", "tic-tac-toe number game", "parkour game", "tic tac toe game code", "tic tac toe glow game", "tic tac toe game react js", "how to win tic tac toe game", "tic tac toe glow game play", "tic tac toe game with html", "building tic tac toe game", "indoor games", "tic tac toe game in react js", "beautiful tic tac toe game", "the game", "how to code a tic tac toe game"],
  viewport:{initialScale: 1, width: 'device-width'},
  authors:[{name : "Ehab George | HOoBs"}],
  icons:{icon:"https://cdn-icons-png.flaticon.com/128/5706/5706044.png" , apple:"https://cdn-icons-png.flaticon.com/128/5706/5706044.png"}
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {children}
        <Analytics />
      </body>
    </html>
  );
}
