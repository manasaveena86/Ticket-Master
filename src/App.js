import React, { Component } from 'react';
// import axios from 'axios'
 import TicketTable from './TicketTable'
 import TicketForm from './TicketForm'

import {BrowserRouter,Link,Route} from 'react-router-dom'
import Home from './Home'

class App extends Component {
      
  render() {
    return (
        <div className="container">
        <div className="row">
        <div className="col-md-8">
              <h2>Ticket Master</h2>
              <TicketTable/>
        </div>
        <div className="col-md-4">
            <TicketForm/>
        </div>

        </div>
        </div>
       
       )
    }
  }
  export default App