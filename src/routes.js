import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

/* Importar componentes das páginas */
import Dashboard from './pages/dashboard'
import PokemonDetails from './pages/pokemon-details'

export default function Routes(){
    return (
        <BrowserRouter>
            <Route exact={true} path="/" component={Dashboard} />
            <Route path="/details/:id" component={PokemonDetails} / >
        </BrowserRouter>
    )
}