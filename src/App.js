import 'flowbite';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Content from './pages/Content';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Content />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
