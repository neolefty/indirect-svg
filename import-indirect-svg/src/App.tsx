import React from 'react'

// base problem of reusing imported SVG ReactComponent
import { Logo } from 'replicate-indirect-svg/lib/App'

// attempt to workaround, recommended here: https://github.com/facebook/create-react-app/issues/5276
import {ReactComponent as SvgLogo} from 'replicate-indirect-svg/lib/logo.svg'

import LogoSvg from 'replicate-indirect-svg/lib/LogoSvg'
import './App.css'

const App = () =>
    <div className="App">
        <header className="App-header">

            <p>Attempt to import a ReactComponent SVG exported by another project:</p>
            <Logo/>

            <p>Workaround using a default export, <a href="https://github.com/facebook/create-react-app/issues/5276">suggested here</a>:</p>
            <LogoSvg/>

            <p>Both attempts fail with the same error (delete them one a time to verify).</p>
            <hr/>

            <p>This one works fine though:</p>
            <SvgLogo/>
        </header>
    </div>

export default App
