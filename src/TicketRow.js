import React from 'react'
const TicketRow = (props)=>{
    return(
        <div>
            <tr key='props.ticket_code'>
                <td>{props.ticket_code}</td>
                <td>{props.name}</td>
                <td>{props.department}</td>
                <td>{props.priority}</td>
                <td>{props.message}</td>
                <td><input type="checkbox" defaultChecked={props.status==='completed'}/></td>
            </tr>
        </div>
    )
}
export default TicketRow