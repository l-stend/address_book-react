import './App.css';
import Navbar from './Navbar';
import SearchForm from './SearchForm';
import AddForm from './AddForm';
import ContactList from './ContactList';
import ContactCard from './ContactCard';
import { useGlobalContext } from './context';

function App() {
  const {showAdd, showSearch} = useGlobalContext();
  return (
    <body className='bg-dark' style={{height: '200vh'}}>
      <main className='container bg-dark'>
        <header className="container text-center text-white" style={{padding: '1em'}}>
          <h2>Address Book React Version</h2>
        </header>
        <Navbar />
        {showSearch && <SearchForm />}
        {showAdd && <AddForm />}
        <ContactList />
      </main>
    </body>
  );
}

export default App;
