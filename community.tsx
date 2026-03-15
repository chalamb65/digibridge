import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

export function Community() {
  return (
    <section
      id="community"
      className="py-16 bg-gradient-to-b from-background to-muted/20 border-t border-border"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="flex-1 max-w-24 h-px bg-border" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Join Our Community
          </h2>
          <div className="flex-1 max-w-24 h-px bg-border" />
        </div>
        <p className="text-muted-foreground mb-8">
          Connect with fellow students!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-[#0088cc] hover:bg-[#0088cc]/90 text-white px-8 gap-2"
          >
            <Send className="h-5 w-5" />
            Join on Telegram
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 gap-2"
          >
            <TikTokIcon className="h-5 w-5" />
            Follow on TikTok
          </Button>
        </div>
      </div>
    </section>
  )
}
