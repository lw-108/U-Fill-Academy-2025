"use client";

import { Component } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Courses", href: "#courses" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

interface NavigationSheetProps {
  onClose?: () => void;
}

interface NavigationSheetState {
  isOpen: boolean;
}

export class NavigationSheet extends Component<
  NavigationSheetProps,
  NavigationSheetState
> {
  constructor(props: NavigationSheetProps) {
    super(props);
    this.state = { isOpen: false };
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
    document.body.style.overflow = "hidden";
  };

  handleClose = () => {
    this.setState({ isOpen: false });
    document.body.style.overflow = "unset";
    this.props.onClose?.();
  };

  handleLinkClick = () => {
    this.handleClose();
  };

  render() {
    const { isOpen } = this.state;

    return (
      <>
        {/* Hamburger Button */}
        <button
          onClick={this.handleOpen}
          aria-label="Open menu"
          className="p-3 rounded-full border border-foreground/20 hover:bg-foreground/5 transition-all duration-300"
        >
          <div className="w-5 h-5 flex flex-col justify-between">
            <span className="block h-0.5 bg-foreground rounded" />
            <span className="block h-0.5 bg-foreground rounded" />
            <span className="block h-0.5 bg-foreground rounded" />
          </div>
        </button>

        {/* Fullscreen Menu */}
        {isOpen && (
          <div
            className={cn(
              "fixed inset-0 z-50 flex flex-col justify-between items-center transition-all duration-500 ease-in-out",
              "bg-background text-foreground"
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between w-full px-6 pt-6">
              <Logo />
              <button
                onClick={this.handleClose}
                aria-label="Close menu"
                className="p-3 rounded-xl border border-foreground/20 hover:bg-foreground/5 transition-all duration-300"
              >
                <div className="w-5 h-5 relative">
                  <div className="absolute inset-0 w-full h-0.5 bg-foreground rotate-45" />
                  <div className="absolute inset-0 w-full h-0.5 bg-foreground -rotate-45" />
                </div>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 flex flex-col items-center justify-center w-full space-y-6 px-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={this.handleLinkClick}
                  className={cn(
                    "w-full max-w-xs py-4 text-center text-2xl font-climate-crisis uppercase tracking-wide rounded-2xl border border-foreground/20",
                    "hover:scale-105 hover:shadow-lg hover:border-foreground/40 transition-all duration-300"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Footer Buttons (Fixed Bottom) */}
            <div className="w-full px-8 pb-10 space-y-4">
              <button className="w-full py-4 rounded-2xl border border-foreground/20 text-foreground/70 text-lg font-semibold hover:bg-foreground/5 hover:text-foreground transition-all duration-300">
                Sign In
              </button>
              <button className="w-full py-4 rounded-2xl bg-foreground text-background text-lg font-semibold hover:bg-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}

/* Logo */
const Logo = () => (
  <div className="flex items-center space-x-3">
    <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center shadow-md">
      <span className="text-background font-bold text-sm">U</span>
    </div>
    <span className="font-climate-crisis text-xl text-foreground tracking-wide">
      U-Fill
    </span>
  </div>
);
