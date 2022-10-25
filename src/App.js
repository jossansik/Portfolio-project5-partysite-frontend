import styles from './App.module.css'
import NavBar from './components/NavBar'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import SignInForm from './pages/auth/SignInForm'
import SignUpForm from './pages/auth/SignUpForm'
import CategoryPage from './pages/categories/CategoryPage'
import PostPage from './pages/posts/PostPage'
import PostCreateForm from './pages/posts/PostCreateForm'
import ProfilePage from './pages/profiles/ProfilePage'

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Row className='app-container'>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/signin" element={<SignInForm />} />
            <Route exact path="/signup" element={<SignUpForm />} />
            <Route
              exact
              path="/categories/:id"
              element={<CategoryPage />}
            />
            <Route exact path="/posts/:id" element={<PostPage />} />
            <Route
              exact
              path="/posts/create/:id"
              element={<PostCreateForm />}
            />
            <Route exact path="/profiles" element={<ProfilePage />} />
            <Route element={<p>Page not found!</p>} />
          </Routes>
        </Row>
      </Container>
    </div>
  )
}

export default App
