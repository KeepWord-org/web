import ContentPageLayout from "@/components/layouts/content-page";
import { Item, ItemDescription, ItemIcon, ItemTitle } from "@/components/ui/item";
import {
  MinusIcon,
  BarChartIcon,
  EyeIcon,
  ShieldIcon,
  LockIcon,
} from "lucide-react";

export default async function GovernancePage() {
  const items = [
    {
      title: "No attention tricks",
      description: "No likes, no viral features, no ways to keep people hooked",
      icon: <MinusIcon className="size-5 stroke-1" />,
    },
    {
      title: "No public scores or rankings",
      description: "No points, badges, or ways to show off that make people perform for others",
      icon: <BarChartIcon className="size-5 stroke-1" />,
    },
    {
      title: "Everything is open",
      description: "How we decide things, who's responsible, and how we get money—all written down for anyone to see",
      icon: <EyeIcon className="size-5 stroke-1" />,
    },
    {
      title: "Privacy and less data",
      description: "Only collect what's needed, and protect what we have",
      icon: <ShieldIcon className="size-5 stroke-1" />,
    },
    {
      title: "Locked to our purpose",
      description: "Rules built into our code and organization so we can't drift away from our mission",
      icon: <LockIcon className="size-5 stroke-1" />,
    },
  ];

  return (
    <ContentPageLayout>
      <div className="flex flex-col gap-8">
        <h1 className="text-center text-3xl font-semibold sm:text-5xl">
          Governance
        </h1>
        <div className="flex flex-col gap-6 max-w-[640px] mx-auto">
          <p className="text-md text-muted-foreground font-medium text-balance sm:text-xl">
            KeepWord operates as a non-profit foundation.
          </p>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                {item.description && (
                  <ItemDescription>{item.description}</ItemDescription>
                )}
              </Item>
            ))}
          </div>
          
          <p className="text-md text-muted-foreground font-medium text-balance sm:text-xl">
            How we make decisions, who's responsible, and how we get money—all written down openly so we don't lose sight of our purpose.
          </p>
        </div>
      </div>
    </ContentPageLayout>
  );
}

