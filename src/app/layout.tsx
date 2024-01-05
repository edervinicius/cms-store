import "./globals.css";

import { Header, Footer } from "@/components";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eat Test",
  description: "Eder Test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex-grow">
          <div className="flex flex-col justify-between min-h-screen">
            <div className="divide-y divide-slate-100">
              <Header />
              {children}
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
