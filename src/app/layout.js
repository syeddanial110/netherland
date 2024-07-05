import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationLayout from "@/navigation/NavigationLayout";
import ThemeWrapper from "@/components/ThemeWrapper/ThemeWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeWrapper>
          <NavigationLayout />
          {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}
