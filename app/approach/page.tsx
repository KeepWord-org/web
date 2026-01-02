import ContentPageLayout from "@/components/layouts/content-page";
import { Item, ItemDescription, ItemIcon, ItemTitle } from "@/components/ui/item";
import {
  UsersIcon,
  FileTextIcon,
  CodeIcon,
  BookOpenIcon,
} from "lucide-react";

export default async function ApproachPage() {
  const items = [
    {
      title: "Test with real groups",
      description: "Work with schools, teams, and local groups—places where trust really matters.",
      icon: <UsersIcon className="size-5 stroke-1" />,
    },
    {
      title: "Rules first, tools second",
      description: "Figure out clear rules about promises, results, and fixing problems before building any software.",
      icon: <FileTextIcon className="size-5 stroke-1" />,
    },
    {
      title: "Simple tools only",
      description: "If we build software, keep it simple—only what helps people keep their word, nothing to keep them hooked.",
      icon: <CodeIcon className="size-5 stroke-1" />,
    },
    {
      title: "Share what we learn",
      description: "Write down what works, what doesn't, and what others can use in their own groups.",
      icon: <BookOpenIcon className="size-5 stroke-1" />,
    },
  ];

  return (
    <ContentPageLayout>
      <div className="flex flex-col gap-8">
        <h1 className="text-center text-3xl font-semibold sm:text-5xl">
          Approach (2026)
        </h1>
        <div className="flex flex-col gap-8 max-w-[640px] mx-auto">
          <p className="text-md text-muted-foreground font-medium text-balance sm:text-xl">
            KeepWord works by testing ideas with small groups and sharing what we learn openly.
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
          
          <p className="text-md text-foreground font-semibold text-balance sm:text-xl text-center">
            We're not trying to grow big. We're trying to learn and help people.
          </p>
        </div>
      </div>
    </ContentPageLayout>
  );
}

