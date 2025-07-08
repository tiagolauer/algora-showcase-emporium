import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";

interface ProductModalProps {
  product: {
    id: number;
    name: string;
    images: string[];
    availableSizes: string[];
    currentImage?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<"left" | "right" | null>(null);
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({});
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    if (isMobile) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      transform: "scale(2)",
      transformOrigin: `${x}% ${y}%`,
      transition: "transform 0.2s cubic-bezier(0.4,0,0.2,1)",
      cursor: "zoom-in",
    });
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setZoomStyle({});
  };

  if (!product) return null;

  const nextImage = () => {
    if (animating) return;
    setAnimationDirection("left");
    setAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
      setAnimating(false);
      setAnimationDirection(null);
    }, 400);
  };

  const prevImage = () => {
    if (animating) return;
    setAnimationDirection("right");
    setAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
      setAnimating(false);
      setAnimationDirection(null);
    }, 400);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto p-4 sm:p-6">
        {/* Botão de Fechar com Seta */}
        <button
          onClick={onClose}
          className="algora-modal-close-btn"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        
        <DialogHeader className="pt-8">
          <DialogTitle className="text-lg sm:text-xl font-bold text-center text-foreground">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 pt-4">
          {/* Galeria de Imagens */}
          <div className="space-y-4">
            {/* Imagem Principal */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted"
              onTouchStart={(e) => {
                (window as any).modalTouchStartX = e.changedTouches[0].screenX;
              }}
              onTouchMove={(e) => {
                (window as any).modalTouchEndX = e.changedTouches[0].screenX;
              }}
              onTouchEnd={(e) => {
                const start = (window as any).modalTouchStartX || 0;
                const end = (window as any).modalTouchEndX || 0;
                if (start - end > 50) {
                  nextImage();
                } else if (end - start > 50) {
                  prevImage();
                }
              }}
            >
              <img
                src={product.images[currentImageIndex]}
                alt={`${product.name} - Image ${currentImageIndex + 1}`}
                className={`w-full h-full object-cover transition-transform duration-300 ${animating ? (animationDirection === "left" ? "animate-slide-fade-left" : "animate-slide-fade-right") : "animate-slide-fade-in"}`}
                style={!isMobile ? zoomStyle : {}}
                onMouseMove={!isMobile ? handleMouseMove : undefined}
                onMouseLeave={!isMobile ? handleMouseLeave : undefined}
              />
              
              {/* Controles de Navegação */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background 
                              text-foreground p-2 rounded-full shadow-md transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background 
                              text-foreground p-2 rounded-full shadow-md transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Miniaturas */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex 
                        ? 'border-primary' 
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Informações do Produto */}
          <div className="space-y-6">
            {/* Tamanhos Disponíveis */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Tamanhos Disponíveis:</h3>
              <div className="flex flex-col gap-3">
                {/* Números */}
                <div className="flex flex-wrap gap-2">
                  {product.availableSizes.filter(size => size !== "Sob encomenda").map((size) => (
                    <span
                      key={size}
                      className="px-3 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground
                                shadow-sm border border-primary/20"
                    >
                      {size}
                    </span>
                  ))}
                </div>
                {/* Sob encomenda */}
                {product.availableSizes.includes("Sob encomenda") && (
                  <span className="px-3 py-2 text-sm font-medium rounded-lg bg-accent text-accent-foreground
                                  shadow-sm border border-accent/20 self-start">
                    Sob encomenda
                  </span>
                )}
              </div>
            </div>

            {/* Botão de Contato */}
            <div className="pt-4 border-t border-border">
              <a
                href={`https://wa.me/5547988549133?text=Ol%C3%A1!%20Tudo%20bem%3F%20Gostaria%20de%20saber%20a%20disponibilidade%20do%20${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full algora-btn-primary py-3 rounded-lg font-semibold inline-block text-center"
              >
                Entrar em Contato para Pedido
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;