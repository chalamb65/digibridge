const resources = [
  "Programming Basics for Beginners",
  "Freshman Survival Guide",
  "Study Tips for University",
  "Intro to AI Tools",
]

export function PopularResources() {
  return (
    <section id="resources" className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Popular Resources
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        <ul className="space-y-4">
          {resources.map((resource) => (
            <li key={resource} className="flex items-center gap-3 group cursor-pointer">
              <span className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform" />
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                {resource}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
