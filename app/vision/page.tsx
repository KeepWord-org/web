import ContentPageLayout from "@/components/layouts/content-page";
import { Item, ItemDescription, ItemIcon, ItemTitle } from "@/components/ui/item";
import {
  FileCheckIcon,
  UsersIcon,
  EyeIcon,
  HeartIcon,
} from "lucide-react";

export default async function VisionPage() {
  const visionItems = [
    {
      title: "Promises matter more than posts",
      description: "What you commit to doing is more important than what you share",
      icon: <FileCheckIcon className="size-5 stroke-1" />,
    },
    {
      title: "Relationships grow from doing what you say",
      description: "Trust builds when people follow through on their commitments",
      icon: <UsersIcon className="size-5 stroke-1" />,
    },
    {
      title: "Problems are visible and fixable",
      description: "When things go wrong, everyone sees it and people can fix it together",
      icon: <EyeIcon className="size-5 stroke-1" />,
    },
    {
      title: "Responsibility is rewarded, not drama",
      description: "People are recognized for being reliable, not for causing conflict",
      icon: <HeartIcon className="size-5 stroke-1" />,
    },
  ];

  return (
    <ContentPageLayout>
      <div className="flex flex-col gap-8">
        <h1 className="text-center text-3xl font-semibold sm:text-5xl">
          Vision
        </h1>
        <div className="flex flex-col gap-8 max-w-[640px] mx-auto">
          <p className="text-md text-muted-foreground font-medium text-balance sm:text-xl">
            A future where online tools help people trust each other, instead of trying to get their attention.
          </p>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
            {visionItems.map((item, index) => (
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
            KeepWord aims to find out what works and share it so schools, teams, and communities can use it—without needing to make money from it.
          </p>
        </div>
      </div>
    </ContentPageLayout>
  );
}

