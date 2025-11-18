import { Badge } from '@/components/ui/badge'
import { Code2, Database, BarChart3, Cloud, Wrench, Braces } from 'lucide-react'

const skillCategories = [
  {
    category: 'Programming Languages',
    icon: Code2,
    skills: ['Python', 'SQL', 'Java', 'Shell', 'C'],
  },
  {
    category: 'Data Analysis & Python',
    icon: BarChart3,
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
  },
  {
    category: 'Databases & Data Engineering',
    icon: Database,
    skills: ['SQL Server', 'MySQL', 'T-SQL', 'Database Design', 'ETL/ELT Pipelines', 'Data Warehousing', 'Data Modeling'],
  },
  {
    category: 'Visualization & BI',
    icon: BarChart3,
    skills: ['Power BI', 'Tableau', 'Looker Studio', 'Microsoft Excel'],
  },
  {
    category: 'Cloud Platforms',
    icon: Cloud,
    skills: ['Google Cloud Platform', 'Amazon Web Services', 'Azure', 'Oracle Cloud Infrastructure'],
  },
  {
    category: 'Tools & Technologies',
    icon: Wrench,
    skills: ['Linux', 'Version Control', 'Web Scraping', 'Agile', 'Operating Systems', 'DevOps'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="border-b border-border relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:px-6 md:py-32">
        <h2 className="mb-12 text-4xl font-bold text-primary animate-fade-in">Technical Skills</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-stagger">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div 
                key={category.category}
                className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 p-4 rounded-lg border border-border/50 bg-card/50"
                style={{ animationDelay: `${0.1 + index * 0.08}s` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <IconComponent size={20} className="text-primary" />
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110 cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
