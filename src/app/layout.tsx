import "./globals.css";
import PageTransition from "../components/PageTransition";
import Background3D from "../components/3d/Background3D";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Darshan | Digital Experience",
  description: "Minimalist luxury portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground antialiased selection:bg-accent-1/20 selection:text-primary bg-grain relative`}>
        {/* Ambient Colorful Glows */}
        <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-accent-1/5 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="fixed top-[40%] right-[-10%] w-[35vw] h-[35vw] bg-accent-2/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="fixed bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-accent-3/5 rounded-full blur-[150px] pointer-events-none -z-10" />
        
        {/* Full-site 3D Background */}
        <Background3D />
        
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}