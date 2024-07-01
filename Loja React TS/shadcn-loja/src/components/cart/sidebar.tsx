import { RocketIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Separator } from "@/components/ui/separator"

export const CartSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button>
                    <RocketIcon className="mr-2"/>
                    <p>Carrinho</p>
                </Button>
            </SheetTrigger>

            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Carrinho</SheetTitle>              
                </SheetHeader>

                <div className="flex flex-col gap-5 my-3">
                    ...
                </div>
                <Separator className="my-4"/>

                <div className=" flex justify-between items-center text-xs">
                    <div>Subtotal:</div>
                    <div>...</div>
                </div>

                <Separator className="my-4"/>

                <div className="text-center">
                    <Button className="w-full">Finalizar Compra</Button>
                </div>

                

            </SheetContent>

        </Sheet>
    )
}