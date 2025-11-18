'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Award, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const certifications = [
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified Data Science Professional',
    provider: 'Oracle',
    logo: 'https://miro.medium.com/v2/resize:fit:1204/0*gBuyyb7q0Coqpm6A',
    skills: ['Data Science', 'Cloud Computing', 'Oracle Cloud'],
    url: 'https://www.credly.com',
  },
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    provider: 'Oracle',
    logo: 'https://miro.medium.com/v2/resize:fit:1204/0*gBuyyb7q0Coqpm6A',
    skills: ['Machine Learning', 'Generative AI', 'Artificial Intelligence', 'Oracle Cloud'],
    url: 'https://www.credly.com',
  },
  {
    title: 'IBM Data Science Foundations - Level 2 (V2)',
    provider: 'IBM',
    logo: 'https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_1080,h_675/https://graphicdesignergeeks.com/wp-content/uploads/2024/03/IBM-1-1080x628.jpg',
    skills: ['Data Science', 'Python', 'Data Analysis'],
    url: 'https://www.credly.com',
  },
  {
    title: 'Build a Data Warehouse with BigQuery',
    provider: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png',
    skills: ['Data Modeling', 'Cloud Computing', 'GCP', 'BigQuery', 'Data Warehousing'],
    url: 'https://www.credly.com',
  },
  {
    title: 'Databricks Fundamentals',
    provider: 'Databricks',
    logo: 'https://montecarlodata.com/wp-content/uploads/2023/02/Databricks-Logomark-2.png',
    skills: ['Azure Databricks', 'Data Engineering', 'Cloud Platforms'],
    url: 'https://www.credly.com',
  },
  {
    title: 'Data Analysis and Visualization with Power BI',
    provider: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png',
    skills: ['Power BI', 'Data Visualization', 'Data Cleaning'],
    url: 'https://www.credly.com',
  },
]

export function Certifications() {
  const [hoveredCert, setHoveredCert] = useState<string | null>(null)

  const handleViewCertification = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <section id="certifications" className="border-b border-border">
      <div className="container mx-auto px-4 py-20 md:px-6 md:py-32 max-w-7xl">
        <h2 className="mb-12 text-4xl font-bold text-primary animate-fade-in">Certifications & Credentials</h2>

        <div className="grid gap-4 md:grid-cols-3 animate-stagger">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              onMouseEnter={() => setHoveredCert(cert.title)}
              onMouseLeave={() => setHoveredCert(null)}
              className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:bg-secondary/50 hover:shadow-lg hover:-translate-y-1 cursor-pointer group"
              style={{ animationDelay: `${0.1 + index * 0.08}s` }}
            >
              <div className="flex items-start gap-3">
                <Award className="mt-1 size-6 flex-shrink-0 text-primary transition-transform duration-300 group-hover:scale-110" />
                <div className="flex-1">
                  <p className="font-semibold text-foreground text-lg text-base leading-tight">{cert.title}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <Image 
                  src={cert.logo || "/placeholder.svg"} 
                  alt={cert.provider} 
                  width={40} 
                  height={40}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-base font-medium text-muted-foreground">{cert.provider}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {cert.skills.slice(0, 3).map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-base px-3 py-1.5">
                    {skill}
                  </Badge>
                ))}
              </div>

              <button
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-xs font-medium text-white bg-primary hover:bg-primary/90 transition-all duration-300 w-full"
                onClick={() => handleViewCertification(cert.url)}
              >
                Show Credential
                <ExternalLink className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
