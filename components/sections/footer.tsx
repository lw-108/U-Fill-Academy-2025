"use client"

import ThemeToggle from "../theme-toggle"

export default function SiteFooter() {
  return (
    <footer id="contact" className="relative z-10 px-6 py-12 md:py-16 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
        <div>
          <h4 className="text-foreground font-medium mb-2">U-Fill Academy</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Modern, child-centered learning where curiosity meets excellence.
          </p>
        </div>
        <div>
          <h5 className="text-foreground font-medium mb-2">Contact</h5>
          <ul className="text-muted-foreground text-sm leading-relaxed">
            <li>Email: admissions@ufill.academy</li>
            <li>Phone: +1 (555) 012-3456</li>
            <li>Address: 123 Learning Way, Knowledge City</li>
          </ul>
        </div>
        <div>
          <h5 className="text-foreground font-medium mb-2">Connect</h5>
          <ul className="text-muted-foreground text-sm leading-relaxed">
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-6 flex items-center justify-between text-muted-foreground text-xs">
        <div>© {new Date().getFullYear()} U-Fill Academy. All rights reserved.</div>
        <ThemeToggle />
      </div>
    </footer>
  )
}
