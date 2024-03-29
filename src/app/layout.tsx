import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Heurist Search",
  description: "AI-based search engine powered by Heurist LLM API\n Deployed on Lepton",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {!!(process.env.UMAMI_URL && process.env.UMAMI_WEBSITE_ID) && (
        <script
          async
          src={process.env.UMAMI_URL}
          data-website-id={process.env.UMAMI_WEBSITE_ID}
        />
      )}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
