"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { personalInfo } from "@/lib/data";
import { Code2, Rocket, Users } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: 15, icon: Code2 },
  { label: "Technologies", value: 20, icon: Rocket },
  { label: "Happy Clients", value: 10, icon: Users },
];

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about my journey and expertise"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-2xl opacity-50"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
                <Image
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Software Engineer & Problem Solver
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all"
                  >
                    <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-3xl font-bold text-white mb-1">
                      <AnimatedCounter end={stat.value} suffix="+" />
                    </div>
                    <div className="text-xs text-white/60">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Tech Stack Preview */}
            <div className="flex flex-wrap gap-2">
              {["Java", "TypeScript", "Node.js", "React", "Next.js", "MongoDB", "Docker"].map(
                (tech) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-sm text-white/90"
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
