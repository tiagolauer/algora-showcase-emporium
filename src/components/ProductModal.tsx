import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

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

  if (!product) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center text-foreground">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Galeria de Imagens */}
          <div className="space-y-4">
            {/* Imagem Principal */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
              <img
                src={product.images[currentImageIndex]}
                alt={`${product.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
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
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">{product.name}</h2>
              <p className="text-muted-foreground">
                Conjunto de pijama de alta qualidade, confeccionado com materiais premium 
                para garantir máximo conforto e elegância. Design moderno e atemporal.
              </p>
            </div>

            {/* Características */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Características:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Tecido de alta qualidade</li>
                <li>• Corte anatômico para maior conforto</li>
                <li>• Costuras reforçadas</li>
                <li>• Fácil manutenção</li>
                <li>• Design exclusivo Algora</li>
              </ul>
            </div>

            {/* Tamanhos Disponíveis */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Tamanhos Disponíveis:</h3>
              <div className="flex flex-wrap gap-2">
                {product.availableSizes.map((size) => (
                  <span
                    key={size}
                    className="px-3 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground
                              shadow-sm border border-primary/20"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* Cuidados */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Cuidados:</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Lavar à máquina em água fria</li>
                <li>• Não usar alvejante</li>
                <li>• Secar à sombra</li>
                <li>• Passar ferro em temperatura baixa</li>
              </ul>
            </div>

            {/* Botão de Contato */}
            <div className="pt-4 border-t border-border">
              <button className="w-full algora-btn-primary py-3 rounded-lg font-semibold">
                Entrar em Contato para Pedido
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;