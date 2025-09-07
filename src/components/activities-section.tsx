export function ActivitiesSection() {
  const activities = [
    {
      caption:
        "Business Analytics Workshop: Data Visualization – Paint Dashboards 2022",
      isHighlighted: true,
    },
    {
      caption:
        "Panel Discussion: Layoff to Lift-off - Upskill to Survive the Crisis 2024",
      isHighlighted: true,
    },
    {
      caption:
        "[Panel Discussion] From Data to Decisions: Your Career Path in Analytics",
      isHighlighted: true,
    },
    {
      caption:
        "Together with RMIT Fintech Club, organize a seminar on Digital Payments and Data Analysis",
    },
    {
      caption:
        "With RMIT Careers, Alumni & Industry Relations, organize a series of Orientation and Development seminars",
    },
    {
      caption: "Explore the Work Culture at PwC, One of the Big4",
    },
    {
      image:
        "/activities/SHOPEE x ANALYTICS - FROM DATA TO DECISIONS - YOUR CAREER PATH IN ANALYTICS.jpg",
      caption: "Listening to insights shared by professionals from Shopee.",
    },
    {
      caption: "The atmosphere of the 'Layoff to Lift-off' sharing session",
    },
    {
      caption: "Listen - Experience - Be Inspired with Experts from",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(59,130,246,0.05)_49%,rgba(59,130,246,0.05)_51%,transparent_52%)] bg-[length:30px_30px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
            Our Previous Activities
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto text-pretty">
            Discover our legacy of cybersecurity excellence and RBAC innovation
            through cutting-edge competitions and workshops
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="group">
              <div className="relative bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={
                      activity.image ||
                      "/placeholder.svg?height=300&width=500&query=cybersecurity workshop"
                    }
                    alt={`RBAC Activity ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="relative p-6">
                  <p className="text-blue-200 leading-relaxed text-sm group-hover:text-white transition-colors duration-300">
                    {activity.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
