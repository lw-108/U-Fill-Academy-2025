import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import ThemeToggle from "../theme-toggle";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Academy",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Mission", href: "/mission" },
      { name: "Programs", href: "/programs" },
      { name: "Admissions", href: "/admissions" },
    ],
  },
  {
    title: "Departments",
    links: [
      { name: "Engineering", href: "/departments/engineering" },
      { name: "Science", href: "/departments/science" },
      { name: "Arts & Humanities", href: "/departments/arts" },
      { name: "Business Studies", href: "/departments/business" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Library", href: "/library" },
      { name: "Research", href: "/research" },
      { name: "Student Projects", href: "/projects" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
  { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
  { icon: <FaYoutube className="size-5" />, href: "#", label: "YouTube" },
];

const defaultLegalLinks = [
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
];

const Footer7 = ({
  logo = {
    url: "/",
    src: "/images/u-fill-logo.png",
    alt: "U Fill Academy Logo",
    title: "U Fill Academy",
  },
  sections = defaultSections,
  description = "U Fill Academy is committed to nurturing creativity, innovation, and academic excellence — empowering students to become future leaders.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 U Fill Academy. All Rights Reserved.",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <footer className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Left Side - Logo & Info */}
          <div className="flex flex-col gap-6 max-w-sm">
            <div className="flex items-center gap-3">
              <a href={logo.url} className="flex items-center gap-2">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-10 w-10 object-contain"
                />
                <h2 className="text-2xl font-extrabold tracking-tight">
                  {logo.title}
                </h2>
              </a>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
            <ul className="flex items-center gap-5">
              {socialLinks.map((social, idx) => (
                <li key={idx}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Right Side - Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 text-lg font-semibold">{section.title}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        className="hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>{copyright}</p>
          <ul className="flex flex-wrap items-center gap-4 mt-3 md:mt-0">
            {legalLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export { Footer7 };
