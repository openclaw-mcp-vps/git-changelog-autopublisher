import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitChangelog — Auto-generate changelogs from git commits",
  description: "Analyzes git commits, categorizes changes, and automatically publishes formatted changelogs to websites and documentation."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="99773265-c71b-4887-9d49-760dbd2c8bb8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
