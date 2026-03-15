import Link from "next/link"

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
]

export function Footer() {
  return (
    <footer className="py-8 bg-muted/10 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <nav className="flex items-center gap-6">
            {footerLinks.map((link, index) => (
              <div key={link.href} className="flex items-center gap-6">
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
                {index < footerLinks.length - 1 && (
                  <span className="text-border">|</span>
                )}
              </div>
            ))}
          </nav>
          <p className="text-sm text-muted-foreground">
            &copy; 2024 Digi Bridge
          </p>
        </div>
      </div>
    </footer>
  )
}
