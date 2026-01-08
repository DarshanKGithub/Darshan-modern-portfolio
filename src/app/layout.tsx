import "./globals.css";
import PageTransition from "../components/PageTransition";

export const metadata = {
  title: "Darshan | Software Developer",
  description: "Modern portfolio built with Next.js & TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <PageTransition>
        {children}
          
        </PageTransition>
      </body>
    </html>
  );
}