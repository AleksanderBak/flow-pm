import { Amaranth } from "next/font/google";
import { IoIosArrowDown } from "react-icons/io";

const amaranth = Amaranth({
  weight: "700",
  subsets: ["latin"],
});

const Header = () => {
  return (
    <header className="bg-white h-24 flex-shrink-0 flex justify-between px-8">
      <div className="flex justify-between items-center h-full">
        <h1
          className={`text-4xl font-bold text-primary-700 ${amaranth.className}`}
        >
          Flow
        </h1>
      </div>
      <div className="flex items-center border border-neutral-200 self-center px-4 py-2 rounded-[8px]">
        <img
          src="/avatar.png"
          className="h-10 border border-neutral-400 rounded-full"
        />
        <div>
          <p className="ml-4 text-none font-semibold text-black">John Doe</p>
          <p className="ml-4 text-xs text-neutral-400">Admin</p>
        </div>
        <IoIosArrowDown className="ml-4" />
      </div>
    </header>
  );
};

export default Header;
