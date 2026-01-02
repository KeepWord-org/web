import { ReactNode } from "react";
import { getSiteConfig } from "@/lib/site-config";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import { LayoutLines } from "@/components/ui/layout-lines";
import { Section } from "@/components/ui/section";

interface ContentPageProps {
  children: ReactNode;
}

/**
 * Shared layout for content pages
 * Provides navbar + footer with content area
 */
export default async function ContentPageLayout({ children }: ContentPageProps) {
  const config = await getSiteConfig();
  
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar {...config.sections.navbar} />
      <Section>
        <div className="max-w-container mx-auto">
          {children}
        </div>
      </Section>
      <Footer {...config.sections.footer} />
    </main>
  );
}

