import './globals.css';

export const metadata = {
  title: 'Unmesh Nikumbh — AI/ML & Full Stack Developer',
  description:
    'Portfolio of Unmesh Nikumbh — AI/ML and Full Stack Developer building production-ready systems that solve real-world problems.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="noise">{children}</body>
    </html>
  );
}