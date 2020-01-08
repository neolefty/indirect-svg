import React from 'react'
import { Logo } from 'replicate-indirect-svg/lib/App'
import './App.css'

const App = () =>
    <div className="App">
        <header className="App-header">
            <Logo/>
            <p>Attempt to import a ReactComponent SVG that was exported by another project.</p>
        </header>
    </div>

export default App
