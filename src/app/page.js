import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-row justify-center items-center bg-gradient-to-r from-blue-950 to-red-950 h-screen">
      <div>
        <Link className="brightness-50 drop-shadow-lg p-5" href="/game">
          <img height="75" width="75" src="https://cdn-icons-png.flaticon.com/128/15338/15338154.png" alt="start-btn"/> 
        </Link>
      </div>      
    </div>
  );
}
