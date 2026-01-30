import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Amrinder Singh - Software Engineer & Backend Developer",
  description: "Software Engineer Intern at InterviewBit. Backend & AI Integration specialist focused on building scalable APIs and cloud deployments.",
  keywords: ["Amrinder Singh", "Software Engineer", "Backend Developer", "Full Stack", "Next.js", "React", "Node.js", "TypeScript"],
  authors: [{ name: "Amrinder Singh" }],
  openGraph: {
    title: "Amrinder Singh - Software Engineer & Backend Developer",
    description: "Software Engineer building scalable backend systems and AI-powered solutions",
    url: "https://github.com/aamrindersingh",
    siteName: "Amrinder Singh Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/180407147?v=4",
        width: 1200,
        height: 630,
        alt: "Amrinder Singh",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amrinder Singh - Software Engineer",
    description: "Software Engineer building scalable backend systems and AI-powered solutions",
    images: ["https://avatars.githubusercontent.com/u/180407147?v=4"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
