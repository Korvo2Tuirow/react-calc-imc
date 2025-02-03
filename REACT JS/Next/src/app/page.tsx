import { createClient } from '@/utils/supabase/server';


const Page = async () =>{

  const supabase = await createClient();
  const { data: profiles } = await supabase.from("profiles").select();
  console.log(profiles);
  return(
    <div>
      <pre>{JSON.stringify(profiles, null, 2)}</pre>
    </div>
  )
}

export default Page;