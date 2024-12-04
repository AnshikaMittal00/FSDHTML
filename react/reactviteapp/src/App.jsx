import React from 'react'
import Student from './Student'

function App() {
  return (
    <div>
      <div>
       <h2 style={{color:'red'}}>hello</h2>
       <div>
        <Student image={<img src="https://cdn.dummyjson.com/recipe-images/1.webp" height={200} />} name="Anshika Mittal" roll="2222" college="ABES"/>
       </div>     
        </div>

    </div>
  )
}

export default App