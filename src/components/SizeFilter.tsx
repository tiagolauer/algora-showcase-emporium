import { useState } from "react";
import { Filter } from "lucide-react";

interface SizeFilterProps {
  onFilterChange: (sizes: string[]) => void;
}

const SIZES = ["1", "2", "3", "4", "6", "8", "10", "12", "14", "16", "Sob encomenda"];

const SizeFilter = ({ onFilterChange }: SizeFilterProps) => {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSize = (size: string) => {
    const newSizes = selectedSizes.includes(size)
      ? selectedSizes.filter(s => s !== size)
      : [...selectedSizes, size];
    
    setSelectedSizes(newSizes);
    onFilterChange(newSizes);
  };

  const clearFilters = () => {
    setSelectedSizes([]);
    onFilterChange([]);
  };

  return (
    <div className="bg-card rounded-lg p-6 shadow-md sticky top-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Filter className="w-5 h-5" />
          Filtrar por Tamanho
        </h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden algora-btn-primary px-3 py-1 text-sm rounded-md"
        >
          {isOpen ? 'Fechar' : 'Abrir'}
        </button>
      </div>
      
      <div className={`space-y-2 ${isOpen ? 'block' : 'hidden lg:block'}`}>
        <div className="flex flex-wrap gap-2">
          {SIZES.map((size) => (
            <button
              key={size}
              onClick={() => toggleSize(size)}
              className={`algora-filter-item text-sm border ${
                selectedSizes.includes(size) 
                  ? 'algora-filter-active border-accent' 
                  : 'border-border hover:border-primary'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
        
        {selectedSizes.length > 0 && (
          <div className="pt-3 border-t border-border">
            <button
              onClick={clearFilters}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
            >
              Limpar filtros ({selectedSizes.length})
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SizeFilter;