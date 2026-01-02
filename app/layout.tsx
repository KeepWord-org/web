import "@/app/globals.css";

import type { Metadata } from "next";

import { ThemeProvider } from "@/components/contexts/theme-provider";
import { inter } from "@/lib/fonts";
import { getSiteConfig } from "@/lib/site-config";

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteConfig();
  
  return {
    title: {
      default: config.metadata.title,
      template: `%s - ${config.name}`,
    },
    description: config.metadata.description,
    keywords: config.metadata.keywords,
    metadataBase: new URL(config.url),
    openGraph: {
      type: "website",
      locale: config.locale,
      url: config.url,
      title: config.metadata.title,
      description: config.metadata.description,
      siteName: config.name,
      images: config.metadata.ogImage
        ? [{ url: config.metadata.ogImage }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: config.metadata.title,
      description: config.metadata.description,
      images: config.metadata.ogImage ? [config.metadata.ogImage] : [],
    },
    icons: {
      icon: "/favicon.svg",
      apple: "/apple-touch-icon.png",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = await getSiteConfig();
  
  return (
    <html lang={config.locale} style={{ colorScheme: "dark" }} className="dark">
      <body className={`${inter.className} bg-background antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
