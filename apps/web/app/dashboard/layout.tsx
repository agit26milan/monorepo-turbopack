import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Dashboard App",
  description: "Dashboard app",
};

export default function RegisterLayout({
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
