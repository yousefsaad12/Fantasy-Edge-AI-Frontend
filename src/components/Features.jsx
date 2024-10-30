import React from "react";

export default function Features() {
  const featuresData = [
    {
      title: "Predictive Analytics",
      date: "2024",
      location: "Fantasy Premier Edge",
      description:
        "Leverages AI algorithms to analyze player performance and predict outcomes.",
    },
    {
      title: "Advanced Visualization",
      date: "2024",
      location: "Fantasy Premier Edge",
      description:
        "Offers rich visualizations for better understanding of player stats and trends.",
    },
    {
      title: "Real-time Updates",
      date: "2024",
      location: "Fantasy Premier Edge",
      description:
        "Provides live updates on player performances and game events.",
    },
    {
      title: "Community Engagement",
      date: "2024",
      location: "Fantasy Premier Edge",
      description:
        "Engages users through community features, including forums and chat.",
    },
    {
      title: "Gamification",
      date: "2024",
      location: "Fantasy Premier Edge",
      description:
        "Incorporates gamified elements to enhance user experience and retention.",
    },
  ];

  return (
    <div className="mt-64 mb-64">
      <div className="py-8 md:py-16 w-11/12 lg:w-10/12 xl:w-1200 m-auto">
        <div className="space-y-16">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className={`flex items-center justify-center md:justify-start md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="w-full md:w-1/3 space-y-4 text-center md:text-left">
                <h3 className="font-medium text-2xl">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
              {index < featuresData.length - 1 && ( // Add vertical line except after the last feature
                <div className="hidden md:block w-px bg-gray-300 h-16 mx-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
