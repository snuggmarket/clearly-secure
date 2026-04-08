import { useState } from "react";
import { Book, Menu, Sunset, Trees, Zap, Phone, Mail, MapPin, ChevronDown, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
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

const DesktopItem = ({ item }: { item: MenuItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (item.items) {
    return (
      <div 
        className="relative group py-4 px-2"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button className="flex items-center gap-1 bg-transparent text-[13px] font-semibold tracking-wide uppercase opacity-80 hover:opacity-100 transition-opacity dark:text-white group-hover:opacity-100">
          {item.title}
          <ChevronDown className={cn("size-3.5 transition-transform duration-200", isOpen && "rotate-180")} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50"
            >
              <div className="w-80 p-3 bg-white dark:bg-[#111827] border border-slate-200 dark:border-white/10 shadow-2xl rounded-xl">
                <ul className="grid gap-2">
                  {item.items.map((subItem) => (
                    <li key={subItem.title}>
                      <a
                        href={subItem.url}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group/item"
                      >
                        {subItem.icon && (
                          <div className="size-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-white/10 text-brand-cta group-hover/item:scale-110 transition-transform">
                            {subItem.icon}
                          </div>
                        )}
                        <div>
                          <div className="text-sm font-bold dark:text-white">
                            {subItem.title}
                          </div>
                          {subItem.description && (
                            <p className="text-sm leading-snug text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                              {subItem.description}
                            </p>
                          )}
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <a 
      href={item.url}
      className="text-[13px] font-semibold tracking-wide uppercase opacity-80 hover:opacity-100 transition-opacity dark:text-white px-2 py-4"
    >
      {item.title}
    </a>
  );
};

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

        <nav className="hidden lg:flex flex-row items-center justify-center gap-8 flex-grow pointer-events-auto">
          {menu.map((item) => (
            <DesktopItem key={item.title} item={item} />
          ))}
        </nav>

        <div className="flex-shrink-0 hidden lg:flex items-center gap-4">
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
              <Button variant="ghost" size="icon" className="group">
                <Menu className="size-6 group-data-[state=open]:hidden" />
                <X className="size-6 hidden group-data-[state=open]:block" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] p-0 flex flex-col bg-white dark:bg-slate-900 border-none">
              <div className="p-6 border-b dark:border-white/10 flex items-center justify-between">
                <a href={logo.url} className="flex items-center gap-2">
                  <div className="relative w-40 h-10">
                    <img src={logo.src} className="w-full h-full object-contain" alt={logo.alt} />
                  </div>
                </a>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <X className="size-6" />
                  </Button>
                </SheetTrigger>
              </div>
              <div className="flex-1 overflow-y-auto py-6 px-4">
                <div className="flex flex-col gap-1">
                  <Accordion type="single" collapsible className="w-full">
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                </div>

                <div className="flex flex-col gap-6 w-full pt-8 border-t border-slate-100 dark:border-white/10 mt-6">
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
