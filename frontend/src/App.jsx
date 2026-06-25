import './assets/css/App.css'
import { Routes, Route } from 'react-router';

/**
 * Importiamo Header e Footer
 */
import Header from './components/Header';
import Footer from './components/Footer';

/**
 * Importiamo le pagine singole
 */
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';

import NotFoundPage from './pages/NotFoundPage';

/**
 * Componente principale APP.
 * 
 * Cosa fa?
 * Dovrà definire le rotte e per ogni rotta ritornare la pagina.
 */
function App() {

  // Qui ritorno il JSX
  return (
    <>
      <Header />

      <Routes>

        {/** Home page */}
        <Route index element={ <HomePage /> } />

        {/** Altre pagine */}
        <Route path="/chi-siamo" element={ <AboutUsPage /> } />
        <Route path="/contattaci" element={ <ContactUsPage /> } />

        {/** Definiamo la pagina 404 - not found */}
        <Route path="*" element={ <NotFoundPage /> } />
      </Routes>

      <Footer />
    </>
  )
}

export default App
