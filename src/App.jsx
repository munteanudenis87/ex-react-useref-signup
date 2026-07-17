import { useMemo, useState, useRef } from "react"

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [descrizione, setDescrizione] = useState('');

  const nomeRef = useRef();
  const specializzazioneRef = useRef();
  const esperienzaRef = useRef();

  const isUsernameValid = useMemo(() => {
    const chars = username.split("").every(char => letters.includes(char.toLowerCase()) || numbers.includes(char));
    return chars && username.length >= 6;
  }, [username]);

  const isPasswordValid = useMemo(() => {
    return (
      password.length >= 8 &&
      password.split("").some(char => letters.includes(char)) &&
      password.split("").some(char => numbers.includes(char)) &&
      password.split("").some(char => symbols.includes(char))
    );
  }, [password])

  const isDescrizioneValid = useMemo (() => {
    return (
      descrizione.trim().length >= 100 &&
      descrizione.trim().length < 1000
    );
  }, [descrizione])

  const handleSubmit = event => {
    event.preventDefault();

    //  Valori non controllati
    const nome = nomeRef.current.value;
    const specializzazione = specializzazioneRef.current.value;
    const esperienza = esperienzaRef.current.value;

    if(
      !nome.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specializzazione.trim() ||
      !esperienza.trim() ||
      esperienza <= 0 ||
      !descrizione ||
      !isDescrizioneValid ||
      !isPasswordValid ||
      !isUsernameValid
    ){
      alert("Errore: Compilare tutti i campi.");
      return;
    }
    console.log({nome, username, password, specializzazione, esperienza, descrizione})
  }

  return (
    <>
      <h1>Web Developer Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Nome Completo</p>
          <input
            type="text"
            ref={nomeRef}
          />
        </label>
        <label>
          <p>Username</p>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          {username.trim() && (
            <p style={{ color: isUsernameValid ? 'green' : 'red'}}>{isUsernameValid ? "Username valido" : "Deve contenere almeno 6 caractteri"}</p>
          )}
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {password.trim() && (
            <p style={{ color: isPasswordValid ? 'green' : 'red'}}>{isPasswordValid ? "Username valido" : "Deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo"}</p>
          )}
        </label>
        <label>
          <p>Specializzazione</p>
          <select
            ref={specializzazioneRef}
          >
            <option value="">Seleziona Specializzazione</option>
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </label>
        <label>
          <p>Anni di esperienza</p>
          <input
            type="number"
            ref={esperienzaRef}
          />
        </label>
        <label>
          <p>Descrizione</p>
          <textarea
            value={descrizione}
            onChange={event => setDescrizione(event.target.value)}
          />
          {descrizione.trim() && (
            <p style={{ color: isDescrizioneValid ? 'green' : 'red'}}>{isDescrizioneValid ? "Username valido" : `Deve contenere tra 100 e 1000 caratteri (${descrizione.trim().length})`}</p>
          )}
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

//   Milestone 2: Validare in tempo reale
//  Aggiungere la validazione in tempo reale dei seguenti campi:

//  ✅ Username: Deve contenere solo caratteri alfanumerici e almeno 6 caratteri (no spazi o simboli).

//  ✅ Password: Deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo.

//  ✅ Descrizione: Deve contenere tra 100 e 1000 caratteri (senza spazi iniziali e finali).

//  Suggerimento: Per semplificare la validazione, puoi definire tre stringhe con i caratteri validi e usare .includes() 
// per controllare se i caratteri appartengono a una di queste categorie:


//  Per ciascuno dei campi validati in tempo reale, mostrare un messaggio di errore (rosso) nel caso non siano validi, 
// oppure un messaggio di conferma (verde) nel caso siano validi.

//  Milestone 3: Convertire i Campi Non Controllati
//  Non tutti i campi del form necessitano di essere aggiornati a ogni carattere digitato. 
// Alcuni di essi non influenzano direttamente l’interfaccia mentre l’utente li compila, quindi è possibile gestirli in modo più efficiente.

//  Analizza il form: Identifica quali campi devono rimanere controllati e quali invece possono essere non controllati senza impattare l’esperienza utente.
//  Converti i campi non controllati: Usa useRef() per gestirli e recuperare il loro valore solo al momento del submit.
//  Assicurati che la validazione continui a funzionare: Anche se un campo non è controllato, 
// deve comunque essere validato correttamente quando l’utente invia il form.