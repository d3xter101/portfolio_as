import { Mail, Linkedin, Github, ExternalLink, MapPin, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-secondary/50">
      <div className="container mx-auto px-4 py-20 md:px-6">
        <div className="max-w-2xl">
          <h2 className="mb-4 text-4xl font-bold text-primary">Let's Collaborate</h2>
          <p className="mb-12 text-lg text-muted-foreground">
            Open to data engineering opportunities, collaborative projects, and exploring innovative data solutions. Let's build something impactful together.
          </p>

          <div className="mb-12 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="mailto:abdelhamidsaidiofficial@gmail.com">
                <Mail className="mr-2 size-4" />
                Send an Email
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-border text-foreground hover:bg-secondary"
            >
              <a href="https://github.com/abdelhamidsaidi" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 size-4" />
                GitHub
              </a>
            </Button>
          </div>

          {/* Social Links & Info */}
          <div className="grid gap-8 border-t border-border pt-8 md:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
                Connect
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://linkedin.com/in/abdelhamidsaidi"
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Linkedin size={18} />
                  LinkedIn
                  <ExternalLink size={14} />
                </a>
                <a
                  href="https://github.com/abdelhamidsaidi"
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Github size={18} />
                  GitHub
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
                Contact
              </p>
              <div className="flex flex-col gap-3 text-sm">
                <a
                  href="mailto:abdelhamidsaidiofficial@gmail.com"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  abdelhamidsaidiofficial@gmail.com
                </a>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={16} />
                  <span>Casablanca, Morocco</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 SAIDI Abdelhamid. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
