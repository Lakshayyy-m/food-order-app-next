import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import QueryProvider from "@/providers/QueryProvider";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lomato",
  description: "This is a food ordering app",
  icons: { icon: "/icons/logo.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        layout: { socialButtonsVariant: "iconButton" },
        variables: {
          colorBackground: "#eae7e6",
          colorPrimary: "#c23231",
          colorInputBackground: "#f2f2f2",
        },
      }}
    >
      <html lang="en">
        <body className={`${manrope.className} bg-light-1`}>
          <QueryProvider>
            {children}
            <Toaster />
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
