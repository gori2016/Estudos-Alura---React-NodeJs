import './App.css'
import Header from './componentes/Header'
import styled from 'styled-components'
import Search from './componentes/Search/Search'
import UltimosLancamentos from './componentes/ultimosLancamentos/UltimosLancamentos'

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(90deg, #002F52 35%, #326589);
  margin:0;
  padding: 0;

`

function App() {
  return (
    <AppContainer>
      <Header />
      <Search/>
      <UltimosLancamentos/>
    </AppContainer>
    
  )
}

export default App
