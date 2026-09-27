import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-[#0b0f17] px-4 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex gap-2 align-middle">
          <Image src={logo} alt="FitLog Logo" width={40} height={40} />
          <span className="text-lg font-extrabold tracking-wider text-white">
            FITLOG
          </span>
        </div>

        <p className="text-center text-xs text-gray-400">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
