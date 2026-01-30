"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { skills } from "@/lib/data";
import {
  Code2,
  Boxes,
  Database,
  Wrench,
  Cloud,
} from "lucide-react";

const categories = [
  { name: "Languages", data: skills.languages, icon: Code2, gridClass: "md:col-span-2" },
  { name: "Frameworks", data: skills.frameworks, icon: Boxes, gridClass: "md:col-span-2" },
  { name: "Databases", data: skills.databases, icon: Database, gridClass: "md:col-span-1" },
  { name: "Tools", data: skills.tools, icon: Wrench, gridClass: "md:col-span-2" },
  { name: "Cloud", data: skills.cloud, icon: Cloud, gridClass: "md:col-span-1" },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to build amazing products"
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className={category.gridClass}
              >
                <Card className="h-full p-6 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.data.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white/90 text-sm font-medium">
                            {skill.name}
                          </span>
                          <span className="text-primary text-sm font-bold">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: categoryIndex * 0.1 + skillIndex * 0.05,
                              ease: "easeOut",
                            }}
                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
