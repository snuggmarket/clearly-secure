import { Book, Menu, Sunset, Trees, Zap, Phone, Mail, MapPin } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
  auth?: {
    login: {
      text: string;
      url: string;
    };
    signup: {
      text: string;
      url: string;
    };
    extra?: React.ReactNode;
  };
}

const Navbar1 = ({
  logo = {
    url: "/",
    src: "/images/logo-clearly-secure.png",
    alt: "logo",
    title: "",
  },
  menu = [],
  mobileExtraLinks = [],
  auth = {
    login: { text: "", url: "#" },
    signup: { text: "Call Us Now", url: "tel:02393552773" },
  },
}: Navbar1Props) => {
  return (
    <section className="h-24 flex items-center">
      <div className="max-w-[1600px] w-full mx-auto px-4 lg:px-8 flex items-center justify-between relative">
        <div className="flex items-center">
          <a href={logo.url} className="flex items-center gap-2">
            <div className="relative w-52 h-14">
              <img src={logo.src} className="w-full h-full object-contain" alt={logo.alt} />
            </div>
          </a>
        </div>

        <nav className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {menu.map((item) => renderMenuItem(item))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          {auth.extra}
          <Button asChild className="bg-brand-cta hover:bg-brand-cta-hover text-white px-7 py-3 rounded-full font-bold text-base shadow-[0_4px_14px_0_rgba(34,197,94,0.2)] transition-all transform hover:-translate-y-0.5 h-auto flex items-center gap-2">
            <a href={auth.signup.url}>
              <Phone className="size-4" />
              {auth.signup.text}
            </a>
          </Button>
        </div>
        <div className="block lg:hidden flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-transparent -mr-2">
                <Menu className="size-6 dark:text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="overflow-y-auto w-full h-[100dvh] border-none p-6 flex flex-col pt-20">
              <div className="flex flex-col gap-8">
                <Accordion
                  type="single"
                  collapsible
                  className="flex w-full flex-col gap-4"
                >
                  {menu.map((item) => renderMobileMenuItem(item))}
                </Accordion>
                
                <div className="flex flex-col gap-6 w-full pt-8 border-t border-slate-100 dark:border-white/10">
                  <div className="flex items-center justify-between px-2">
                    <span className="text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Settings</span>
                    {auth.extra}
                  </div>

                  <div className="flex flex-col gap-4 px-2">
                    <span className="text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Contact Info</span>
                    <div className="flex flex-col gap-3">
                      <a href="tel:02393552773" className="flex items-center gap-3 text-lg font-medium text-brand-text dark:text-white hover:text-brand-primary transition-colors">
                        <div className="size-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                          <Phone className="size-5" />
                        </div>
                        02393 552773
                      </a>
                      <a href="mailto:clearlysecure@hotmail.com" className="flex items-center gap-3 text-lg font-medium text-brand-text dark:text-white hover:text-brand-primary transition-colors">
                        <div className="size-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                          <Mail className="size-5" />
                        </div>
                        clearlysecure@hotmail.com
                      </a>
                    </div>
                  </div>

                  <Button asChild className="bg-brand-cta hover:bg-brand-cta-hover text-white rounded-2xl font-bold h-14 text-lg shadow-lg w-full mt-2">
                    <a href={auth.signup.url} className="flex items-center gap-2 justify-center">
                      <Phone className="size-5" />
                      {auth.signup.text}
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 dark:text-white dark:hover:text-white dark:data-[state=open]:bg-white/10 text-sm font-semibold tracking-wide uppercase opacity-80 hover:opacity-100 transition-opacity">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="w-80 p-3 bg-white dark:bg-[#111827] border-none shadow-2xl rounded-xl">
            {item.items.map((subItem) => (
              <li key={subItem.title}>
                <NavigationMenuLink asChild>
                  <a
                    className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 dark:hover:bg-white/5 group"
                    href={subItem.url}
                  >
                    <div className="text-brand-primary dark:text-[#7dd3fc]">
                      {subItem.icon}
                    </div>
                    <div>
                      <div className="text-sm font-bold dark:text-white">
                        {subItem.title}
                      </div>
                      {subItem.description && (
                        <p className="text-sm leading-snug text-slate-500 dark:text-slate-400 mt-1">
                          {subItem.description}
                        </p>
                      )}
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink asChild>
        <a
          className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-semibold tracking-wide uppercase opacity-80 hover:opacity-100 transition-all hover:text-brand-primary dark:text-white dark:hover:text-[#7dd3fc]"
          href={item.url}
        >
          {item.title}
        </a>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0 w-full text-left">
        <AccordionTrigger className="py-2 text-xl font-bold hover:no-underline justify-between gap-3 text-brand-text dark:text-white">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <a
              key={subItem.title}
              className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
              href={subItem.url}
            >
              {subItem.icon}
              <div>
                <div className="text-lg font-bold">{subItem.title}</div>
                {subItem.description && (
                  <p className="text-sm leading-snug text-muted-foreground mt-1">
                    {subItem.description}
                  </p>
                )}
              </div>
            </a>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-xl font-bold py-2 w-full text-left block text-brand-text dark:text-white">
      {item.title}
    </a>
  );
};

export { Navbar1 };
