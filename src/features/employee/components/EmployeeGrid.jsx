import React, {Component} from 'react';
import EmployeeCard from "./EmployeeCard";
import axios from 'axios';


class EmployeeGrid extends Component {
constructor(props){

    super(props);

    this.state = {
        employee: []
    }
}

// componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/todos/1', {method: 'GET'})
//     .then(response => response.json())
//     .then(value => {
//         this.setState({
//             data: value,
//         })

//     });
// }

componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(resp =>  {
     this.setState({
         employee: resp.data
     })
    })
        

}
    render() {

        return (  <div>hello my friend</div>  )
      
//        const  { employee } =  this.state;
//         return (
//             <div  className="jumbotron">   
//               <h1>Empleados</h1>   
//               <div>       
//                     { employee.map(u => 
//                     <EmployeeCard 
//                         key={u.id}
//                         title={u.title}
                      
//                     /> 
//                 )}

// </div>   
//             </div>
//         )
    
} 
}

export {
    EmployeeGrid
  }
