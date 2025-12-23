"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Instagram, Mail, Phone, MapPin, Moon, Sun, ChevronDown, Download, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState<"es" | "en">("es")
  const [expandedEducation, setExpandedEducation] = useState<number | null>(null)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const translations = {
    es: {
      nav: {
        home: "Inicio",
        about: "Sobre mí",
        projects: "Proyectos",
        videos: "Videos",
        achievements: "Otros Logros",
        contact: "Contacto",
      },
      hero: {
        name: "Adrià Molina Hernandez",
        subtitle: "Especialista en Marketing Digital & Creador de Contenido",
        description: "Transformando ideas en estrategias digitales que conectan con audiencias globales",
        cta1: "Sobre mí",
        cta2: "Contacto",
      },
      about: {
        title: "Sobre mí",
        age: "21 años",
        downloadCV: "Descargar CV",
        intro:
          "Soy un profesional del marketing con formación en Marketing Internacional y una pasión genuina por la creación de contenido digital. Mi enfoque combina estrategia analítica con creatividad, buscando siempre generar conexiones auténticas con las audiencias.",
        intro2:
          "Con experiencia internacional y una mentalidad proactiva, me dedico a construir proyectos propios que reflejan mi visión del marketing moderno: cercano, auténtico y basado en datos.",
        educationTitle: "Formación Académica",
        education: [
          {
            title: "Ciclo Superior en Comercio Internacional",
            institution: "Centro de Formación Profesional",
            period: "2023 - 2025",
            skills: [
              "Gestión Logística Internacional",
              "Comercio Exterior",
              "Negociación Internacional",
              "Transporte y Aduanas",
              "Marketing Internacional",
              "Inglés Comercial",
              "Incoterms y Documentación",
              "Gestión de Operaciones",
            ],
          },
          {
            title: "Bachillerato Tecnológico",
            institution: "Instituto de Educación Secundaria",
            period: "2020 - 2022",
            skills: ["Tecnología Industrial", "Matemáticas", "Física y Química", "Dibujo Técnico", "Inglés"],
          },
        ],
        skillsLabel: "Competencias y habilidades",
        experienceTitle: "Experiencia Profesional",
        experiences: [
          {
            title: "Entorno corporativo internacional — Mainfreight",
            period: "Abril 2024 - Noviembre 2025",
            description:
              "Trabajo en equipo, seguimiento de clientes y trato profesional en empresa internacional.\nExperiencia clave para confirmar mi orientación profesional hacia el marketing digital y la creación de contenido.",
          },
          {
            title: "Au Pair — Los Ángeles (EE. UU)",
            period: "Enero 2023 - Agosto 2023",
            description:
              "Inmersión total en entorno extranjero a los 18 años.\nDesarrollo de comunicación, autonomía y adaptación cultural.\nExperiencia internacional que refuerza mentalidad global y seguridad profesional.",
          },
        ],
        personalProjectsTitle: "Proyectos Personales",
        instagramProject: {
          title: "Creador de Contenido en Instagram",
          handle: "@_adrimolinaa",
          followers: "5,000 seguidores",
          description:
            "Mi proyecto más personal: una cuenta de Instagram enfocada en reels que ha crecido orgánicamente hasta alcanzar 5,000 seguidores. Este proyecto me ha permitido experimentar con estrategias de contenido, entender algoritmos y crear una comunidad auténtica. Cada día aprendo algo nuevo sobre storytelling visual, engagement y construcción de marca personal.",
          cta: "Ver perfil de Instagram",
        },
      },
      education: {
        title: "Formación Académica",
        items: [
          {
            title: "Ciclo Superior en Comercio Internacional",
            institution: "Centro de Formación Profesional",
            period: "2023 - 2025",
            skills: [
              "Gestión Logística Internacional",
              "Comercio Exterior",
              "Negociación Internacional",
              "Transporte y Aduanas",
              "Marketing Internacional",
              "Inglés Comercial",
              "Incoterms y Documentación",
              "Gestión de Operaciones",
            ],
          },
          {
            title: "Bachillerato Tecnológico",
            institution: "Instituto de Educación Secundaria",
            period: "2020 - 2022",
            skills: ["Tecnología Industrial", "Matemáticas", "Física y Química", "Dibujo Técnico", "Inglés"],
          },
        ],
      },
      experience: {
        title: "Experiencia Profesional",
        items: [
          {
            title: "Entorno corporativo internacional — Mainfreight",
            period: "Abril 2024 - Noviembre 2025",
            description:
              "Trabajo en equipo, seguimiento de clientes y trato profesional en empresa internacional.\nExperiencia clave para confirmar mi orientación profesional hacia el marketing digital y la creación de contenido.",
          },
          {
            title: "Au Pair — Los Ángeles (EE. UU)",
            period: "Enero 2023 - Agosto 2023",
            description:
              "Inmersión total en entorno extranjero a los 18 años.\nDesarrollo de comunicación, autonomía y adaptación cultural.\nExperiencia internacional que refuerza mentalidad global y seguridad profesional.",
          },
        ],
      },
      personalProjects: {
        title: "Proyectos Personales",
        items: [
          {
            title: "Creador de Contenido en Instagram",
            handle: "@_adrimolinaa",
            followers: "5,000 seguidores",
            description:
              "Mi proyecto más personal: una cuenta de Instagram enfocada en reels que ha crecido orgánicamente hasta alcanzar 5,000 seguidores. Este proyecto me ha permitido experimentar con estrategias de contenido, entender algoritmos y crear una comunidad auténtica. Cada día aprendo algo nuevo sobre storytelling visual, engagement y construcción de marca personal.",
            cta: "Ver perfil de Instagram",
            image: "/images/profile-adria.png",
          },
        ],
      },
      achievements: {
        title: "Otros Logros",
        items: [
          {
            title: "Contenido Viral",
            role: "Creador de Contenido",
            description:
              "Varios vídeos con más de 2 millones de reproducciones cada uno, alcanzando audiencias masivas y generando alto engagement.",
            image: "/viral-video-content-success.jpg",
          },
          {
            title: "Certificado en Inteligencia Artificial",
            role: "Alumno Certificado",
            description:
              "Curso completo de Inteligencia Artificial impartido por Anas Andaloussi, aprendiendo las últimas técnicas y aplicaciones de IA.",
            image: "/images/ai-certification.jpg",
          },
          {
            title: "Formación en Creación de Contenido",
            role: "Alumno Certificado",
            description:
              "Formación especializada en creación de contenido para redes sociales impartida por Guille Collado, dominando estrategias de engagement.",
            image: "/images/content-creation-training.jpg",
          },
        ],
      },
      contact: {
        title: "Contacto",
        email: "Email",
        emailValue: "adria.molina@example.com",
        phone: "Teléfono",
        phoneValue: "+34 600 123 456",
        location: "Ubicación",
        locationValue: "Barcelona, España",
      },
      footer: {
        copyright: "© 2025 Adrià Molina Hernandez. Todos los derechos reservados.",
      },
    },
    en: {
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        videos: "Videos",
        achievements: "Other Achievements",
        contact: "Contact",
      },
      hero: {
        name: "Adrià Molina Hernandez",
        subtitle: "Digital Marketing Specialist & Content Creator",
        description: "Transforming ideas into digital strategies that connect with global audiences",
        cta1: "About me",
        cta2: "Contact",
      },
      about: {
        title: "About Me",
        age: "21 years old",
        downloadCV: "Download CV",
        intro:
          "I am a marketing professional with a background in International Marketing and a genuine passion for digital content creation. My approach combines analytical strategy with creativity, always seeking to generate authentic connections with audiences.",
        intro2:
          "With international experience and a proactive mindset, I dedicate myself to building my own projects that reflect my vision of modern marketing: close, authentic, and data-driven.",
        educationTitle: "Academic Background",
        education: [
          {
            title: "Higher Degree in International Trade",
            institution: "Vocational Training Center",
            period: "2023 - 2025",
            skills: [
              "International Logistics Management",
              "Foreign Trade",
              "International Negotiation",
              "Transport & Customs",
              "International Marketing",
              "Business English",
              "Incoterms & Documentation",
              "Operations Management",
            ],
          },
          {
            title: "Technological High School",
            institution: "Secondary Education Institute",
            period: "2020 - 2022",
            skills: ["Industrial Technology", "Mathematics", "Physics & Chemistry", "Technical Drawing", "English"],
          },
        ],
        skillsLabel: "Skills and competencies",
        experienceTitle: "Professional Experience",
        experiences: [
          {
            title: "International Corporate Environment — Mainfreight",
            period: "April 2024 - November 2025",
            description:
              "Teamwork, client follow-up, and professional treatment in an international company.\nKey experience to confirm my professional orientation towards digital marketing and content creation.",
          },
          {
            title: "Au Pair — Los Angeles (USA)",
            period: "January 2023 - August 2023",
            description:
              "Total immersion in a foreign environment at 18 years old.\nDevelopment of communication, autonomy, and cultural adaptation.\nInternational experience that reinforces global mindset and professional confidence.",
          },
        ],
      },
      education: {
        title: "Academic Background",
        items: [
          {
            title: "Higher Degree in International Trade",
            institution: "Vocational Training Center",
            period: "2023 - 2025",
            skills: [
              "International Logistics Management",
              "Foreign Trade",
              "International Negotiation",
              "Transport & Customs",
              "International Marketing",
              "Business English",
              "Incoterms & Documentation",
              "Operations Management",
            ],
          },
          {
            title: "Technological High School",
            institution: "Secondary Education Institute",
            period: "2020 - 2022",
            skills: ["Industrial Technology", "Mathematics", "Physics & Chemistry", "Technical Drawing", "English"],
          },
        ],
      },
      experience: {
        title: "Professional Experience",
        items: [
          {
            title: "International Corporate Environment — Mainfreight",
            period: "April 2024 - November 2025",
            description:
              "Teamwork, client follow-up, and professional treatment in an international company.\nKey experience to confirm my professional orientation towards digital marketing and content creation.",
          },
          {
            title: "Au Pair — Los Angeles (USA)",
            period: "January 2023 - August 2023",
            description:
              "Total immersion in a foreign environment at 18 years old.\nDevelopment of communication, autonomy, and cultural adaptation.\nInternational experience that reinforces global mindset and professional confidence.",
          },
        ],
      },
      personalProjects: {
        title: "Personal Projects",
        items: [
          {
            title: "Instagram Content Creator",
            handle: "@_adrimolinaa",
            followers: "5,000 followers",
            description:
              "My most personal project: an Instagram account focused on reels that has grown organically to reach 5,000 followers. This project has allowed me to experiment with content strategies, understand algorithms, and create an authentic community. Every day I learn something new about visual storytelling, engagement, and personal brand building.",
            cta: "View Instagram profile",
            image: "/images/profile-adria.png",
          },
        ],
      },
      achievements: {
        title: "Other Achievements",
        items: [
          {
            title: "Viral Content",
            role: "Content Creator",
            description:
              "Multiple videos with over 2 million views each, reaching massive audiences and generating high engagement.",
            image: "/viral-video-content-success.jpg",
          },
          {
            title: "AI Certification",
            role: "Certified Student",
            description:
              "Completed AI course by Anas Andaloussi, learning the latest techniques and applications of AI.",
            image: "/images/ai-certification.jpg",
          },
          {
            title: "Content Creation Training",
            role: "Certified Student",
            description:
              "Specialized training in social media content creation by Guille Collado, mastering engagement strategies.",
            image: "/images/content-creation-training.jpg",
          },
        ],
      },
      contact: {
        title: "Contact",
        email: "Email",
        emailValue: "adria.molina@example.com",
        phone: "Phone",
        phoneValue: "+34 600 123 456",
        location: "Location",
        locationValue: "Barcelona, Spain",
      },
      footer: {
        copyright: "© 2025 Adrià Molina Hernandez. All rights reserved.",
      },
    },
  }

  const t = translations[language]

  const contactInfo = {
    email: "6adriamolina@gmail.com",
    phone: "600 69 35 40",
    location: "Barcelona, España",
  }

  return (
    <div className="min-h-screen bg-mesh-gradient">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-primary/20 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold relative group">
              <span className="relative z-10 px-3 py-1 rounded-lg bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-md group-hover:shadow-lg transition-all">
                AM
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                {t.nav.home}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                {t.nav.about}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                {t.nav.projects}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </button>
              <button
                onClick={() => scrollToSection("videos")}
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                {t.nav.videos}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </button>
              <button
                onClick={() => scrollToSection("achievements")}
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                {t.nav.achievements}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                {t.nav.contact}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </button>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === "es" ? "en" : "es")}
                className="text-xs font-semibold hover:bg-primary/10"
              >
                {language.toUpperCase()}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="hover:bg-primary/10"
              >
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-mesh-gradient" />
        <div className="absolute top-20 left-10 w-96 h-96 gradient-blob animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 gradient-blob-secondary animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Marketing Digital & Contenido</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance bg-gradient-to-br from-foreground via-foreground to-primary bg-clip-text text-transparent">
              {t.hero.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">{t.hero.subtitle}</p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("about")}
                className="shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                {t.hero.cta1}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-primary/30 hover:bg-primary/5"
              >
                {t.hero.cta2}
              </Button>
            </div>
            <div className="mt-16 animate-bounce">
              <ChevronDown className="h-6 w-6 mx-auto text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative bg-mesh-gradient">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 title-accent inline-block">{t.about.title}</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto mt-4" />
          </div>

          {/* Profile Card */}
          <Card className="max-w-4xl mx-auto mb-16 card-premium shadow-xl border-primary/10">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex flex-col items-center md:items-start">
                  <div className="relative w-32 h-32 rounded-full mb-4 overflow-hidden ring-4 ring-primary/20 shadow-lg">
                    <Image src="/images/profile-adria.png" alt={t.hero.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{t.hero.name}</h3>
                  <p className="text-muted-foreground mb-4">{t.about.age}</p>
                  <div className="flex gap-3 mb-4">
                    <Link
                      href="https://www.instagram.com/_adrimolinaa?igsh=MWJnbTdrbXRpYmdtZA%3D%3D&utm_source=qr"
                      target="_blank"
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-primary/10 hover:text-primary transition-all"
                      >
                        <Instagram className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="https://www.tiktok.com/@_adrimolinaa?_r=1&_t=ZN-92QzpczuPjy" target="_blank">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-primary/10 hover:text-primary transition-all"
                      >
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                        </svg>
                      </Button>
                    </Link>
                  </div>
                  <Button className="w-full md:w-auto shadow-md hover:shadow-lg transition-all">
                    <Download className="mr-2 h-4 w-4" />
                    {t.about.downloadCV}
                  </Button>
                </div>

                <div className="flex-1">
                  <p className="text-muted-foreground leading-relaxed mb-4 text-[15px]">{t.about.intro}</p>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">{t.about.intro2}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-primary to-primary/50 rounded-full" />
              {t.about.educationTitle}
            </h3>
            <div className="space-y-4">
              {t.about.education.map((edu, index) => (
                <Card key={index} className="overflow-hidden card-premium shadow-md border-primary/10">
                  <CardContent className="p-6">
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => setExpandedEducation(expandedEducation === index ? null : index)}
                    >
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-1">{edu.title}</h4>
                        <p className="text-muted-foreground mb-1 font-medium">{edu.institution}</p>
                        <p className="text-sm text-primary font-semibold">{edu.period}</p>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform text-primary ${expandedEducation === index ? "rotate-180" : ""}`}
                      />
                    </div>
                    {expandedEducation === index && (
                      <div className="mt-4 pt-4 border-t border-primary/10">
                        <p className="font-semibold mb-3 text-primary">{t.about.skillsLabel}:</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.skills.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="secondary"
                              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-bold text-4xl mb-12 text-center">
              <span className="relative inline-block">
                {t.experience.title}
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B6B09F] to-transparent" />
              </span>
            </h2>
            <div className="space-y-8">
              {t.experience.items.map((exp, index) => (
                <Card key={index} className="card-premium shadow-md border-primary/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 ring-2 ring-primary/20">
                        <div className="w-6 h-6 rounded-full bg-primary shadow-md" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-1">{exp.title}</h4>
                        <p className="text-sm text-primary font-semibold mb-3">{exp.period}</p>
                        <div className="text-muted-foreground leading-relaxed text-[15px] space-y-2">
                          {exp.description.split("\n").map((line, i) => (
                            <p key={i}>{line}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Personal Projects */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-primary to-primary/50 rounded-full" />
              {t.about.personalProjectsTitle}
            </h3>
            <div className="space-y-8">
              {t.personalProjects.items.map((item, index) => (
                <Card key={index} className="card-premium shadow-lg border-primary/10 overflow-hidden group">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="w-32 h-32 flex-shrink-0 rounded-full bg-gradient-to-br from-card to-muted flex items-center justify-center ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all overflow-hidden">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-full object-cover animate-rotate-hover"
                        />
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <div className="flex flex-wrap items-center gap-3 mb-4 justify-center md:justify-start">
                          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full ring-1 ring-primary/20">
                            <Instagram className="h-4 w-4" />
                            {item.handle}
                          </span>
                          <span className="text-sm font-medium text-muted-foreground">{item.followers}</span>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
                        <Link href={`https://instagram.com/${item.handle.replace("@", "")}`} target="_blank">
                          <Button className="shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                            <Instagram className="mr-2 h-4 w-4" />
                            {item.cta}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section id="videos" className="py-20 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 title-accent inline-block">
              {language === "es" ? "Ejemplo de Videos" : "Video Examples"}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full mx-auto" />
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Video 1 */}
              <div className="group animate-fade-in">
                <div className="relative">
                  {/* Phone frame mockup */}
                  <div className="relative mx-auto max-w-sm">
                    <div className="relative bg-gradient-to-br from-[#222222] to-[#222222]/80 rounded-[3rem] p-3 shadow-2xl">
                      <div className="bg-background rounded-[2.5rem] overflow-hidden">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#222222] rounded-b-3xl z-20" />

                        {/* Video container */}
                        <div className="relative aspect-[9/16] bg-black">
                          <video
                            controls
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/586C409984dc42ddbb3f10696822b0f7%281%29-yR8zsg8cmj8nuk3r3sxkOhUwMBdqBn.mp4"
                          >
                            {language === "es"
                              ? "Tu navegador no soporta el elemento de video."
                              : "Your browser does not support the video element."}
                          </video>
                        </div>
                      </div>
                    </div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  </div>
                </div>
              </div>

              {/* Video 2 */}
              <div className="group animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="relative">
                  {/* Phone frame mockup */}
                  <div className="relative mx-auto max-w-sm">
                    <div className="relative bg-gradient-to-br from-[#222222] to-[#222222]/80 rounded-[3rem] p-3 shadow-2xl">
                      <div className="bg-background rounded-[2.5rem] overflow-hidden">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#222222] rounded-b-3xl z-20" />

                        <div className="relative aspect-[9/16] bg-black">
                          <video
                            controls
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17E73ce675234f4aac5c11b6bf38f648%20%281%29-VRXLgG7AGOwzpm9mbADVKWvGPavKYA.mp4"
                          >
                            {language === "es"
                              ? "Tu navegador no soporta el elemento de video."
                              : "Your browser does not support the video element."}
                          </video>
                        </div>
                      </div>
                    </div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <p className="text-xl font-semibold text-foreground">
                {language === "es" ? "Contenido para Redes Sociales" : "Social Media Content"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects and Achievements Section */}
      <section id="achievements" className="py-20 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 title-accent inline-block">{t.achievements.title}</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {t.achievements.items.map((item, index) => (
              <Card key={index} className="card-premium shadow-lg border-primary/10 overflow-hidden group">
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-card to-muted flex items-center justify-center ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4 ring-1 ring-primary/20">
                    {item.role}
                  </span>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 title-accent inline-block">{t.contact.title}</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href={`mailto:${contactInfo.email}`} className="block">
              <Card className="card-premium shadow-lg border-primary/10 group h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center ring-2 ring-primary/20 group-hover:ring-4 group-hover:ring-primary/30 transition-all">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{t.contact.email}</h3>
                  <p className="text-muted-foreground text-[15px] hover:text-primary transition-colors">
                    {contactInfo.email}
                  </p>
                </CardContent>
              </Card>
            </a>
            <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="block">
              <Card className="card-premium shadow-lg border-primary/10 group h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center ring-2 ring-primary/20 group-hover:ring-4 group-hover:ring-primary/30 transition-all">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{t.contact.phone}</h3>
                  <p className="text-muted-foreground text-[15px] hover:text-primary transition-colors">
                    {contactInfo.phone}
                  </p>
                </CardContent>
              </Card>
            </a>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.location)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="card-premium shadow-lg border-primary/10 group h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center ring-2 ring-primary/20 group-hover:ring-4 group-hover:ring-primary/30 transition-all">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{t.contact.location}</h3>
                  <p className="text-muted-foreground text-[15px] hover:text-primary transition-colors">
                    {contactInfo.location}
                  </p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-primary/20 bg-gradient-to-t from-secondary/30 to-transparent">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="text-sm">{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  )
}
