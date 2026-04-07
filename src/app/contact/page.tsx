import ContactClient from "@/components/contact-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Lee & Claire | Hampshire Glazing & Locksmith Experts",
  description: "Contact Clearly Secure Locks & Glazing for fast, reliable door, window and locksmith repairs in Portsmouth, Southampton, Havant and beyond. Free quotes.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
