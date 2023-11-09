import {GeoForm} from '@/components/Geo';
import {Person} from '@/components/Person' 


const Page = () =>{
return(
  <>
    
    
    <Person
      name="JEff Bezos"
      url = "https://www.infomoney.com.br/wp-content/uploads/2019/06/jeff-bezos-1.jpg?fit=900%2C600&quality=50&strip=all"
      roles = {["CEO AMAZON", "CEO Blue Origin"]}    
    />

    <Person
      name="Fulano"
      
      roles = {["CEO Krill", "CEO Jam"]}    
    />

    </>
)
};

export default Page;