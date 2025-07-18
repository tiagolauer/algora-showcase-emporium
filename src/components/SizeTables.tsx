import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SizeTables = () => {
  // Dados da tabela de casacos (baseado na imagem fornecida)
  const jacketSizes = [
    { tamanho: "1", altura: "40", largura: "33", manga: "32" },
    { tamanho: "2", altura: "42", largura: "35", manga: "35" },
    { tamanho: "4", altura: "46", largura: "37", manga: "38" },
    { tamanho: "6", altura: "47", largura: "39", manga: "42" },
    { tamanho: "8", altura: "48", largura: "40", manga: "45" },
    { tamanho: "10", altura: "50", largura: "43", manga: "49" },
    { tamanho: "12", altura: "52", largura: "45", manga: "52" },
    { tamanho: "14", altura: "54", largura: "47", manga: "55" },
    { tamanho: "16", altura: "56", largura: "49", manga: "58" }
  ];

  // Dados para tabela de calças (baseado nas proporções dos casacos)
  const pantsSizes = [
    { tamanho: "1", cintura: "20", entrepierna: "30", comprimento: "46" },
    { tamanho: "2", cintura: "20", entrepierna: "37", comprimento: "53" },
    { tamanho: "3", cintura: "21", entrepierna: "40", comprimento: "58" },
    { tamanho: "4", cintura: "21", entrepierna: "46", comprimento: "66" },
    { tamanho: "6", cintura: "23", entrepierna: "54", comprimento: "73" },
    { tamanho: "8", cintura: "23", entrepierna: "54", comprimento: "73" },
    { tamanho: "10", cintura: "25", entrepierna: "58", comprimento: "79" },
    { tamanho: "12", cintura: "27", entrepierna: "78", comprimento: "102" },
    { tamanho: "14", cintura: "31", entrepierna: "80", comprimento: "104" },
    { tamanho: "16", cintura: "32", entrepierna: "82", comprimento: "106" }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
      {/* Tabela de Casacos */}
      <Card className="algora-card">
        <CardHeader className="algora-gradient text-primary-foreground">
          <CardTitle className="text-lg sm:text-xl font-bold text-center">Casacos</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="p-2 sm:p-3 text-center font-semibold text-xs sm:text-sm">Tamanho</th>
                  <th className="p-2 sm:p-3 text-center font-semibold text-xs sm:text-sm">Altura (cm)</th>
                  <th className="p-2 sm:p-3 text-center font-semibold text-xs sm:text-sm">Largura (cm)</th>
                  <th className="p-2 sm:p-3 text-center font-semibold text-xs sm:text-sm">Manga (cm)</th>
                </tr>
              </thead>
              <tbody>
                 {jacketSizes.map((size, index) => (
                   <tr key={size.tamanho} className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                     <td className="p-2 sm:p-3 font-bold text-center">
                       <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground text-sm sm:text-base font-bold">
                         {size.tamanho}
                       </span>
                     </td>
                     <td className="p-2 sm:p-3 text-center text-sm sm:text-base">{size.altura}</td>
                     <td className="p-2 sm:p-3 text-center text-sm sm:text-base">{size.largura}</td>
                     <td className="p-2 sm:p-3 text-center text-sm sm:text-base">{size.manga}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
         </CardContent>
       </Card>

       {/* Tabela de Calças */}
       <Card className="algora-card">
         <CardHeader className="algora-gradient text-primary-foreground">
           <CardTitle className="text-lg sm:text-xl font-bold text-center">Calças</CardTitle>
         </CardHeader>
         <CardContent className="p-0">
           <div className="overflow-x-auto">
             <table className="w-full text-sm">
               <thead>
                 <tr className="bg-muted/50">
                   <th className="p-2 sm:p-3 text-center font-semibold text-xs sm:text-sm">Tamanho</th>
                   <th className="p-2 sm:p-3 text-center font-semibold text-xs sm:text-sm">Cintura (cm)</th>
                   <th className="p-2 sm:p-3 text-center font-semibold text-xs sm:text-sm">Entreperna (cm)</th>
                   <th className="p-2 sm:p-3 text-center font-semibold text-xs sm:text-sm">Comprimento (cm)</th>
                 </tr>
               </thead>
               <tbody>
                 {pantsSizes.map((size, index) => (
                   <tr key={size.tamanho} className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                     <td className="p-2 sm:p-3 font-bold text-center">
                       <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-secondary text-secondary-foreground text-sm sm:text-base font-bold">
                         {size.tamanho}
                       </span>
                     </td>
                     <td className="p-2 sm:p-3 text-center text-sm sm:text-base">{size.cintura}</td>
                     <td className="p-2 sm:p-3 text-center text-sm sm:text-base">{size.entrepierna}</td>
                     <td className="p-2 sm:p-3 text-center text-sm sm:text-base">{size.comprimento}</td>
                   </tr>
                 ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SizeTables;