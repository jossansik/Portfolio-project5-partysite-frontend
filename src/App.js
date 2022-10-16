import styles from './App.module.css'
import NavBar from './components/NavBar'
import Container from 'react-bootstrap/Container'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route element={<p>Page not found!</p>} />
        </Routes>
      </Container>
    </div>
  )
}

export default App
