'use client'

import { Mail, Linkedin, Github, Download, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { AnimatedText } from './animated-text'

export function Hero() {
  return (
    <section className="relative border-b border-border overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 -z-10">
        {/* Primary floating orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-blob opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-blob opacity-40" style={{ animationDelay: '4s' }}></div>
        
        {/* Additional floating particles */}
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-float opacity-30" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-2xl animate-float opacity-30" style={{ animationDelay: '3s' }}></div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5 animate-pulse-slow opacity-50"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:px-6 md:py-32 animate-stagger">
        <div className="grid gap-12 md:grid-cols-2 md:items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div>
            <h1 className="mb-4 text-5xl font-bold leading-tight text-primary md:text-6xl animate-fade-in">
              SAIDI Abdelhamid
            </h1>
            <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <p className="text-3xl text-muted-foreground">
                <AnimatedText />
              </p>
            </div>
            
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-foreground/90 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              I design <span className="text-primary font-semibold">data systems that scale</span>. From architecting cloud-native pipelines to building analytics platforms that power business decisions, I focus on creating solutions that deliver real value. My goal is simple: <span className="text-primary font-semibold">make data work for you</span>, not the other way around.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:scale-105 group">
                <a href="#contact" className="flex items-center gap-2">
                  Download CV 
                  <Download size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                size="lg"
                className="border-border text-foreground hover:bg-secondary transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <a href="#projects">View My Work</a>
              </Button>
            </div>

            {/* Quick Info */}
      

            {/* Social Links */}
            <div className="mt-6 flex flex-wrap gap-3 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <Button 
                asChild
                variant="outline"
                size="sm"
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                <a href="mailto:abdelhamidsaidiofficial@gmail.com" className="flex items-center gap-2">
                  <Mail size={16} className="group-hover:scale-110 transition-transform" />
                  Email
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="sm"
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                <a href="https://github.com/abdelhamidsaidi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github size={16} className="group-hover:scale-110 transition-transform" />
                  GitHub
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="sm"
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                <a href="https://linkedin.com/in/abdelhamid-saidi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin size={16} className="group-hover:scale-110 transition-transform" />
                  LinkedIn
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="sm"
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                <a href="/cv.pdf" download className="flex items-center gap-2">
                  <Download size={16} className="group-hover:scale-110 transition-transform" />
                  Resume
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative w-72 h-72 md:w-96 md:h-96 group">
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl animate-float group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/30 bg-card shadow-2xl group-hover:shadow-primary/20 group-hover:border-primary/50 transition-all duration-500 group-hover:scale-105">
                <Image
                  src="./hero_image.png"
                  alt="Abdelhamid Saidi - Data Engineer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
