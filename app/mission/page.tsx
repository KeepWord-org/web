import ContentPageLayout from "@/components/layouts/content-page";
import { Item, ItemDescription, ItemIcon, ItemTitle } from "@/components/ui/item";
import {
  UsersIcon,
  ShieldIcon,
  HeartIcon,
  EyeIcon,
} from "lucide-react";

export default async function MissionPage() {
  const priorityItems = [
    {
      title: "Small groups work better",
      description: "Focus on small groups where people can build and fix trust",
      icon: <UsersIcon className="size-5 stroke-1" />,
    },
    {
      title: "Responsibility without scores",
      description: "People take responsibility because it matters, not because of public scores or views",
      icon: <ShieldIcon className="size-5 stroke-1" />,
    },
    {
      title: "Fix problems, don't just punish",
      description: "Show what happens and give people ways to fix things when they go wrong",
      icon: <HeartIcon className="size-5 stroke-1" />,
    },
    {
      title: "Clear communication, no tricks",
      description: "No viral loops or attention tricks—just honest, clear talking",
      icon: <EyeIcon className="size-5 stroke-1" />,
    },
  ];

  return (
    <ContentPageLayout>
      <div className="flex flex-col gap-8">
        <h1 className="text-center text-3xl font-semibold sm:text-5xl">
          Mission
        </h1>
        <div className="flex flex-col gap-8 max-w-[640px] mx-auto">
          <p className="text-md text-muted-foreground font-medium text-balance sm:text-xl">
            KeepWord is a non-profit foundation exploring different ways to help people keep their word online, instead of systems that reward attention over responsibility.
          </p>
          <p className="text-md text-muted-foreground font-medium text-balance sm:text-xl">
            Our mission is to help words mean something again—so people build trust by doing what they say, not by getting likes or views.
          </p>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
            {priorityItems.map((item, index) => (
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
        </div>
      </div>
    </ContentPageLayout>
  );
}

