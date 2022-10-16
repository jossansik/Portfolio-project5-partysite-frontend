import styles from './App.module.css'
import NavBar from './components/NavBar'
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import SignInForm from "./pages/auth/SignInForm";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/signin" element={<SignInForm />} />
          <Route element={<p>Page not found!</p>} />
        </Routes>
      </Container>
    </div>
  )
}

export default App
