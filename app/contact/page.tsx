"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Globe, Instagram, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
// import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import MegaNavbar from "@/components/sections/MegaNavbar";
import BlendCursor from "@/components/BlendCursor";

// ✅ Firebase imports
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const CONTACT_DETAILS = [
  { icon: Phone, title: "Contact Number", options: ["+91 89399 76607"] },
  { icon: Mail, title: "Email Address", options: ["ufillacademy@gmail.com"] },
  { icon: Globe, title: "Search on Google", options: ["U Fill Academy"] },
  { icon: MapPin, title: "Our Location", options: ["Salem", "Tamil Nadu", "India"] },
];

const SOCIAL_LINKS = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/u_fill_academy/" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/p/%F0%9D%97%A8-%F0%9D%97%99%F0%9D%97%9C%F0%9D%97%9F%F0%9D%97%9F-%F0%9D%97%94%F0%9D%97%96%F0%9D%97%94%F0%9D%97%97%F0%9D%97%98%F0%9D%97%A0%F0%9D%97%AC-61575802616072/" },
  { icon: Linkedin, label: "LinkedIn", href: "https://in.linkedin.com/in/ufillacademy" },
];

function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    const { id, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.message) {
      setStatus("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      await addDoc(collection(db, "contact_messages"), {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        message: form.message,
        consent: form.consent,
        createdAt: Timestamp.now(),
      });

      setForm({ firstName: "", lastName: "", email: "", message: "", consent: false });
      setStatus("✅ Message sent successfully!");
    } catch (error) {
      console.error("Error sending message: ", error);
      setStatus("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="grid min-h-screen place-items-center py-16 bg-background mt-22">
      <MegaNavbar />
      <BlendCursor />
      <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-bowlby text-3xl md:text-4xl lg:text-6xl font-normal text-foreground mb-6"
          >
           Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto"
          >
            Let's Break the Barriers to Education Together! Reach Out to U-Fill Academy Today.
          </motion.p>
        </div>
      <div className="container mx-auto grid grid-cols-1 items-center gap-10 lg:grid-cols-2 px-6">
        {/* Contact Form */}
        <Card className="mx-auto p-6 lg:max-w-lg lg:p-12 shadow-lg border border-gray-800/20">
          <p className="text-muted-foreground mb-6">
            We'd love to hear from you — reach out for collaborations or general queries.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Durairaj"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="JD@sober.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                required
              />
            </div>

            {/* <div className="flex items-center gap-2">
              <Checkbox
                id="consent"
                checked={form.consent}
                onCheckedChange={(checked: boolean) =>
                  setForm((prev) => ({ ...prev, consent: checked }))
                }
              />
              <Label htmlFor="consent" className="cursor-pointer text-sm font-normal">
                You agree to our{" "}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </Label>
            </div> */}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#8b5cf6] to-[#4c1d95] hover:opacity-90 transition-all text-white font-medium"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>

            {status && <p className="text-center text-sm mt-3">{status}</p>}
          </form>
        </Card>

        {/* Info & Socials */}
        <div className="mx-auto space-y-10 lg:max-w-lg text-white">
          {CONTACT_DETAILS.map(({ icon: Icon, title, options }, key) => (
            <div key={key} className="flex gap-4 items-start">
              <div className="shrink-0 p-2 bg-[#4c1d95]/40 rounded-full">
                <Icon className="h-6 w-6 text-[#8b5cf6]" />
              </div>
              <div>
                <h4 className="mb-2 font-semibold">{title}</h4>
                {options.map((option, idx) => (
                  <p key={idx} className="text-muted-foreground">
                    {option}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-8">
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-6">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-white transition"
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} U Fill Academy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
