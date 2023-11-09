import {Square} from './Square';
import { Circle } from './Circle';


export const GeoForm = () => {
    return(
        <div>
            <h1 className='justify-center flex'>Formas Geométricas</h1>
        <div  className='flex gap-2 border-2 p-3'>
            <Square/>
            <Circle/>
        </div>
        </div>

    )
}