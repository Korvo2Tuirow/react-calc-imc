import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getAllProducts } from "@/services/product"
import { Product } from "@/types/product";
import { Item } from "@radix-ui/react-dropdown-menu";

type Tab = {
    
        title: string;
        value: string;
        products: Product[];
    
}


export const ProductsTab = async () => {

    const products = await getAllProducts();

    const tabs: Tab[] = [
        {
            title: "Sushi",
            value: "sushi",
            products: products.filter(item=> item.category === "sushi")
        },

        {
            title: "Temaki",
            value: "temaki",
            products: products.filter(item=> item.category === "temaki")
        },

        {
            title: "Combos",
            value: "pack",
            products: products.filter(item=> item.category === "pack")
        },

        {
            title: "Bebidas",
            value: "beverage",
            products: products.filter(item=> item.category === "beverage")
        },
    ];

    return (

        <Tabs defaultValue="sushi">
            <TabsList className="flex">

                {tabs.map(item =>(
                    <TabsTrigger
                    key={item.value}
                    value={item.value}
                    className="flex-1"
                    >{item.title}</TabsTrigger> 
                ))}        
          
            </TabsList>

            {tabs.map(item=>(
                 <TabsContent            
                 value={item.value} className="mt-6">
                 </TabsContent>
            ))}
            
           

        </Tabs>
    )
}