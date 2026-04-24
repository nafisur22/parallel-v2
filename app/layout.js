
import "./globals.css";

export const metadata = {
  title: "Parallel",
  description: "Parallel Operating System"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
