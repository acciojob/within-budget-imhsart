
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [bugdet, setBudget] = useState('')
  return (
    <div>
        <h2>Enter your bugdet to check available items:</h2>
        <input type="number" value={bugdet} onChange={e => setBudget(e.target.value)} />
        <h2>Items you can buy are in Green color</h2>
        <table>
          <thead></thead>
          <tbody>
            <tr><td>Apple</td><td style={{color: bugdet >= 20 ? 'green' : 'red'}}>20</td></tr>
            <tr><td>Banana</td><td style={{color: bugdet >= 10 ? 'green' : 'red'}}>10</td></tr>
            <tr><td>Nutella</td><td style={{color: bugdet >= 30 ? 'green' : 'red'}}>30</td></tr>
            <tr><td>Razor</td><td style={{color: bugdet >= 5 ? 'green' : 'red'}}>5</td></tr>
            <tr><td>CornFlakes</td><td style={{color: bugdet >= 15 ? 'green' : 'red'}}>15</td></tr>
            <tr><td>SoundBar</td><td style={{color: bugdet >= 50 ? 'green' : 'red'}}>50</td></tr>
            <tr><td>Iphone</td><td style={{color: bugdet >= 80 ? 'green' : 'red'}}>80</td></tr>
          </tbody>
        </table>
    </div>
  )
}

export default App
