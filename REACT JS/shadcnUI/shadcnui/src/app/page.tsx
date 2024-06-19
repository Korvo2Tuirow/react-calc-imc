
import { AlertText } from "@/components/alert";
import { ModeToggle } from "@/components/themes";
import { Button } from "@/components/ui/button";

const Page=()=>{
  return (
   <div>
    <div className="flex justify-end items-center gap-5 p-5">
      <p>Theme</p>
    <ModeToggle/>
    </div>
     <div className="flex flex-col gap-10 justify-center items-center h-screen w-full ">
     
        <Button>Click me</Button>
        <AlertText error="mensagem de errro personalizada"/>
    
     
     
     </div>
   </div>
  )
}

export default Page;