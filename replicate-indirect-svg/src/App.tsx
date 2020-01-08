import React from 'react'
import {ReactComponent as LogoSvg} from './logo.svg'
import './App.css'

export const Logo = () =>
    <LogoSvg className="App-logo"/>

export const App = () =>
    <div className="App">
        <header className="App-header">
            <Logo/>
            <p>
                Logo is imported like this:
            </p>
            <p>
                <code>import {'{'}ReactComponent as LogoSvg} from './logo.svg';</code>
            </p>
            <p>
                See issue at <a className="App-link" href="tbd">TBD</a>
            </p>
        </header>
    </div>
