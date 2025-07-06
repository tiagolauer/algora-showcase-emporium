import { useState } from "react";
import SizeFilter from "@/components/SizeFilter";
import SizeTables from "@/components/SizeTables";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import Footer from "@/components/Footer";
import { useEffect } from "react";

// Importação das imagens
import algoraLogo from "@/assets/algora-logo.png";
import pijama1a from "@/assets/conjunto-rosa-borboleta-1.png";
import pijama1b from "@/assets/conjunto-rosa-borboleta-2.png";
import pijama2a from "@/assets/pijama-set-2a.jpg";
import pijama2b from "@/assets/pijama-set-2b.jpg";
import pijama3a from "@/assets/pijama-set-3a.jpg";
import pijama3b from "@/assets/pijama-set-3b.jpg";
import pijama4a from "@/assets/pijama-set-4a.jpg";
import pijama4b from "@/assets/pijama-set-4b.jpg";

const Showcase = () => {
  const [filteredSizes, setFilteredSizes] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dados dos produtos
  const products = [
    {
      id: 1,
      name: "Conjunto Rosa Borboleta",
      images: [pijama1a, pijama1b],
      availableSizes: ["2", "4", "6", "8", "10", "12", "14", "Sob encomenda"]
    },
    {
      id: 2,
      name: "Conjunto Classic Blue",
      images: [pijama2a, pijama2b],
      availableSizes: ["1", "3", "4", "6", "8", "10", "12", "16"]
    },
    {
      id: 3,
      name: "Conjunto Luxury Pink",
      images: [pijama3a, pijama3b],
      availableSizes: ["2", "3", "4", "6", "8", "10", "14", "16", "Sob encomenda"]
    },
    {
      id: 4,
      name: "Conjunto Pure White",
      images: [pijama4a, pijama4b],
      availableSizes: ["1", "2", "4", "6", "8", "10", "12", "14", "16"]
    },
    {
      id: 5,
      name: "Conjunto Dream Cotton",
      images: [pijama1a, pijama3b], // Reutilizando imagens para demonstração
      availableSizes: ["3", "4", "6", "8", "10", "12", "Sob encomenda"]
    },
    {
      id: 6,
      name: "Conjunto Comfort Plus",
      images: [pijama2b, pijama4a],
      availableSizes: ["1", "2", "3", "6", "8", "10", "12", "14"]
    }
  ];

  // Filtrar produtos por tamanho
  const filteredProducts = filteredSizes.length === 0 
    ? products 
    : products.filter(product => 
        product.availableSizes.some(size => filteredSizes.includes(size))
      );

  const handleViewDetails = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    window.history.pushState({}, "", `?produto=${product.id}`);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    window.history.pushState({}, "", window.location.pathname);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const produtoId = params.get("produto");
    if (produtoId) {
      const found = products.find(p => p.id === Number(produtoId));
      if (found) {
        setSelectedProduct(found);
        setIsModalOpen(true);
      }
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header com Logo */}
      <header className="bg-card shadow-sm border-b border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center gap-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Mostruário da
            </h1>
            <img src={algoraLogo} alt="Logo Algora" className="h-24 md:h-32" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Seção de Tabelas de Medidas */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center animate-slide-up">
            Tabelas de Medidas
          </h2>
          <SizeTables />
        </section>

        {/* Seção de Produtos */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center animate-slide-up">
            Nossos Conjuntos de Pijamas
          </h2>
          
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-8">
            {/* Filtro Lateral */}
            <div className="xl:col-span-1 lg:col-span-1">
              <SizeFilter onFilterChange={setFilteredSizes} />
            </div>

            {/* Grade de Produtos */}
            <div className="xl:col-span-3 lg:col-span-2">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-base sm:text-lg text-muted-foreground">
                    Nenhum produto encontrado com os filtros selecionados.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
                  {filteredProducts.map((product, index) => (
                    <div 
                      key={product.id} 
                      className="animate-fade-in h-full"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <ProductCard
                        {...product}
                        onViewDetails={handleViewDetails}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Modal de Detalhes do Produto */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Showcase;