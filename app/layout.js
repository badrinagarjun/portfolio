import './globals.css';

export const metadata = {
  title: 'Badri Nagarjun | Portfolio',
  description: 'Portfolio of Badri Nagarjun',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
