import { Card, CardContent } from "@/components/ui/card";
import { Database, Code, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TechnologySection = () => {
  const navigate = useNavigate();
  
  const technologies = [
    {
      icon: Database,
      title: "SQL",
      description: "Requirements",
      details: [
        "PostgreSQL server and PG Admin Installed",
        "Ability to restore DB provided by SQL",
        "10 minutes a day"
      ],
      iconColor: "text-healthcare-primary"
    },
    {
      icon: Code,
      title: "PYTHON",
      description: "Requirements", 
      details: [
        "Anaconda or Jupyter Notebook Installed",
        "10 minutes a day"
      ],
      iconColor: "text-healthcare-primary"
    }
  ];

  return (
    <section id="technology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What would you like to learn today?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => tech.title === "SQL" && navigate("/sql")}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-healthcare-light rounded-2xl mb-4">
                      <IconComponent className={`h-10 w-10 ${tech.iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {tech.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3 text-left">
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {tech.description}
                    </h4>
                    <ul className="space-y-2">
                      {tech.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="w-1 h-1 bg-healthcare-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;