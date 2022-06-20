/* eslint-disable no-unused-vars */
import './App.css';
import './components/css/Contact.css'
import Header from './components/Header'
import Contact from './components/Contact'

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header/>{
        contacts.map((name) => {
          return <Contact data={name}/>
        })
      }
    </div>
  );
}

export default App;
