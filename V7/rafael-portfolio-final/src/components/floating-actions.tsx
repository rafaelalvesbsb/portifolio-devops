"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";

export function FloatingActions() {
  const [showTop, setShowTop] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-24 right-5 z-50 flex flex-col gap-3">
      <motion.a
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.98 }}
        href={`https://wa.me/${profile.phoneE164.replace(/\D/g, "")}?text=${encodeURIComponent(
          profile.whatsappPrefill
        )}`}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(var(--accent)/1),rgba(var(--accent3)/1))] text-white shadow-lg shadow-[rgba(var(--accent)/0.25)]"
        aria-label="Falar no WhatsApp"
        title="Falar no WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
      </motion.a>

      <AnimatePresence>
        {showTop ? (
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))]/70 shadow-lg backdrop-blur"
            aria-label="Voltar ao topo"
            title="Voltar ao topo"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
