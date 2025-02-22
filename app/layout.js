import "./globals.css";  // Import the global styles

export const metadata = {
  title: "Honeypot Dashboard",
  description: "A simple honeypot frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
