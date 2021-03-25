import { useEffect } from "react"
import { api } from "../../services/api"
import { Container } from "./styles"

export const TransactionsTable = () => {
    useEffect(() =>{
        api.get('/transactions')
        .then(data => console.log(data.data))
    },[])

    return(
     <Container>
         <table>
             <thead>
                 <tr>
                     <th>Titulo</th>
                     <th>Valor</th>
                     <th>Categoria</th>
                     <th>Data</th>
                 </tr>
             </thead>

             <tbody>
                 <tr>
                     <td >
                         Desenvolvimeto de Website
                     </td>
                     <td>R$15.000</td>
                     <td>Desenvolvimento</td>
                     <td>12/02/2002</td>
                 </tr>
                 <tr>
                     <td >
                         Desenvolvimeto de Website
                     </td>
                     <td className='deposit'>R$15.000</td>
                     <td>Desenvolvimento</td>
                     <td>12/02/2002</td>
                 </tr>
                 <tr>
                     <td >
                         Aluguel
                     </td>
                     <td className='withdraw'> - R$1.180</td>
                     <td>Casa</td>
                     <td>12/02/2002</td>
                 </tr>
             </tbody>
         </table>

     </Container>   

    )

}