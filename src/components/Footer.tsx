import { Instagram, MessageCircle } from "lucide-react";
import algoraLogo from "@/assets/algora-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo e Nome */}
          <div className="flex items-center gap-3">
            <img 
              src={algoraLogo} 
              alt="Algora Logo" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-foreground">Algora</span>
          </div>

          {/* Texto descritivo */}
          <p className="text-center text-muted-foreground max-w-md text-sm sm:text-base">
            Conjuntos de pijamas elegantes e confortáveis, feitos com amor e qualidade premium.
          </p>

          {/* Botões de contato */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <a
              href="https://instagram.com/ag.algora"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 algora-btn-primary py-3 px-6 rounded-lg font-semibold text-sm sm:text-base transition-all hover:scale-105"
            >
              <Instagram className="w-5 h-5" />
              Siga no Instagram
            </a>
            
            <a
              href="https://wa.me/5547988549133?text=Olá! Gostaria de saber mais sobre os conjuntos de pijama da Algora."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 algora-btn-secondary py-3 px-6 rounded-lg font-semibold text-sm sm:text-base transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Chame no WhatsApp
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-xs sm:text-sm text-muted-foreground pt-4 border-t border-border w-full">
            <p>&copy; {new Date().getFullYear()} Algora. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;