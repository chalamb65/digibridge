import { GraduationCap, Code2, FileText, Bot } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: GraduationCap,
    title: "Freshman Guide",
    description: "Navigate campus life",
    iconBg: "bg-sky-500/20",
    iconColor: "text-sky-400",
  },
  {
    icon: Code2,
    title: "Tutorials",
    description: "Learn coding skills",
    iconBg: "bg-sky-500/20",
    iconColor: "text-sky-400",
  },
  {
    icon: FileText,
    title: "Resources",
    description: "Past exams & notes",
    iconBg: "bg-sky-500/20",
    iconColor: "text-sky-400",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    description: "Ask study questions",
    iconBg: "bg-sky-500/20",
    iconColor: "text-sky-400",
  },
]

export function FeatureCards() {
  return (
    <section id="freshman-guide" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="bg-card backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 cursor-pointer group"
            >
              <CardContent className="p-6 flex flex-col items-start gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-3 rounded-lg ${feature.iconBg} group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
