import './App.css'
import Header from './Header'
import SectionOne from './SectionOne'
import SectionThree from './SectionThree'
import SectionTwo from './SectionTwo'

/**
 * Componente principale APP.
 * 
 * Cosa fa?
 * Raccoglie tutti i sotto-componenti della
 * pagina organizzandoli e dando ordine.
 */
function App() {

  // Qui ritorno il JSX
  return (
    <>
      <Header />

      <main>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </main>
    </>
  )
}

export default App
