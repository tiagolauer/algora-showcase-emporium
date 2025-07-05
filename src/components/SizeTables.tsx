import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SizeTables = () => {
  // Dados da tabela de casacos (baseado na imagem fornecida)
  const jacketSizes = [
    { tamanho: "1", busto: "76", cintura: "60", quadril: "84", manga: "55" },
    { tamanho: "2", busto: "80", cintura: "64", quadril: "88", manga: "56" },
    { tamanho: "3", busto: "84", cintura: "68", quadril: "92", manga: "57" },
    { tamanho: "4", busto: "88", cintura: "72", quadril: "96", manga: "58" },
    { tamanho: "6", busto: "92", cintura: "76", quadril: "100", manga: "59" },
    { tamanho: "8", busto: "96", cintura: "80", quadril: "104", manga: "60" },
    { tamanho: "10", busto: "100", cintura: "84", quadril: "108", manga: "61" },
    { tamanho: "12", busto: "104", cintura: "88", quadril: "112", manga: "62" },
    { tamanho: "14", busto: "108", cintura: "92", quadril: "116", manga: "63" },
    { tamanho: "16", busto: "112", cintura: "96", quadril: "120", manga: "64" }
  ];

  // Dados fictícios para tabela de calças
  const pantsSizes = [
    { tamanho: "1", cintura: "60", quadril: "84", entrepierna: "72", comprimento: "95" },
    { tamanho: "2", cintura: "64", quadril: "88", entrepierna: "73", comprimento: "96" },
    { tamanho: "3", cintura: "68", quadril: "92", entrepierna: "74", comprimento: "97" },
    { tamanho: "4", cintura: "72", quadril: "96", entrepierna: "75", comprimento: "98" },
    { tamanho: "6", cintura: "76", quadril: "100", entrepierna: "76", comprimento: "99" },
    { tamanho: "8", cintura: "80", quadril: "104", entrepierna: "77", comprimento: "100" },
    { tamanho: "10", cintura: "84", quadril: "108", entrepierna: "78", comprimento: "101" },
    { tamanho: "12", cintura: "88", quadril: "112", entrepierna: "79", comprimento: "102" },
    { tamanho: "14", cintura: "92", quadril: "116", entrepierna: "80", comprimento: "103" },
    { tamanho: "16", cintura: "96", quadril: "120", entrepierna: "81", comprimento: "104" }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
      {/* Tabela de Casacos */}
      <Card className="algora-card">
        <CardHeader className="algora-gradient text-primary-foreground">
          <CardTitle className="text-lg sm:text-xl font-bold text-center">Tabela de Medidas - Casacos</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="p-2 sm:p-3 text-center font-semibold text-xs sm:text-sm">Tamanho</th>
                  <th className="p-2 sm:p-3 text-center font-semibold text-xs sm:text-sm">Busto (cm)</th>
                  <th className="p-2 sm:p-3 text-center font-semibold text-xs sm:text-sm">Cintura (cm)</th>
                  <th className="p-2 sm:p-3 text-center font-semibold text-xs sm:text-sm">Quadril (cm)</th>
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
                     <td className="p-2 sm:p-3 text-center text-sm sm:text-base">{size.busto}</td>
                     <td className="p-2 sm:p-3 text-center text-sm sm:text-base">{size.cintura}</td>
                     <td className="p-2 sm:p-3 text-center text-sm sm:text-base">{size.quadril}</td>
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
           <CardTitle className="text-lg sm:text-xl font-bold text-center">Tabela de Medidas - Calças</CardTitle>
         </CardHeader>
         <CardContent className="p-0">
           <div className="overflow-x-auto">
             <table className="w-full text-sm">
               <thead>
                 <tr className="bg-muted/50">
                   <th className="p-2 sm:p-3 text-center font-semibold text-xs sm:text-sm">Tamanho</th>
                   <th className="p-2 sm:p-3 text-center font-semibold text-xs sm:text-sm">Cintura (cm)</th>
                   <th className="p-2 sm:p-3 text-center font-semibold text-xs sm:text-sm">Quadril (cm)</th>
                   <th className="p-2 sm:p-3 text-center font-semibold text-xs sm:text-sm">Entrepierna (cm)</th>
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
                     <td className="p-2 sm:p-3 text-center text-sm sm:text-base">{size.quadril}</td>
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