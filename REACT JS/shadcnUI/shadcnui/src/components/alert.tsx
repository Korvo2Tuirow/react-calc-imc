import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type Props= {
    error: string;
}

export const AlertText = ({error}:Props) =>{

    return (
   <div className="">
        
    <Alert variant={"destructive"}>
      <AlertTitle>Alert Title</AlertTitle>
      <AlertDescription>{error}</AlertDescription>
    </Alert>
    
  </div>
)
}