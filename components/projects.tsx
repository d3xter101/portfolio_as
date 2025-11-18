'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronLeft, ChevronRight, Github } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const projects = [
  {
    title: 'Uber Data Analytics Pipeline',
    year: '2025',
    description: 'Built an end-to-end GCP pipeline with Mage, BigQuery, and Looker Studio for automated data ingestion and real-time analytics.',
    highlights: [
      'Engineered scalable star-schema data models (fact & dimension tables)',
      'Developed interactive Looker Studio dashboard featuring KPIs and temporal insights',
      'Automated data ingestion and transformation workflows',
    ],
    technologies: ['GCP', 'Mage.ai', 'BigQuery', 'Looker Studio', 'Data Modeling'],
    image: '/data-pipeline-visualization-uber-analytics.jpg',
    github: 'https://github.com/abdelhamidsaidi',
    link: '#',
  },
  {
    title: 'ERP & CRM Data Warehouse',
    year: '2025',
    description: 'Built an end-to-end data warehousing solution in SQL Server using the Medallion architecture for integrated business analytics.',
    highlights: [
      'Integrated ERP and CRM data with T-SQL transformations',
      'Implemented star schema for analytics-ready datasets',
      'Created Power BI dashboards delivering key business insights and KPIs',
    ],
    technologies: ['SQL Server', 'T-SQL', 'Power BI', 'Medallion Architecture', 'Data Modeling'],
    image: '/data-warehouse-dashboard-power-bi.jpg',
    github: 'https://github.com/abdelhamidsaidi',
    link: '#',
  },
  {
    title: 'Project Coming Soon',
    year: '2025',
    description: 'More exciting projects coming soon. Stay tuned for upcoming data engineering solutions.',
    highlights: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
    ],
    technologies: ['Technology 1', 'Technology 2', 'Technology 3'],
    image: '/blank-project.jpg',
    github: 'https://github.com/abdelhamidsaidi',
    link: '#',
  },
  {
    title: 'Project Coming Soon',
    year: '2025',
    description: 'More exciting projects coming soon. Stay tuned for upcoming data engineering solutions.',
    highlights: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
    ],
    technologies: ['Technology 1', 'Technology 2', 'Technology 3'],
    image: '/blank-project.jpg',
    github: 'https://github.com/abdelhamidsaidi',
    link: '#',
  },
  {
    title: 'Project Coming Soon',
    year: '2025',
    description: 'More exciting projects coming soon. Stay tuned for upcoming data engineering solutions.',
    highlights: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
    ],
    technologies: ['Technology 1', 'Technology 2', 'Technology 3'],
    image: '/blank-project.jpg',
    github: 'https://github.com/abdelhamidsaidi',
    link: '#',
  },
  {
    title: 'Project Coming Soon',
    year: '2025',
    description: 'More exciting projects coming soon. Stay tuned for upcoming data engineering solutions.',
    highlights: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
    ],
    technologies: ['Technology 1', 'Technology 2', 'Technology 3'],
    image: '/blank-project.jpg',
    github: 'https://github.com/abdelhamidsaidi',
    link: '#',
  },
]

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    if (!autoPlay) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [autoPlay])

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
    setAutoPlay(false)
  }

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setAutoPlay(false)
  }

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % projects.length)
    setAutoPlay(false)
  }

  const project = projects[currentIndex]

  return (
    <section id="projects" className="border-b border-border relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:px-6 md:py-32">
        <h2 className="mb-4 text-4xl font-bold text-primary animate-fade-in">Featured Projects</h2>
        <p className="mb-12 max-w-2xl text-lg text-muted-foreground animate-slide-up" style={{ animationDelay: '0.1s' }}>
          End-to-end data engineering solutions showcasing cloud platforms, ETL/ELT orchestration, and analytics implementations.
        </p>

        <div className="relative flex justify-center">
          <div className="w-full max-w-4xl mx-auto px-8">
            {/* Carousel Slides */}
            <div className="overflow-hidden rounded-lg">
              <div className="relative h-full transition-all duration-500 ease-in-out">
                <Card 
                  key={project.title}
                  className="border border-border/50 bg-card transition-all duration-1000 ease-in-out animate-fade-in overflow-hidden"
                  style={{
                    opacity: 1,
                    transform: `translateX(${direction * 20}px)`,
                    animation: 'slideIn 0.8s ease-in-out'
                  }}
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  <CardHeader>
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-2xl text-foreground">{project.title}</CardTitle>
                        <CardDescription className="text-base text-muted-foreground">
                          {project.year}
                        </CardDescription>
                      </div>
                      <ArrowRight className="size-6 text-primary flex-shrink-0 transition-all duration-300 hover:translate-x-1" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6 leading-relaxed text-foreground/80">{project.description}</p>

                    <div className="mb-6">
                      <p className="mb-3 text-sm font-semibold text-foreground">Key Accomplishments:</p>
                      <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                        {project.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-105 cursor-pointer"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      asChild
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        View on GitHub
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-primary/80 text-primary-foreground hover:bg-primary transition-all duration-300 hover:scale-110 hover:-translate-x-1"
              aria-label="Previous project"
            >
              <ChevronLeft className="size-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-primary/80 text-primary-foreground hover:bg-primary transition-all duration-300 hover:scale-110 hover:translate-x-1"
              aria-label="Next project"
            >
              <ChevronRight className="size-6" />
            </button>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-primary'
                      : 'w-2 bg-primary/30 hover:bg-primary/50'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          {currentIndex + 1} / {projects.length}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(${direction * 20}px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}
