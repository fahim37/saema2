"use client"
import { motion } from "framer-motion"
import { Monitor, Settings, FileText, Brain, MessageSquare, Code, Cloud, Target, CheckCircle } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { InteractiveHeading } from "@/components/interactive-heading"
import { AnimatedText } from "@/components/animated-text"
import { FloatingParticles } from "@/components/floating-particles"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function ServicesPage() {
  const services = [
    {
      icon: Monitor,
      title: "Robotic Process Automation (RPA)",
      description: "Automatisierung repetitiver Geschäftsprozesse durch intelligente Software-Roboter",
      features: [
        "Prozessanalyse und -optimierung",
        "Bot-Entwicklung und -Implementierung",
        "Integration in bestehende Systeme",
        "24/7 Monitoring und Support",
      ],
      gradient: "from-pink-500 via-purple-500 to-indigo-600",
      hoverGradient: "from-pink-400 via-purple-400 to-indigo-500",
    },
    {
      icon: Brain,
      title: "Künstliche Intelligenz & Machine Learning",
      description: "Intelligente Lösungen für komplexe Datenanalyse und Entscheidungsfindung",
      features: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision",
        "Custom AI Model Development",
      ],
      gradient: "from-cyan-400 via-blue-500 to-purple-600",
      hoverGradient: "from-cyan-300 via-blue-400 to-purple-500",
    },
    {
      icon: FileText,
      title: "Document Understanding",
      description: "Automatische Verarbeitung und Klassifizierung von Dokumenten",
      features: [
        "OCR und Texterkennung",
        "Intelligente Dokumentenklassifizierung",
        "Datenextraktion aus Formularen",
        "Workflow-Automatisierung",
      ],
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      hoverGradient: "from-emerald-300 via-teal-400 to-cyan-500",
    },
    {
      icon: Settings,
      title: "Process Mining & Optimization",
      description: "Analyse und Optimierung bestehender Geschäftsprozesse",
      features: [
        "Prozessvisualisierung",
        "Bottleneck-Identifikation",
        "Performance-Analyse",
        "Optimierungsempfehlungen",
      ],
      gradient: "from-orange-400 via-red-500 to-pink-600",
      hoverGradient: "from-orange-300 via-red-400 to-pink-500",
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Nahtlose Integration von Cloud-Services und -Plattformen",
      features: ["Multi-Cloud-Strategien", "API-Integration", "Datenmigrationen", "Hybrid-Cloud-Lösungen"],
      gradient: "from-violet-500 via-purple-500 to-pink-600",
      hoverGradient: "from-violet-400 via-purple-400 to-pink-500",
    },
    {
      icon: MessageSquare,
      title: "Beratung & Strategie",
      description: "Umfassende Beratung für Ihre Digitalisierungsstrategie",
      features: ["Digital Transformation Roadmap", "ROI-Analyse", "Change Management", "Schulungen und Workshops"],
      gradient: "from-indigo-500 via-purple-500 to-pink-600",
      hoverGradient: "from-indigo-400 via-purple-400 to-pink-500",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Analyse",
      description: "Wir analysieren Ihre bestehenden Prozesse und identifizieren Automatisierungspotentiale",
      icon: Target,
    },
    {
      step: "02",
      title: "Konzeption",
      description: "Entwicklung einer maßgeschneiderten Automatisierungsstrategie für Ihr Unternehmen",
      icon: Brain,
    },
    {
      step: "03",
      title: "Implementierung",
      description: "Professionelle Umsetzung der Automatisierungslösungen mit modernsten Technologien",
      icon: Code,
    },
    {
      step: "04",
      title: "Support",
      description: "Kontinuierlicher Support und Optimierung für maximale Effizienz",
      icon: CheckCircle,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <FloatingParticles />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#5F39BB]/10 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#5F39BB] to-[#8B5CF6] text-xs md:text-sm font-semibold tracking-wider uppercase mb-4 md:mb-6"
            >
              <AnimatedText text="OUR SERVICES" />
            </motion.p>

            <div className="space-y-2 md:space-y-4">
              <InteractiveHeading size="xlarge" delay={0.5}>
                Intelligente
              </InteractiveHeading>
              <InteractiveHeading
                size="xlarge"
                gradient="from-[#5F39BB] to-[#8B5CF6]"
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#5F39BB] to-[#8B5CF6]"
                delay={0.8}
              >
                Automatisierung
              </InteractiveHeading>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto mt-6 md:mt-8"
            >
              <AnimatedText
                text="Von RPA bis KI - wir bieten maßgeschneiderte Lösungen für Ihre digitale Transformation"
                delay={1.4}
                simple={true}
              />
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                whileHover={{
                  scale: 1.02,
                  y: -10,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90 group-hover:opacity-100 transition-all duration-500`}
                />

                <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
                  <motion.div
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/30 transition-all duration-300"
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-8 h-8 text-white drop-shadow-lg" />
                  </motion.div>

                  <InteractiveHeading size="medium" className="text-xl font-bold mb-4 text-white drop-shadow-lg">
                    {service.title}
                  </InteractiveHeading>

                  <p className="text-white/90 leading-relaxed mb-6 flex-grow">{service.description}</p>

                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center space-x-2 text-sm text-white/80"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <CheckCircle className="w-4 h-4 text-white/60" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-gray-900/30 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#5F39BB] to-[#8B5CF6] text-xs md:text-sm font-semibold tracking-wider uppercase mb-4">
              <AnimatedText text="OUR PROCESS" />
            </p>
            <InteractiveHeading size="large">Wie wir arbeiten</InteractiveHeading>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center group"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div
                  className="relative w-20 h-20 bg-gradient-to-r from-[#5F39BB] to-[#8B5CF6] rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(95, 57, 187, 0.4)",
                    rotate: 10,
                  }}
                >
                  <step.icon className="w-10 h-10 text-white" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-[#5F39BB] rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </motion.div>

                <InteractiveHeading size="medium" className="mb-4">
                  {step.title}
                </InteractiveHeading>

                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <InteractiveHeading size="large" className="mb-6">
            Bereit für Ihre digitale Transformation?
          </InteractiveHeading>

          <motion.p
            className="text-lg text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Lassen Sie uns gemeinsam Ihre Geschäftsprozesse revolutionieren. Kontaktieren Sie uns für eine kostenlose
            Beratung.
          </motion.p>

          <Link href="/contact">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(95, 57, 187, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#5F39BB] to-[#8B5CF6] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Jetzt Beratung anfragen
            </motion.button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
