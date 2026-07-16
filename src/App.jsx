import { useState } from "react"

function App() {

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [specializzazione, setSpecializzazione] = useState('');
  const [esperienza, setEsperienza] = useState('');
  const [descrizione, setDescrizione] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if(
      !name.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specializzazione.trim() ||
      !esperienza.trim() ||
      esperienza <= 0 ||
      !descrizione
    ){
      alert("Errore: Compilare tutti i campi.");
      return;
    }
    console.log({name, username, password, specializzazione, esperienza, descrizione})
  }

  return (
    <>
      <h1>Web Developer Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Nome Completo</p>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          <p>Username</p>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <label>
          <p>Specializzazione</p>
          <select
            value={specializzazione}
            onChange={event => setSpecializzazione(event.target.value)}
          >
            <option value="Specializzazione">Seleziona Specializzazione</option>
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </label>
        <label>
          <p>Anni di esperienza</p>
          <input
            type="number"
            value={esperienza}
            onChange={(event) => setEsperienza(event.target.value)}
          />
        </label>
        <label>
          <p>Descrizione</p>
          <textarea
            value={descrizione}
            onChange={event => setDescrizione(event.target.value)}
          />
        </label>
      <button type="submit">Registrati</button>
      </form>
    </>
  )
}

export default App


//  Milestone 1: Creare un Form con Campi Controllati
//  Crea un form di registrazione con i seguenti campi controllati (gestiti con useState):

//  ✅ Nome completo (input di testo)

//  ✅ Username (input di testo)

//  ✅ Password (input di tipo password)

//  ✅ Specializzazione (select con opzioni: "Full Stack", "Frontend", "Backend")

//  ✅ Anni di esperienza (input di tipo number)

//  ✅ Breve descrizione sullo sviluppatore (textarea)

//  Aggiungi una validazione al submit, verificando che:

//  Tutti i campi siano compilati
//  L'input Anni di esperienza sia un numero positivo
//  La Specializzazione sia selezionata

//  Al submit, se il form è valido, stampa in console i dati.