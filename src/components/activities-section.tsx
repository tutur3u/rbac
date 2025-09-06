export function ActivitiesSection() {
  const activities = [
    {
      image: "/tech-hackathon-participants-coding.jpg",
      caption: "Global Hackathon 2024 - Over 5,000 participants from 40 countries collaborated on innovative solutions",
    },
    {
      image: "/ai-workshop-mentorship-session.jpg",
      caption: "AI Workshop Series - Industry experts mentoring next-generation developers in machine learning",
    },
    {
      image: "/startup-pitch-competition-stage.jpg",
      caption: "Startup Pitch Competition - Emerging companies presenting breakthrough technologies to investors",
    },
    {
      image: "/tech-conference-networking-event.jpg",
      caption: "Annual Tech Summit - Bringing together thought leaders and innovators for knowledge sharing",
    },
    {
      image: "/robotics-competition-arena.jpg",
      caption: "Robotics Challenge 2024 - Students showcasing autonomous systems and robotic innovations",
    },
    {
      image: "/virtual-reality-demo-booth.jpg",
      caption: "VR/AR Showcase - Demonstrating immersive technologies and their real-world applications",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Previous Activities</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Explore our track record of successful events and competitions that have shaped the tech landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="group">
              <div className="bg-card rounded-xl overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={activity.image || "/placeholder.svg"}
                    alt={`Activity ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed text-sm">{activity.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
