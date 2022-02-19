import './App.css';
import Navbar from './Navbar';
import ContactList from './ContactList';
import ContactCard from './ContactCard';

function App() {
  return (
    <main>
      <header className="header">
        <h2>Address Book Blanalala Version</h2>
      </header>
      <Navbar />
      <ContactList />
    </main>
  );
}

export default App;
