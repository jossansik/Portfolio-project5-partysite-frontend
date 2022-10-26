import React, { useState } from 'react'
import { axiosReq } from '../../api/axiosDefaults'
import { useNavigate } from 'react-router'

import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import styles from '../../styles/SignInUpForm.module.css'
import appStyles from '../../App.module.css'

import { useSetCurrentUser } from '../../contexts/CurrentUserContext'
import { setTokenTimestamp } from '../../utils/utils'

function SignInForm() {
  const setCurrentUser = useSetCurrentUser()
  const navigate = useNavigate()
  const [signInData, setSignInData] = useState({
    username: '',
    password: '',
  })
  const { username, password } = signInData

  const [errors, setErrors] = useState({})

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const { data } = await axiosReq.post(
        '/dj-rest-auth/login/',
        signInData,
      )
      setCurrentUser(data.user)
      setTokenTimestamp(data)
      navigate(-1)
    } catch (err) {
      setErrors(err.response?.data)
    }
  }

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <>
      <Col className="m-auto p-0 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>Sign in</h1>
          <Form onSubmit={handleSubmit}>
            <div className="mb-3">
              <Form.Group controlId="username">
                <Form.Label className="d-none">Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  name="username"
                  className={styles.Input}
                  value={username}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.username?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}
            </div>
            <div className="mb-3">
              <Form.Group controlId="password">
                <Form.Label className="d-none">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  className={styles.Input}
                  value={password}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            {errors.password?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Button type="submit">Sign in</Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Container>
      </Col>
    </>
  )
}

export default SignInForm
