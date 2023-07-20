import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from "/src/App";
import { Avatar } from '/src/Avatar';


const root = ReactDOM.createRoot(document.getElementById('root')) 
 

root.render(
<section className='App'>

  <App    userName= 'omidnikrah'>
     Cristopher Lopez
     </App>
  <App   userName= 'pheralb'>
        Pablo Hernandez
  </App>

  <Avatar/>
  

</section>
  )


