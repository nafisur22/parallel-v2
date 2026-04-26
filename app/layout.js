
import "./globals.css";

export const metadata = {
  title: "Parallel",
  description: "Parallel Operating System",
  icons: {
    icon: "/Favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
