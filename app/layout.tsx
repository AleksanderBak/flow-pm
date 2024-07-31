import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

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
          <Header />
          <div className="bg-green-200 flex-grow flex flex-row">
            <Sidebar />
            <main className="bg-primary-100 w-full">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
