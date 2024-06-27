
import { AlertText } from "@/components/alert";
import { Exec01 } from "@/components/exec01";
import { FormCard } from "@/components/formulario/formZodShad";
import { ModeToggle } from "@/components/themes";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="flex flex-col justify-center gap-28 mt-28">
      <div className="fixed flex items-center right-4 top-4 gap-5 p-5">
        <p>Theme</p>
        <ModeToggle />
      </div>
      <div className="flex flex-col gap-10 justify-center items-center w-full ">

        <Button>Click me</Button>
        <AlertText error="mensagem de errro personalizada" />

      </div>
      <div className="flex flex-col p-10 justify-center items-center">
        <Exec01 />
      </div>

      <div className="container max-w-[700px]">
        <FormCard/>
      </div>

    </div>
  )
}

export default Page;