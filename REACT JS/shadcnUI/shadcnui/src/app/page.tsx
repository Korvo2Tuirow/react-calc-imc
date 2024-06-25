
import { AlertText } from "@/components/alert";
import { Exec01 } from "@/components/exec01";
import { ModeToggle } from "@/components/themes";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div>
      <div className="fixed flex items-center right-4 top-4 gap-5 p-5">
        <p>Theme</p>
        <ModeToggle />
      </div>
      <div className="flex flex-col gap-10 justify-center items-center h-screen w-full ">

        <Button>Click me</Button>
        <AlertText error="mensagem de errro personalizada" />

      </div>
      <div className="flex flex-col p-10 justify-center items-center">
        <Exec01 />
      </div>

    </div>
  )
}

export default Page;