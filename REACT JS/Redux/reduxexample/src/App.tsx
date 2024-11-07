//npx create-react-app reduxexample --template typescript
//npm install redux react-redux @reduxjs/toolkit
//npm install -D @types/react-redux

//Recomendado Uma STORE por aplicação(Onde armazena as informações)


import './App.css';
/*import { useSelector } from 'react-redux'; <<<<
import { RootState } from './redux/store';   <<<<<substituido pelo hook TypeUseSelectorhook
*/
import { useAppSelector } from './redux/hooks/userAppSelector';
import { useDispatch } from 'react-redux';
import { setName, setAge } from './redux/reducers/userReducer';


function App() {

  const dispatch = useDispatch();

 // const user = useSelector((state: RootState) => state.user)
 const user = useAppSelector(state => state.user)

 const changeName = (newName : String) =>  dispatch(setName(newName));
 
 const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>)=>{
  changeName(e.target.value)
 }

 const handleAgeInput = (e: React.ChangeEvent<HTMLInputElement>)=>{ 

  dispatch(setAge(parseInt(e.target.value))) 
 }

  return (
    <div className='App'>
      <div className='container'>
        <p>Meu nome é : {user.name} e tenho {user.age} anos. </p>
        <p>Tema: ...    </p>
        
        <input type="text" value={user.name} onChange={handleNameInput}/> 
        <input type="number" value={user.age} onChange={handleAgeInput}/>         
        <button>Theme</button>
      </div>

    </div>
  );
}

export default App;