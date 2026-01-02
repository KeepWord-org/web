import ContentPageLayout from "@/components/layouts/content-page";
import { getSiteConfig } from "@/lib/site-config";

export default async function ContactPage() {
  const config = await getSiteConfig();
  
  return (
    <ContentPageLayout>
      <div className="flex flex-col gap-8">
        <h1 className="text-center text-3xl font-semibold sm:text-5xl">
          Contact
        </h1>
        <div className="flex flex-col gap-6 max-w-[640px] mx-auto text-center">
          <p className="text-md text-muted-foreground font-medium text-balance sm:text-xl">
            To partner with us, work on research together, or discuss testing ideas, please visit our contact page.
          </p>
          <p className="text-md text-muted-foreground font-medium italic sm:text-xl">
            (KeepWord does not accept marketing or growth proposals.)
          </p>
        </div>
      </div>
    </ContentPageLayout>
  );
}

