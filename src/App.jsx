import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdministratorPage from './AdministratorPage'
import AdministratorForm from './AdministratorForm'

function App() {

    return (
        <>
            <AdministratorPage/>
            <AdministratorForm/>
        </>
    )
}

export default App
