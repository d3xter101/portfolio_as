import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const experiences = [
  {
    title: 'Data Engineering Intern',
    company: 'Ministry of Digital Transition and Administration Reform',
    location: 'Casablanca, Morocco',
    period: 'Jul – Sep 2025',
    responsibilities: [
      'Developed a unified administrative database by cleaning, integrating, and harmonizing data from two government databases, improving data consistency and interoperability',
      'Implemented data deduplication and normalization processes for administrative documents using SQL and Python, ensuring a single unique identifier per record and enhancing search efficiency',
      'Optimized indexing and data management in relational and NoSQL databases, enabling faster query performance and streamlined access to public service information',
    ],
    technologies: ['SQL', 'Python', 'NoSQL', 'ETL', 'Database Design'],
    image: '/data-warehouse-dashboard-power-bi.jpg',
  },
]

export function Experience() {
  return (
    <section id="experience" className="border-b border-border relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:px-6 md:py-32">
        <h2 className="mb-12 text-4xl font-bold text-primary animate-fade-in">Experience</h2>

        <div className="max-w-4xl mx-auto space-y-6 animate-stagger">
          {experiences.map((exp, index) => (
            <Card
              key={exp.title}
              className="border border-border/50 bg-card transition-all duration-300 hover:bg-secondary/50 hover:shadow-lg hover:-translate-y-1 group"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="hidden md:flex items-center justify-center overflow-hidden rounded-lg order-first md:order-first">
                  <img
                    src={exp.image || "/placeholder.svg"}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div>
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">{exp.title}</CardTitle>
                    <CardDescription className="text-base">
                      {exp.company} • {exp.location}
                    </CardDescription>
                    <CardDescription className="text-sm">{exp.period}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp) => (
                          <li key={resp} className="flex items-start gap-3 text-foreground/80 transition-all duration-300 hover:text-foreground">
                            <span className="mt-2 size-2 rounded-full bg-primary flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                            <span className="text-sm leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 pt-4">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary text-xs hover:bg-primary/20 transition-all duration-300 hover:scale-105 cursor-pointer">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
