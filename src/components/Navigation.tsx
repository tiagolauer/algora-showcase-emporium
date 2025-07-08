import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(navigationMenuTriggerStyle(), "cursor-pointer")}
            onClick={() => scrollToSection("produtos")}
          >
            Produtos
          </NavigationMenuLink>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(navigationMenuTriggerStyle(), "cursor-pointer")}
            onClick={() => scrollToSection("tabelas")}
          >
            Tabelas de Medidas
          </NavigationMenuLink>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 w-[400px]">
              <div className="grid gap-1">
                <h4 className="text-sm font-medium leading-none">Algora</h4>
                <p className="text-sm text-muted-foreground">
                  Conjuntos de pijamas elegantes e confortáveis para toda a família.
                </p>
              </div>
              <div className="grid gap-1">
                <h4 className="text-sm font-medium leading-none">Qualidade</h4>
                <p className="text-sm text-muted-foreground">
                  Produtos confeccionados com materiais de alta qualidade e acabamento premium.
                </p>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(navigationMenuTriggerStyle(), "cursor-pointer")}
            onClick={() => scrollToSection("contato")}
          >
            Contato
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;