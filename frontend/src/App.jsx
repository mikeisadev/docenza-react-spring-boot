import './App.css'
import { Routes, Route } from 'react-router';

/**
 * Importiamo le pagine singole
 */
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';

/**
 * Componente principale APP.
 * 
 * Cosa fa?
 * Dovrà definire le rotte e per ogni rotta ritornare la pagina.
 */
function App() {

  // Qui ritorno il JSX
  return (
    <Routes>

      {/** Home page */}
      <Route index element={ <HomePage /> } />

      {/** Altre pagine */}
      <Route path="/chi-siamo" element={ <AboutUsPage /> } />
      <Route path="/contattaci" element={ <ContactUsPage /> } />

    </Routes>
  )
}

export default App
