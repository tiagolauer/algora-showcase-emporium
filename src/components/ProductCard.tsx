import { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  id: number;
  name: string;
  images: string[];
  availableSizes: string[];
  onViewDetails: (product: any) => void;
}

const ProductCard = ({ id, name, images, availableSizes, onViewDetails }: ProductCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [animating, setAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<"left" | "right" | null>(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (animating) return;
    setAnimationDirection("left");
    setAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
      setAnimating(false);
      setAnimationDirection(null);
    }, 400); // duração da animação
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (animating) return;
    setAnimationDirection("right");
    setAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
      setAnimating(false);
      setAnimationDirection(null);
    }, 400); // duração da animação
  };

  const handleCardClick = () => {
    onViewDetails({
      id,
      name,
      images,
      availableSizes,
      currentImage: images[currentImageIndex]
    });
  };

  // Variáveis para swipe
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX - touchEndX > 50) {
      nextImage(e as any);
    } else if (touchEndX - touchStartX > 50) {
      prevImage(e as any);
    }
  };

  return (
    <Card 
      className="algora-card cursor-pointer group overflow-hidden h-full flex flex-col"
      onClick={handleCardClick}
    >
      <CardContent className="p-0 flex-1 flex flex-col">
        {/* Carrossel de Imagens */}
        <div className="relative aspect-square overflow-hidden flex-shrink-0"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={images[currentImageIndex]}
            alt={`${name} - Image ${currentImageIndex + 1}`}
            className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${animating ? (animationDirection === "left" ? "animate-slide-fade-left" : animationDirection === "right" ? "animate-slide-fade-right" : "") : "animate-slide-fade-in"}`}
          />
          
          {/* Controles do Carrossel */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-1 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 
                          text-foreground p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 
                          text-foreground p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </>
          )}

          {/* Indicador de Zoom */}
          <div className="absolute top-1 right-1 bg-background/80 text-foreground p-1 rounded-full 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <ZoomIn className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>

          {/* Indicadores de Página */}
          {images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-primary' : 'bg-background/60'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Informações do Produto */}
        <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
          <h3 className="font-semibold text-foreground mb-2 text-center text-sm sm:text-base line-clamp-2">{name}</h3>
          
          {/* Tamanhos Disponíveis */}
          <div className="space-y-2">
            <p className="text-xs sm:text-sm font-medium text-muted-foreground text-center">Tamanhos disponíveis:</p>
            <div className="flex flex-col gap-1 items-center min-h-[2rem]">
              {/* Números */}
              <div className="flex flex-wrap gap-1 justify-center">
                {availableSizes.filter(size => size !== "Sob encomenda").map((size) => (
                  <span
                    key={size}
                    className="w-6 h-6 sm:w-7 sm:h-7 text-xs font-semibold rounded-full bg-primary text-primary-foreground
                              shadow-sm hover:bg-primary/90 transition-colors flex-shrink-0 flex items-center justify-center"
                  >
                    {size}
                  </span>
                ))}
              </div>
              {/* Sob encomenda */}
              {availableSizes.includes("Sob encomenda") && (
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground
                                shadow-sm hover:bg-accent/90 transition-colors">
                  Sob encomenda
                </span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;