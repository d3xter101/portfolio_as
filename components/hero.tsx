'use client'

import { Mail, Linkedin, Github, Download, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { AnimatedText } from './animated-text'

export function Hero() {
  return (
    <section className="relative border-b border-border overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:px-6 md:py-32 animate-stagger">
        <div className="grid gap-12 md:grid-cols-2 md:items-center max-w-5xl">
          {/* Text Content */}
          <div>
            <h1 className="mb-4 text-5xl font-bold leading-tight text-primary md:text-6xl animate-fade-in">
              SAIDI Abdelhamid
            </h1>
            <p className="mb-8 text-xl text-muted-foreground animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <AnimatedText />
            </p>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-foreground/80 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Specialized in building end-to-end data pipelines, ETL/ELT orchestration, and analytics solutions on cloud platforms. 
              Passionate about transforming raw data into actionable business insights using modern data engineering practices.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-border text-foreground hover:bg-secondary transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <a href="#projects">View Work</a>
              </Button>
            </div>

            <div className="mt-12 space-y-4 text-sm text-muted-foreground animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2 transition-all duration-300 hover:text-primary">
                <Mail size={16} />
                <a href="mailto:abdelhamidsaidiofficial@gmail.com" className="hover:text-primary">
                  abdelhamidsaidiofficial@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 transition-all duration-300 hover:text-primary">
                <MapPin size={16} />
                <span>Casablanca, Morocco</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <Button 
                asChild
                size="sm"
                className="bg-primary/20 text-primary hover:bg-primary/30 border border-primary/40"
              >
                <a href="mailto:abdelhamidsaidiofficial@gmail.com">
                  <Mail size={16} className="mr-2" />
                  Email
                </a>
              </Button>
              <Button 
                asChild
                size="sm"
                className="bg-primary/20 text-primary hover:bg-primary/30 border border-primary/40"
              >
                <a href="https://github.com/abdelhamidsaidi" target="_blank" rel="noopener noreferrer">
                  <Github size={16} className="mr-2" />
                  GitHub
                </a>
              </Button>
              <Button 
                asChild
                size="sm"
                className="bg-primary/20 text-primary hover:bg-primary/30 border border-primary/40"
              >
                <a href="https://linkedin.com/in/abdelhamid-saidi" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={16} className="mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button 
                asChild
                size="sm"
                className="bg-primary/20 text-primary hover:bg-primary/30 border border-primary/40"
              >
                <a href="/cv.pdf" download>
                  <Download size={16} className="mr-2" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl animate-float"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/30 bg-card shadow-2xl">
                <Image
                  src="/professional-data-engineer-portrait.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
