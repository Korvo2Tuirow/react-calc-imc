import {GeoForm} from '@/components/Geo';
import {Person} from '@/components/Person'; 
import {Card} from '@/components/Card';
import {Circle} from '@/components/Circle';
import {Cond} from '@/components/Cond';
import { peopleList } from '@/data/peopleList';


const Page = () =>{

  //filtrar a lista
  const motoca = peopleList.filter(person => person.profissao == "Motoboy");


  return(
  <>
    
    
      <Person
        name="JEff Bezos"
        url = "https://www.infomoney.com.br/wp-content/uploads/2019/06/jeff-bezos-1.jpg?fit=900%2C600&quality=50&strip=all"
        roles = {["CEO AMAZON", "CEO Blue Origin"]}    
      />

      <Person
        name="  "
      
        roles = {["CEO Krill", "CEO Jam"]}    
      />

      <Card>
        <>
          <h1 className="text-3xl font-bold italic text-center">Outro TESTE qualquer</h1>
          <p className='text-right text-sm'>Testando children ReactNode</p>
          <Circle/>
        </>
              
      </Card>
     
        <Cond frase="TEXTO do AUTOR"
            //autor='Korvo'
    
        />    
        
       
      <ul>
      {peopleList.map(person =>
        <li key={person.id}>{person.nome} - {person.profissao}</li>)}
      </ul>

        <hr className='mb-5' />

        {motoca.length > 0 &&
          <>
           <ul>
            {motoca.map(person => 
              <li className='pb-5' key = {person.id}>{person.nome} - {person.profissao}</li>)}
           </ul>
          </>
        
        }



  </>

)
};

export default Page;