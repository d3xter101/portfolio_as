import { Badge } from '@/components/ui/badge'
import { Code2, Database, BarChart3, Cloud, Wrench, Braces } from 'lucide-react'
import Image from 'next/image'

const skillCategories = [
  {
    category: 'Programming Languages',
    icon: Code2,
    skills: [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg' },
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Shell', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
      { name: 'C', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png' },
    ],
  },
  {
    category: 'Data Analysis & Python',
    icon: BarChart3,
    skills: [
      { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
      { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
      { name: 'Matplotlib', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
      { name: 'Seaborn', logo: 'https://seaborn.pydata.org/_images/logo-mark-lightbg.svg' },
      {name: 'Databricks', logo: 'https://montecarlodata.com/wp-content/uploads/2023/02/Databricks-Logomark-2.png' },
      { name: 'Jupyter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
    ],
  },
  {
    category: 'Databases & Data Engineering',
    icon: Database,
    skills: [
      { name: 'SQL Server', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Database Design', logo: 'https://cdn-icons-png.flaticon.com/512/9850/9850812.png' },
      { name: 'ETL/ELT Pipelines', logo:  'http://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg' },
      { name: 'Data Warehousing', logo: 'https://cdn-icons-png.flaticon.com/512/6122/6122905.png' },
      { name: 'Data Modeling', logo: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/snowflake-color.png' },
    ],
  },
  {
    category: 'Visualization & BI',
    icon: BarChart3,
    skills: [
      { name: 'Power BI', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
      { name: 'Tableau', logo: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg' },
      { name: 'Looker Studio', logo: 'https://www.gstatic.com/analytics-suite/header/suite/v2/ic_data_studio.svg' },
      { name: 'Microsoft Excel', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Microsoft_Excel_2013-2019_logo.svg/1200px-Microsoft_Excel_2013-2019_logo.svg.png' },
    ],
  },
  {
    category: 'Cloud Platforms',
    icon: Cloud,
    skills: [
      { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
      { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
      { name: 'Oracle Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
    ],
  },
  {
    category: 'Tools & Technologies',
    icon: Wrench,
    skills: [
      { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Agile', logo: 'https://images.seeklogo.com/logo-png/42/2/scrum-logo-png_seeklogo-428358.png' },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="border-b border-border relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:px-6 md:py-32 max-w-7xl">
        <h2 className="mb-12 text-4xl font-bold text-primary animate-fade-in">Technical Skills</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-stagger">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div 
                key={category.category}
                className="group relative transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 p-6 rounded-xl border border-border/50 bg-linear-to-br from-card to-card/50 backdrop-blur-sm overflow-hidden"
                style={{ animationDelay: `${0.1 + index * 0.08}s` }}
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon background glow */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                      <IconComponent size={22} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-wider text-foreground/90 group-hover:text-primary transition-colors duration-300">
                      {category.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className="bg-secondary/80 text-foreground border border-border/30 hover:bg-primary hover:text-primary-foreground hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-md cursor-pointer font-medium text-base px-5 py-2.5 flex items-center gap-2.5"
                      >
                        {skill.logo && (
                          <Image 
                            src={skill.logo} 
                            alt={skill.name} 
                            width={34} 
                            height={34} 
                            className="object-contain"
                          />
                        )}
                        <span className='text-md'>{skill.name}</span>
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
