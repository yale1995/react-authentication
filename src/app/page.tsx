'use client'
import { FormEvent, useState, useContext } from 'react'
import {AuthContext} from '../contexts/AuthContext'
import styles from './home.module.css'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {signIn, isAuthenticated} = useContext(AuthContext)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const data = {
      email,
      password,
    }
    await signIn(data)
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.container}>
        <input type='email' value={email} onChange={(event) => setEmail(event.target.value)} />
        <input type='password' value={password} onChange={(event) => setPassword(event.target.value)} />
        <button type='submit'>Entrar</button>
      </form>
    </div>
  )
}
