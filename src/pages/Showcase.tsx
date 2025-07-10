import { useState } from "react"
import SizeFilter from "@/components/SizeFilter"
import SizeTables from "@/components/SizeTables"
import ProductCard from "@/components/ProductCard"
import ProductModal from "@/components/ProductModal"
import Footer from "@/components/Footer"
import Navigation from "@/components/Navigation"
import { useEffect } from "react"
import { Menu, X } from "lucide-react"

// Importação das imagens
import algoraLogo from "@/assets/algora-logo.png"
import pijama1a from "@/assets/conjunto-rosa-borboleta-1.png"
import pijama1b from "@/assets/conjunto-rosa-borboleta-2.png"
import pijama2a from "@/assets/conjunto-dinossauro-bege-1.png"
import pijama2b from "@/assets/conjunto-dinossauro-bege-1.png"
import pijama3a from "@/assets/conjunto-coelho-rosa-1.png"
import pijama3b from "@/assets/conjunto-coelho-rosa-2.png"
import pijama4a from "@/assets/conjunto-urso-com-coracao-1.png"
import pijama4b from "@/assets/conjunto-urso-com-coracao-2.png"
import pijama5a from "@/assets/conjunto-dinossauro-espacial-1.png"
import pijama5b from "@/assets/conjunto-dinossauro-espacial-2.png"
import pijama6a from "@/assets/conjunto-coracao-roxo-1.png"
import pijama6b from "@/assets/conjunto-coracao-roxo-2.png"
import "@fontsource/montserrat/700.css"
import "@fontsource/montserrat/400.css"

const Showcase = () => {
  const [filteredSizes, setFilteredSizes] = useState<string[]>([])
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
      name: "Conjunto Dinossauro Bege",
      images: [pijama2a, pijama2b],
      availableSizes: ["1", "3", "4", "6", "8", "10", "12", "16"]
    },
    {
      id: 3,
      name: "Conjunto Coelho Rosa",
      images: [pijama3a, pijama3b],
      availableSizes: ["1", "3", "4", "6", "8", "10", "12", "16"]
    },
    {
      id: 4,
      name: "Conjunto Urso com Coração",
      images: [pijama4a, pijama4b],
      availableSizes: ["3"]
    },
    {
      id: 5,
      name: "Conjunto Dinossauro Espacial",
      images: [pijama5a, pijama5b],
      availableSizes: ["1", "3", "4", "6", "8", "10", "12", "16"]
    },
    {
      id: 6,
      name: "Conjunto Coração Roxo",
      images: [pijama6a, pijama6b],
      availableSizes: ["1", "3", "4", "6", "8", "10", "12", "16"]
    }
  ]

  // Filtrar produtos por tamanho
  const filteredProducts =
    filteredSizes.length === 0
      ? products
      : products.filter(product =>
          product.availableSizes.some(size => filteredSizes.includes(size))
        )

  // Paginação
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 6
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  )

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleViewDetails = (product: any) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
    window.history.pushState({}, "", `?produto=${product.id}`)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
    window.history.pushState({}, "", window.location.pathname)
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const produtoId = params.get("produto")
    if (produtoId) {
      const found = products.find(p => p.id === Number(produtoId))
      if (found) {
        setSelectedProduct(found)
        setIsModalOpen(true)
      }
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header com Logo e Navegação */}
      <header className="bg-card shadow-sm border-b border-border select-none sticky top-0 z-50 backdrop-blur-sm bg-card/95">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo e Título */}
            <div className="flex items-center gap-4">
              <img
                src={algoraLogo}
                alt="Logo Algora"
                className="h-16 md:h-20"
              />
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                Mostruário
              </h1>
            </div>

            {/* Navegação Desktop */}
            <Navigation />

            {/* Menu Mobile */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-accent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Menu Mobile Expandido */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-border">
              <nav className="flex flex-col space-y-2">
                <button
                  className="text-left px-4 py-2 rounded-md hover:bg-accent transition-colors"
                  onClick={() => {
                    const element = document.getElementById("produtos")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                    setMobileMenuOpen(false)
                  }}
                >
                  Produtos
                </button>
                <button
                  className="text-left px-4 py-2 rounded-md hover:bg-accent transition-colors"
                  onClick={() => {
                    const element = document.getElementById("tabelas")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                    setMobileMenuOpen(false)
                  }}
                >
                  Tabelas de Medidas
                </button>
                <button
                  className="text-left px-4 py-2 rounded-md hover:bg-accent transition-colors"
                  onClick={() => {
                    const element = document.getElementById("contato")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                    setMobileMenuOpen(false)
                  }}
                >
                  Contato
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Seção Sobre */}
        <section
          id="sobre"
          className="rounded-xl bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 shadow-lg p-8 mb-12 flex flex-col items-center text-center animate-fade-in"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[Montserrat] tracking-tight"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Sobre a Algora
          </h2>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4 font-[Montserrat]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Conjuntos de <i>fleece</i> fofinhos e confortáveis para toda a
            família.
          </p>
          <img
            src={algoraLogo}
            alt="Logo Algora"
            className="h-20 md:h-28 mb-2"
          />
        </section>
        {/* Seção de Tabelas de Medidas */}
        <section id="tabelas">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center animate-slide-up">
            Tabelas de Medidas
          </h2>
          <SizeTables />
        </section>

        {/* Seção de Produtos */}
        <section id="produtos">
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
                  {currentProducts.map((product, index) => (
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

        {/* Paginação */}
        <section className="flex justify-center animate-fade-in">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              Anterior
            </button>

            <div className="flex items-center space-x-1">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-10 ${
                    currentPage === i + 1
                      ? "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`}
                  aria-current={currentPage === i + 1 ? "page" : undefined}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() =>
                handlePageChange(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              Próximo
            </button>
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
  )
}

export default Showcase
