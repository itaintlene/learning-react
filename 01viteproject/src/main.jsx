import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />       
{/* here App is the function from 'App.jsx' and react bundler is converting it to an html tag */}
{/* and you can also declare it as a function but thats a bad practice so dont. */}
{/* also you can to use React.createElement() to inject custom functions here only */}
  </StrictMode>,
)
