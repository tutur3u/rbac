import { Trophy } from "lucide-react";
import Image from "next/image";

export function ActivitiesSection() {
  const activities = [
    {
      image: "/activities/Company tour to PWC.png",
      caption: "Company Tour to PwC",
    },
    {
      caption: "2024 - A warm Tet. A joyful spring.",
      image: "/activities/2024-tet.png",
      // isHighlighted: true,
    },
    {
      caption:
        "2023 - Together with RMIT Fintech Club, organize a seminar on Digital Payments and Data Analysis",
      image: "/activities/data_analytics_in_online_payment_workshop.jpg",
    },
    {
      image: "/activities/2023 - Workshop Pathway to BIG4.png",
      caption: "2023 - Workshop Pathway to BIG4",
    },
    {
      image: "/activities/sql_training_workshop.jpg",
      caption: "2023 - SQL Training Workshop - Master the Language of Data",
    },
    {
      caption: "2024 - The Art of Negotiation Workshop",
      image: "/activities/the_art_of_negotiation_workshop.jpg",
    },
    {
      image: "/activities/2024_Company_Tour_Samsung_Electronics.png",
      caption: "2024 - Company Tour - Samsung Electronics",
    },
    {
      image:
        "/activities/job_shop_x_analytics_club_build_your_professional_cv_linkedin_profile_1.png",
      caption:
        "2025 - In collaboration with RMIT Job Shop, conduct a workshop on Building Your Professional CV & LinkedIn Profile",
    },
    {
      image: "/activities/nvivo_training.jpg",
      caption: "2025 - NVivo Training Workshop",
      // isHighlighted: true,
    },
    {
      image: "/activities/photography_workshop_1.jpg",
      caption: "2025 - Photography Workshop - Capture the Moment",
    },
    {
      image: "/activities/2025 - From data to decision.png",
      caption: "2025 - From Data to Decision - Your Career Path in Analytics",
    },
    {
      image: "/activities/RMIT Careers, Alumni & Industry Relations.png",
      caption:
        "With RMIT Careers, Alumni & Industry Relations, organize a series of Career Development seminars",
    },
  ];

  // Separate highlighted and regular activities
  // const highlightedActivities = activities.filter(
  //   (activity) => activity.isHighlighted
  // );
  const regularActivities = activities;

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

        <div className="mb-20 relative">
          <div
            className="absolute -top-12 md:-top-10 left-1/2 transform -translate-x-1/2 
          w-24 h-24 md:w-32 md:h-32 
          bg-gradient-to-tl from-yellow-400 via-amber-500  to-amber-700
          rounded-full 
          flex items-center justify-center shadow-lg shadow-yellow-500/30 z-20"
          >
            <svg
              className="w-16 h-16 text-primary-foreground"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="bg-gradient-to-br from-amber-900/30 via-amber-800/20 to-yellow-900/30 backdrop-blur-md rounded-2xl p-8 pt-16 border border-amber-500/30 shadow-lg shadow-amber-500/20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent">
                  RMIT Best Academic and Learning Skills Club
                </h3>
                <p className="text-amber-100 mb-6">
                  We are proud to have been recognized as the Best Club for 7
                  consecutive years, a testament to our commitment to excellence
                  and innovation in cybersecurity education.
                </p>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <span className="text-amber-200 text-sm font-semibold">
                    2018-2024
                  </span>
                  <span className="text-amber-200">•</span>
                  <span className="text-amber-200 text-sm font-semibold">
                    Excellence in Education
                  </span>
                  <span className="text-amber-200">•</span>
                  <span className="text-amber-200 text-sm font-semibold">
                    Community Impact
                  </span>
                </div>
              </div>

              <div className="flex-1 relative">
                <div className="aspect-video rounded-xl overflow-hidden border-2 border-amber-500/50 shadow-lg">
                  <Image
                    src="/activities/best-club.jpg"
                    alt="7 Years Best Club Award"
                    className="w-full h-full object-cover"
                    height={300}
                    width={500}
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-amber-500 text-slate-900 font-bold px-4 py-2 rounded-full shadow-md">
                  <Trophy color="yellow" className="inline" /> Award Winner
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 left-4 text-amber-400 opacity-50">
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="absolute bottom-4 right-4 text-amber-400 opacity-50">
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-yellow-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-amber-500 rounded-full blur-xl opacity-30 animate-pulse delay-1000"></div>
        </div>


        {/* Regular Activities Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-200 bg-clip-text text-transparent">
              Our Activities
            </h3>
            <p className="text-blue-300">
              Explore all our events and workshops
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularActivities.map((activity, index) => (
              <div key={`activity-${index + 1}`} className="group">
                <div className="relative bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={
                        activity.image ||
                        "/placeholder.svg?height=300&width=500&query=activity"
                      }
                      alt={`Activity: ${activity.caption}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      height={300}
                      width={500}
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
      </div>
    </section>
  );
}
