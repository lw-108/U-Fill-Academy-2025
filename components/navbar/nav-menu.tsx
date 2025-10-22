import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const NavMenu = (props: NavigationMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-8 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:gap-6">
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link 
            href="#courses" 
            className={cn(
              "text-lg font-climate-crisis text-foreground/80 hover:text-foreground",
              "transition-all duration-300 hover:scale-105",
              "px-4 py-3 rounded-xl hover:bg-foreground/5",
              "border-2 border-transparent hover:border-foreground/20",
              "data-[orientation=vertical]:text-2xl data-[orientation=vertical]:py-4",
              "data-[orientation=vertical]:w-full data-[orientation=vertical]:text-center"
            )}
          >
            Courses
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link 
            href="#roadmap" 
            className={cn(
              "text-lg font-climate-crisis text-foreground/80 hover:text-foreground",
              "transition-all duration-300 hover:scale-105",
              "px-4 py-3 rounded-xl hover:bg-foreground/5",
              "border-2 border-transparent hover:border-foreground/20",
              "data-[orientation=vertical]:text-2xl data-[orientation=vertical]:py-4",
              "data-[orientation=vertical]:w-full data-[orientation=vertical]:text-center"
            )}
          >
            Roadmap
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link 
            href="#testimonials" 
            className={cn(
              "text-lg font-climate-crisis text-foreground/80 hover:text-foreground",
              "transition-all duration-300 hover:scale-105",
              "px-4 py-3 rounded-xl hover:bg-foreground/5",
              "border-2 border-transparent hover:border-foreground/20",
              "data-[orientation=vertical]:text-2xl data-[orientation=vertical]:py-4",
              "data-[orientation=vertical]:w-full data-[orientation=vertical]:text-center"
            )}
          >
            Testimonials
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link 
            href="#about" 
            className={cn(
              "text-lg font-climate-crisis text-foreground/80 hover:text-foreground",
              "transition-all duration-300 hover:scale-105",
              "px-4 py-3 rounded-xl hover:bg-foreground/5",
              "border-2 border-transparent hover:border-foreground/20",
              "data-[orientation=vertical]:text-2xl data-[orientation=vertical]:py-4",
              "data-[orientation=vertical]:w-full data-[orientation=vertical]:text-center"
            )}
          >
            About
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link 
            href="#contact" 
            className={cn(
              "text-lg font-climate-crisis text-foreground/80 hover:text-foreground",
              "transition-all duration-300 hover:scale-105",
              "px-4 py-3 rounded-xl hover:bg-foreground/5",
              "border-2 border-transparent hover:border-foreground/20",
              "data-[orientation=vertical]:text-2xl data-[orientation=vertical]:py-4",
              "data-[orientation=vertical]:w-full data-[orientation=vertical]:text-center"
            )}
          >
            Contact
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);