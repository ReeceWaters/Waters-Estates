export const metadata = {
  title: "Waters Estates",
  description: "Waters Estates – Residential and Multifamily Acquisitions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
