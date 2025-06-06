import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Frontend App",
  description: "Frontend app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        {children}
    </div>
  );
}
