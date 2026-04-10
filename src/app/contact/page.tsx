import ContactClient from "@/components/contact-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Clearly Secure | Specialist Window & Door Replacement",
  description: "Contact Clearly Secure Glazing and Locks for fast, reliable door, window and locksmith repairs in Portsmouth, Southampton, Havant and beyond. Free quotes.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
