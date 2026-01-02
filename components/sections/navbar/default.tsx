import { type VariantProps } from "class-variance-authority";
import { Menu } from "lucide-react";
import { ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "../../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";
import KeepWordNavigation from "./keepword-navigation";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";

interface NavbarLink {
  text: string;
  href: string;
}

interface NavbarActionProps {
  text: string;
  href: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
  isButton?: boolean;
}

interface NavbarProps {
  logo?: ReactNode;
  name?: string;
  homeUrl?: string;
  mobileLinks?: NavbarLink[];
  desktopLinks?: NavbarLink[];
  actions?: NavbarActionProps[];
  showNavigation?: boolean;
  customNavigation?: ReactNode;
  className?: string;
}

export default function Navbar({
  logo,
  name = "KeepWord",
  homeUrl = "/",
  mobileLinks = [],
  desktopLinks = [],
  actions = [],
  showNavigation = true,
  customNavigation,
  className,
}: NavbarProps) {
  // Use desktopLinks if provided, otherwise fall back to mobileLinks
  const navigationLinks = desktopLinks.length > 0 ? desktopLinks : mobileLinks;
  
  return (
    <header className={cn("sticky top-0 z-50 -mb-4 px-4 pb-4", className)}>
      <div className="fade-bottom bg-background/15 absolute left-0 h-24 w-full backdrop-blur-lg"></div>
      <div className="max-w-container relative mx-auto">
        <NavbarComponent>
          <NavbarLeft>
            <Link
              href={homeUrl}
              className="flex items-center gap-2 text-xl font-bold"
            >
              {logo}
              {name}
            </Link>
            {showNavigation && (
              customNavigation || (
                <KeepWordNavigation
                  logo={logo}
                  name={name}
                  homeUrl={homeUrl}
                  links={navigationLinks}
                />
              )
            )}
          </NavbarLeft>
          <NavbarRight>
            {actions.map((action, index) =>
              action.isButton ? (
                <Button
                  key={index}
                  variant={action.variant || "default"}
                  asChild
                >
                  <Link href={action.href}>
                    {action.icon}
                    {action.text}
                    {action.iconRight}
                  </Link>
                </Button>
              ) : (
                <Link
                  key={index}
                  href={action.href}
                  className="hidden text-sm md:block text-muted-foreground hover:text-foreground transition-colors"
                >
                  {action.text}
                </Link>
              ),
            )}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href={homeUrl}
                    className="flex items-center gap-2 text-xl font-bold"
                  >
                    {logo}
                    <span>{name}</span>
                  </Link>
                  {mobileLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.text}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
