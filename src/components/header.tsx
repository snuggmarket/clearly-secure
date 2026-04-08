'use client';

import * as React from "react";
import { useTheme } from "next-themes";
import { ThemeToggle } from "./theme-toggle";
import { Navbar1 } from "./shadcnblocks-com-navbar1";
import { Layout, DoorOpen, Key } from "lucide-react";

export function Header() {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoSrc = mounted && theme === 'dark' 
    ? "/images/logo-light-theme.png" 
    : "/images/logo-clearly-secure.png";

  const menu = [
    { title: "Home", url: "/" },
    { title: "About Us", url: "/about" },
    {
      title: "Services",
      url: "#",
      items: [
        {
          title: "Windows",
          description: "Glass repairs, frame fixes, and specialized maintenance.",
          icon: <Layout className="size-5 shrink-0" />,
          url: "/windows",
        },
        {
          title: "Doors",
          description: "UPVC, composite, and timber door repairs and installation.",
          icon: <DoorOpen className="size-5 shrink-0" />,
          url: "/doors",
        },
        {
          title: "Locksmith",
          description: "Emergency entry, lock upgrades, and home security audits.",
          icon: <Key className="size-5 shrink-0" />,
          url: "/locksmith",
        },
      ],
    },
    { title: "Testimonials", url: "/testimonials" },
    {
      title: "Gallery",
      url: "#",
      items: [
        {
          title: "Doors",
          description: "Explore our collection of security and designer doors.",
          icon: <DoorOpen className="size-5 shrink-0" />,
          url: "/gallery/doors",
        },
        {
          title: "Windows",
          description: "See our premium window installations and repairs.",
          icon: <Layout className="size-5 shrink-0" />,
          url: "/gallery/windows",
        },
      ],
    },
    { title: "Contact", url: "/contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? (theme === 'dark' ? "dark-header shadow-2xl" : "bg-white/95 backdrop-blur-xl shadow-lg") 
        : "bg-transparent shadow-none"
    }`}>
      <Navbar1 
        logo={{
          url: "/",
          src: logoSrc,
          alt: "Clearly Secure Logo",
          title: "" 
        }}
        menu={menu}
        auth={{
          extra: <ThemeToggle />,
          login: { text: "", url: "#" },
          signup: { text: "Call Us Now", url: "tel:02393552773" }
        }}
      />
    </header>
  );
}
