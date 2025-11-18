import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const education = [
  {
    institution: 'FST Settat',
    degree: 'Computer Science Engineering Degree',
    period: '2024 – Present',
  },
  {
    institution: 'CPGE',
    degree: 'Physique et Sciences de l\'Ingénieur',
    period: '2022 – 2024',
  },
]

export function Education() {
  return (
    <section id="education" className="border-b border-border">
      <div className="container mx-auto px-4 py-20 md:px-6 md:py-32">
        <h2 className="mb-12 text-4xl font-bold text-primary">Education</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu) => (
            <Card key={edu.degree} className="border-border bg-card transition-colors hover:bg-secondary/50">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">{edu.institution}</CardTitle>
                <CardDescription>{edu.degree}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
