// import React from "react";



// type NewComponentPropsType = {
//     cars: Cars[]
// }


// type Cars = {
//     manufacturer: string,
//     model: string

// }

// export const NewComponent = (props: NewComponentPropsType) => {
//     return (
//         <ul>
//             {props.cars.map((CarsArray, index) => {
//                 return (
//                     <li key={index}>
//                         <span>{CarsArray.manufacturer}</span>
//                         <span> :{CarsArray.model}</span>
//                     </li>
//                 )
//             })}
//         </ul>
//     );
// };



// import React, {useState} from 'react';
// import { NewComponent } from './Cars';



// export function App1 () {

//     let [cars, setCars] = useState([
//         {manufacturer:'BMW', model:'m5cs'},
//         {manufacturer:'Mercedes', model:'e63s'},
//         {manufacturer:'Audi', model:'rs6'},
//       ]
//     );
    

    
//     return (
//         <NewComponent cars={cars}/>
//         // <div>1</div>
//     );
// }

