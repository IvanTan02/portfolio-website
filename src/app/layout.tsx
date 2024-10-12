import type { Metadata } from "next";
import "./globals.css";
import { Lexend_Deca } from "next/font/google"

const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Portfolio | Ivan Tan",
  description: "Portfolio website of Ivan Tan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="night" lang="en">
      <body
        className={`${lexendDeca.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
