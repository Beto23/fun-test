import React, { useRef, useState } from 'react'
import forge from 'node-forge'
import { GlobalStyle } from './styles/GlobalStyles'
var keypair = require('keypair')

export const App = () => {
  const passwordRef = useRef(null)
  const newPassword = useRef(null)
  const privateKeyRef = useRef(null)
  const [newPrivateKey, setNewPrivateKey] = useState(null)

  function handleSubmit (e) {
    e.preventDefault()
    const password = passwordRef.current.value
    const elPrivateKey = privateKeyRef.current.value
    const newPass = newPassword.current.value

    const currentPrivateKey = forge.pki.decryptRsaPrivateKey(elPrivateKey, password)
    console.log('currentPrivateKey', currentPrivateKey)
    if (currentPrivateKey === null) {
      alert('datos incorrectos')
      return
    }

    if (newPassword.current.value === '') {
      alert('Introduce nueva contraseña')
      return
    } 

    var pair = keypair()
    var privateKey = forge.pki.privateKeyFromPem(pair.private)
    var pem = forge.pki.encryptRsaPrivateKey(privateKey, newPass)
    setNewPrivateKey(pem)
    newPassword.current.value = ''
  }

  function getKeyComponent () {
    return (
      <div className='container-result' >
        <h2>Nueva clave privada</h2>
        <p>{newPrivateKey}</p>
        <div className='button-copy' onClick={() => copyKey(newPrivateKey)}>copy key</div>
        <div className='button' onClick={() => setNewPrivateKey(null)}>Volver</div>
      </div>
    )
  }

  function copyKey (str) {
    const el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }

  return (
    <div>
      <GlobalStyle />
      {/* <h1>Mifiel test</h1> */}
      {newPrivateKey ? getKeyComponent() : <form className='form-container' onSubmit={(e) => handleSubmit(e)}>
        <div className='form-input'>
          <label htmlFor=''>Clave Privada</label>
          {/* <input ref={privateKey} type='file' accept='.key' onChange={e => handleOnchange(e.target.files[0])} /> */}
          <input ref={privateKeyRef} type='textarea'/>
        </div>

        <div className='form-input'>
          <label htmlFor=''>Contraseña</label>
          <input ref={passwordRef} type='text' />
        </div>

        <div className='form-input'>
          <label htmlFor=''>Nueva contraseña</label>
          <input ref={newPassword} type='text' />
        </div>

        <input type='submit' />
      </form>
      }
    </div>
  )
}
