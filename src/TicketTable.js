import React, {Component} from 'react'
import TicketRow from './TicketRow'
import {Table,Input} from 'reactstrap'
import axios from 'axios'
class  TicketTable extends  Component{
    constructor(){
        super()
        this.state = {
            tickets : [],
            filterTickets : []
           
        }
      }
         componentDidMount(){
          axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=671a7695f19b162f')
          .then((response)=>{
            const tickets = response.data
            this.setState(()=>{
              return( {
                tickets,
                filterTickets : tickets
              })
            })
          })
        }
        handleChange =(e)=>{
          
        }
    
render(){

  return (
        <div>
          <Input type="text" placeholder="searchbycode"onChange={this.handleChange}/>
          <h2>Listing tickets -{this.state.tickets.length}</h2>
<Table bordered size="sm">
<thead>
    
        <tr>
            <th>code</th>
            <th>name</th>
            <th>department</th>
            <th>priority</th>
            <th>message</th>
            <th>status</th>
            </tr>
     
</thead>
<tbody>
    {this.state.tickets.map(function(ticket){
        return (
            <TicketRow key={ticket.ticket_code}
            ticket_code={ticket.ticket_code}
            name={ticket.name}
            department ={ticket.department}
            message={ticket.message}
            priority={ticket.priority}
            status ={ticket.status}
            />
        )
    })}
    </tbody>    
</Table>  
</div> 
    )
}
}
export default TicketTable