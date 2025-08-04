"use client";
import { motion } from "framer-motion";
import {
  Users,
  Award,
  Lightbulb,
  Heart,
  Zap,
  Globe,
  TrendingUp,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { InteractiveHeading } from "@/components/interactive-heading";
import { AnimatedText } from "@/components/animated-text";
import { FloatingParticles } from "@/components/floating-particles";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Wir setzen auf modernste Technologien und innovative Ansätze, um Ihnen die besten Lösungen zu bieten.",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: Heart,
      title: "Leidenschaft",
      description:
        "Unsere Leidenschaft für Automatisierung treibt uns an, außergewöhnliche Ergebnisse zu erzielen.",
      gradient: "from-pink-500 to-red-500",
    },
    {
      icon: Users,
      title: "Partnerschaft",
      description:
        "Wir arbeiten eng mit unseren Kunden zusammen und verstehen uns als langfristige Partner.",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: Award,
      title: "Qualität",
      description:
        "Höchste Qualitätsstandards in allen Projekten - von der Konzeption bis zur Umsetzung.",
      gradient: "from-green-500 to-teal-500",
    },
  ];

  const stats = [
    {
      number: "50+",
      label: "Erfolgreiche Projekte",
      icon: TrendingUp,
    },
    {
      number: "95%",
      label: "Kundenzufriedenheit",
      icon: Heart,
    },
    {
      number: "24/7",
      label: "Support verfügbar",
      icon: Zap,
    },
    {
      number: "10+",
      label: "Jahre Erfahrung",
      icon: Award,
    },
  ];

  const team = [
    {
      name: "Max Mustermann",
      role: "CEO & Founder",
      description:
        "Experte für RPA und digitale Transformation mit über 10 Jahren Erfahrung.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Anna Schmidt",
      role: "CTO",
      description:
        "Spezialistin für KI und Machine Learning mit Fokus auf innovative Lösungen.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Thomas Weber",
      role: "Lead Developer",
      description:
        "Entwicklungsleiter mit Expertise in Cloud-Technologien und Systemintegration.",
      gradient: "from-green-500 to-teal-500",
    },
  ];

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
              <AnimatedText text="ABOUT US" />
            </motion.p>

            <div className="space-y-2 md:space-y-4">
              <InteractiveHeading size="xlarge" delay={0.5}>
                Wer wir
              </InteractiveHeading>
              <InteractiveHeading
                size="xlarge"
                gradient="from-[#5F39BB] to-[#8B5CF6]"
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#5F39BB] to-[#8B5CF6]"
                delay={0.8}
              >
                sind
              </InteractiveHeading>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto mt-6 md:mt-8"
            >
              <AnimatedText
                text="SAEMA ist Ihr Partner für intelligente Automatisierung und digitale Transformation"
                delay={1.4}
                simple={true}
              />
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <InteractiveHeading size="large">
              Unsere Geschichte
            </InteractiveHeading>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                SAEMA wurde mit der Vision gegründet, Unternehmen dabei zu
                helfen, das volle Potenzial der digitalen Transformation zu
                erschließen. Als Experten für Robotic Process Automation (RPA)
                und Künstliche Intelligenz haben wir bereits über 50
                erfolgreiche Projekte realisiert.
              </p>

              <p>
                Unser interdisziplinäres Team aus Beratern, Entwicklern und
                Ingenieuren arbeitet täglich daran, innovative Lösungen zu
                entwickeln, die nicht nur Prozesse automatisieren, sondern
                echten Mehrwert für unsere Kunden schaffen.
              </p>

              <p>
                Von der ersten Beratung bis zur langfristigen Betreuung stehen
                wir unseren Kunden als verlässlicher Partner zur Seite und
                sorgen dafür, dass ihre Automatisierungsprojekte zum Erfolg
                werden.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-gradient-to-br from-[#5F39BB]/20 to-[#8B5CF6]/20 p-8 rounded-2xl backdrop-blur-sm border border-[#5F39BB]/30"
            >
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-r from-[#5F39BB] to-[#8B5CF6] rounded-full flex items-center justify-center mx-auto mb-3"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5F39BB] to-[#8B5CF6]">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-gray-900/30 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#5F39BB] to-[#8B5CF6] text-xs md:text-sm font-semibold tracking-wider uppercase mb-4">
              <AnimatedText text="OUR VALUES" />
            </p>
            <InteractiveHeading size="large">
              Was uns antreibt
            </InteractiveHeading>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="text-center group"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-r ${value.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl`}
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(95, 57, 187, 0.4)",
                    rotate: 15,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <value.icon className="w-10 h-10 text-white" />
                </motion.div>

                <InteractiveHeading size="medium" className="mb-4">
                  {value.title}
                </InteractiveHeading>

                <p className="text-gray-300 leading-relaxed text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#5F39BB] to-[#8B5CF6] text-xs md:text-sm font-semibold tracking-wider uppercase mb-4">
              <AnimatedText text="OUR TEAM" />
            </p>
            <InteractiveHeading size="large">Die Köpfe hinter SAEMA</InteractiveHeading>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.02, y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-90`} />

                <div className="relative z-10 p-8 text-center">
                  <motion.div
                    className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Users className="w-12 h-12 text-white" />
                  </motion.div>

                  <InteractiveHeading size="medium" className="text-white mb-2">
                    {member.name}
                  </InteractiveHeading>

                  <p className="text-white/80 font-medium mb-4">{member.role}</p>

                  <p className="text-white/70 text-sm leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Mission Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-gray-900/30 to-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <InteractiveHeading size="large" className="mb-8">
            Unsere Mission
          </InteractiveHeading>

          <motion.p
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Wir glauben daran, dass intelligente Automatisierung nicht nur
            Prozesse effizienter macht, sondern Menschen dabei hilft, sich auf
            das zu konzentrieren, was wirklich wichtig ist. Unser Ziel ist es,
            Unternehmen dabei zu unterstützen, ihre digitale Transformation
            erfolgreich zu gestalten und nachhaltigen Mehrwert zu schaffen.
          </motion.p>

          <motion.div
            className="flex justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-[#5F39BB] to-[#8B5CF6] rounded-full flex items-center justify-center">
              <Globe className="w-8 h-8 text-white" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
