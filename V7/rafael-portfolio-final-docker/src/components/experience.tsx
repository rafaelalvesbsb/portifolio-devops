"use client";

import { motion, type Variants } from "framer-motion";
import { profile } from "@/data/profile";
import { Card, CardContent, CardHeader } from "@/components/card";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 },
  }),
};

export function Experience() {
  return (
    <div className="relative">
      {/* linha */}
      <div
        aria-hidden="true"
        className="absolute left-4 top-0 h-full w-px bg-[linear-gradient(to_bottom,transparent,rgba(var(--accent)/0.45),transparent)]"
      />

      <div className="space-y-4">
        {profile.experiences.map((e, idx) => (
          <motion.div
            key={`${e.company}-${e.role}`}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            custom={idx}
            className="relative pl-10"
          >
            <div
              aria-hidden="true"
              className="absolute left-[10px] top-7 h-3 w-3 rounded-full bg-[rgba(var(--accent)/0.8)] shadow-[0_0_0_6px_rgba(var(--accent)/0.18)]"
            />

            <Card>
              <CardHeader
                title={`${e.role} • ${e.company}`}
                subtitle={`${e.period}${e.location ? ` • ${e.location}` : ""}`}
              />
              <CardContent>
                <ul className="space-y-2 text-sm text-[rgb(var(--muted))]">
                  {e.highlights.map((h) => (
                    <li key={h} className="leading-relaxed">
                      • {h}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
