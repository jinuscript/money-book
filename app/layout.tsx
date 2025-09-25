import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "가계부",
  description: "내돈내산",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-kr">
      <body>{children}</body>
    </html>
  );
}
