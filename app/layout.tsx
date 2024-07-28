import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Flow - PM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-full">
        <div className="flex flex-col h-full">
          <header className="bg-white h-24 flex-shrink-0"></header>
          <div className="bg-green-200 flex-grow flex flex-row">
            <nav className="bg-primary-950 w-[10rem] flex-none pl-6 pt-12">
              <Sidebar />
            </nav>
            <main className="bg-primary-100 w-full">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
