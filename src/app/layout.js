// ══════════════════════════════════════════════════════
// COMPONENT: RootLayout
// PURPOSE: Sets up the structural wrapper for the global HTML document.
// TYPE: Server Component (Default) — Renders static HTML layouts efficiently.
// PROPS: children — React elements rendered dynamically inside this wrapper.
// ══════════════════════════════════════════════════════
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[#0b0f19] text-gray-100">
        {children}
      </body>
    </html>
  );
}