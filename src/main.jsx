import React from 'react'
import ReactDOM from 'react-dom/client'
//import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
//import { Home } from './pages/home'
import { Routes } from './routes'

//import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <GlobalStyle />
      <Routes />
  </React.StrictMode>,
)
