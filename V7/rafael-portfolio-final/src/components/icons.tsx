import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Youtube,
  Instagram,
  Music2,
} from "lucide-react";

export function Icon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "github":
      return <Github className={className} aria-hidden="true" />;
    case "linkedin":
      return <Linkedin className={className} aria-hidden="true" />;
    case "email":
      return <Mail className={className} aria-hidden="true" />;
    case "whatsapp":
      return <MessageCircle className={className} aria-hidden="true" />;
    case "youtube":
      return <Youtube className={className} aria-hidden="true" />;
    case "instagram":
      return <Instagram className={className} aria-hidden="true" />;
    case "tiktok":
      // Lucide não possui TikTok oficial; usamos um ícone genérico de mídia.
      return <Music2 className={className} aria-hidden="true" />;
    default:
      return null;
  }
}
