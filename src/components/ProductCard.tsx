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

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
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

  return (
    <Card 
      className="algora-card cursor-pointer group overflow-hidden"
      onClick={handleCardClick}
    >
      <CardContent className="p-0">
        {/* Carrossel de Imagens */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={images[currentImageIndex]}
            alt={`${name} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Controles do Carrossel */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 
                          text-foreground p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 
                          text-foreground p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}

          {/* Indicador de Zoom */}
          <div className="absolute top-2 right-2 bg-background/80 text-foreground p-1 rounded-full 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <ZoomIn className="w-4 h-4" />
          </div>

          {/* Indicadores de Página */}
          {images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-primary' : 'bg-background/60'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Informações do Produto */}
        <div className="p-4">
          <h3 className="font-semibold text-foreground mb-3 text-center">{name}</h3>
          
          {/* Tamanhos Disponíveis */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Tamanhos disponíveis:</p>
            <div className="flex flex-wrap gap-1 justify-center">
              {availableSizes.map((size) => (
                <span
                  key={size}
                  className="px-2 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground
                            shadow-sm hover:bg-primary/90 transition-colors"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;