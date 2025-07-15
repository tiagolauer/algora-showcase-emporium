import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronUp } from "lucide-react"

const SizeTables = () => {
  const [jacketExpanded, setJacketExpanded] = useState(false)
  const [pantsExpanded, setPantsExpanded] = useState(false)
  // Dados da tabela de casacos (baseado na imagem fornecida)
  const jacketSizes = [
    { tamanho: "1", altura: "40", largura: "33", manga: "32" },
    { tamanho: "2", altura: "42", largura: "35", manga: "35" },
    { tamanho: "4", altura: "46", largura: "37", manga: "38" },
    { tamanho: "6", altura: "47", largura: "39", manga: "42" },
    { tamanho: "8", altura: "48", largura: "40", manga: "45" },
    { tamanho: "10", altura: "50", largura: "43", manga: "49" },
    { tamanho: "12", altura: "57", largura: "51", manga: "56" },
    { tamanho: "14", altura: "62", largura: "52", manga: "60" },
    { tamanho: "16", altura: "63", largura: "54", manga: "63" },
    { tamanho: "PP", altura: "68", largura: "55", manga: "64" },
    { tamanho: "P", altura: "70", largura: "56", manga: "66" },
    { tamanho: "M", altura: "72", largura: "58", manga: "68" },
    { tamanho: "G", altura: "74", largura: "60", manga: "69" },
    { tamanho: "GG", altura: "76", largura: "64", manga: "70" }
  ]

  // Dados para tabela de calças (baseado nas proporções dos casacos)
  const pantsSizes = [
    {
      tamanho: "1",
      cintura: "58",
      quadril: "68",
      entreperna: "65",
      comprimento: "88"
    },
    {
      tamanho: "2",
      cintura: "62",
      quadril: "72",
      entreperna: "67",
      comprimento: "90"
    },
    {
      tamanho: "4",
      cintura: "68",
      quadril: "78",
      entreperna: "70",
      comprimento: "94"
    },
    {
      tamanho: "6",
      cintura: "72",
      quadril: "82",
      entreperna: "72",
      comprimento: "96"
    },
    {
      tamanho: "8",
      cintura: "76",
      quadril: "86",
      entreperna: "74",
      comprimento: "98"
    },
    {
      tamanho: "10",
      cintura: "80",
      quadril: "90",
      entreperna: "76",
      comprimento: "100"
    },
    {
      tamanho: "12",
      cintura: "26",
      quadril: "55",
      entreperna: "65",
      comprimento: "90"
    },
    {
      tamanho: "14",
      cintura: "28",
      quadril: "59",
      entreperna: "66",
      comprimento: "92"
    },
    {
      tamanho: "16",
      cintura: "30",
      quadril: "61",
      entreperna: "68",
      comprimento: "93"
    },
    {
      tamanho: "PP",
      cintura: "32",
      quadril: "62",
      entreperna: "69",
      comprimento: "94"
    },
    {
      tamanho: "P",
      cintura: "33",
      quadril: "63",
      entreperna: "69",
      comprimento: "95"
    },
    {
      tamanho: "M",
      cintura: "35",
      quadril: "64",
      entreperna: "72",
      comprimento: "97"
    },
    {
      tamanho: "G",
      cintura: "37",
      quadril: "68",
      entreperna: "76",
      comprimento: "102"
    },
    {
      tamanho: "GG",
      cintura: "40",
      quadril: "69",
      entreperna: "79",
      comprimento: "104"
    }
  ]

  const initialJacketSizes = jacketSizes.slice(0, 7) // até o tamanho 12
  const remainingJacketSizes = jacketSizes.slice(7)

  const initialPantsSizes = pantsSizes.slice(0, 7) // até o tamanho 12
  const remainingPantsSizes = pantsSizes.slice(7)

  return (
    <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
      {/* Tabela de Casacos */}
      <Card className="algora-card">
        <CardHeader className="algora-gradient text-primary-foreground">
          <CardTitle className="text-lg sm:text-xl font-bold text-center">
            Casacos
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="p-2 sm:p-3 text-center font-semibold text-xs sm:text-sm">
                    Tamanho
                  </th>
                  <th className="p-2 sm:p-3 text-center font-semibold text-xs sm:text-sm">
                    Altura (cm)
                  </th>
                  <th className="p-2 sm:p-3 text-center font-semibold text-xs sm:text-sm">
                    Largura (cm)
                  </th>
                  <th className="p-2 sm:p-3 text-center font-semibold text-xs sm:text-sm">
                    Manga (cm)
                  </th>
                </tr>
              </thead>
              <tbody>
                {initialJacketSizes.map((size, index) => (
                  <tr
                    key={size.tamanho}
                    className={
                      index % 2 === 0 ? "bg-background" : "bg-muted/20"
                    }
                  >
                    <td className="p-2 sm:p-3 font-bold text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground text-sm sm:text-base font-bold">
                        {size.tamanho}
                      </span>
                    </td>
                    <td className="p-2 sm:p-3 text-center text-sm sm:text-base">
                      {size.altura}
                    </td>
                    <td className="p-2 sm:p-3 text-center text-sm sm:text-base">
                      {size.largura}
                    </td>
                    <td className="p-2 sm:p-3 text-center text-sm sm:text-base">
                      {size.manga}
                    </td>
                  </tr>
                ))}
                <Collapsible open={jacketExpanded} onOpenChange={setJacketExpanded}>
                  <CollapsibleContent className="animate-accordion-down">
                    {remainingJacketSizes.map((size, index) => (
                      <tr
                        key={size.tamanho}
                        className={
                          (index + initialJacketSizes.length) % 2 === 0 ? "bg-background" : "bg-muted/20"
                        }
                      >
                        <td className="p-2 sm:p-3 font-bold text-center">
                          <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground text-sm sm:text-base font-bold">
                            {size.tamanho}
                          </span>
                        </td>
                        <td className="p-2 sm:p-3 text-center text-sm sm:text-base">
                          {size.altura}
                        </td>
                        <td className="p-2 sm:p-3 text-center text-sm sm:text-base">
                          {size.largura}
                        </td>
                        <td className="p-2 sm:p-3 text-center text-sm sm:text-base">
                          {size.manga}
                        </td>
                      </tr>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t">
            <CollapsibleTrigger asChild>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setJacketExpanded(!jacketExpanded)}
              >
                {jacketExpanded ? (
                  <>
                    <ChevronUp className="w-4 h-4 mr-2" />
                    Ver Menos
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 mr-2" />
                    Ver Tudo
                  </>
                )}
              </Button>
            </CollapsibleTrigger>
          </div>
        </CardContent>
      </Card>

      {/* Tabela de Calças */}
      <Card className="algora-card">
        <CardHeader className="algora-gradient text-primary-foreground">
          <CardTitle className="text-lg sm:text-xl font-bold text-center">
            Calças
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="p-2 sm:p-3 text-center font-semibold text-xs sm:text-sm">
                    Tamanho
                  </th>
                  <th className="p-2 sm:p-3 text-center font-semibold text-xs sm:text-sm">
                    Cintura (cm)
                  </th>
                  <th className="p-2 sm:p-3 text-center font-semibold text-xs sm:text-sm">
                    Quadril (cm)
                  </th>
                  <th className="p-2 sm:p-3 text-center font-semibold text-xs sm:text-sm">
                    Entrepierna (cm)
                  </th>
                  <th className="p-2 sm:p-3 text-center font-semibold text-xs sm:text-sm">
                    Comprimento (cm)
                  </th>
                </tr>
              </thead>
              <tbody>
                {initialPantsSizes.map((size, index) => (
                  <tr
                    key={size.tamanho}
                    className={
                      index % 2 === 0 ? "bg-background" : "bg-muted/20"
                    }
                  >
                    <td className="p-2 sm:p-3 font-bold text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-secondary text-secondary-foreground text-sm sm:text-base font-bold">
                        {size.tamanho}
                      </span>
                    </td>
                    <td className="p-2 sm:p-3 text-center text-sm sm:text-base">
                      {size.cintura}
                    </td>
                    <td className="p-2 sm:p-3 text-center text-sm sm:text-base">
                      {size.quadril}
                    </td>
                    <td className="p-2 sm:p-3 text-center text-sm sm:text-base">
                      {size.entreperna}
                    </td>
                    <td className="p-2 sm:p-3 text-center text-sm sm:text-base">
                      {size.comprimento}
                    </td>
                  </tr>
                ))}
                <Collapsible open={pantsExpanded} onOpenChange={setPantsExpanded}>
                  <CollapsibleContent className="animate-accordion-down">
                    {remainingPantsSizes.map((size, index) => (
                      <tr
                        key={size.tamanho}
                        className={
                          (index + initialPantsSizes.length) % 2 === 0 ? "bg-background" : "bg-muted/20"
                        }
                      >
                        <td className="p-2 sm:p-3 font-bold text-center">
                          <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-secondary text-secondary-foreground text-sm sm:text-base font-bold">
                            {size.tamanho}
                          </span>
                        </td>
                        <td className="p-2 sm:p-3 text-center text-sm sm:text-base">
                          {size.cintura}
                        </td>
                        <td className="p-2 sm:p-3 text-center text-sm sm:text-base">
                          {size.quadril}
                        </td>
                        <td className="p-2 sm:p-3 text-center text-sm sm:text-base">
                          {size.entreperna}
                        </td>
                        <td className="p-2 sm:p-3 text-center text-sm sm:text-base">
                          {size.comprimento}
                        </td>
                      </tr>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t">
            <CollapsibleTrigger asChild>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setPantsExpanded(!pantsExpanded)}
              >
                {pantsExpanded ? (
                  <>
                    <ChevronUp className="w-4 h-4 mr-2" />
                    Ver Menos
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 mr-2" />
                    Ver Tudo
                  </>
                )}
              </Button>
            </CollapsibleTrigger>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default SizeTables
