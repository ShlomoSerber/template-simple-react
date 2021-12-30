import CharacterCards from './components/CharacterCards';
import Footer from './components/Footer';
import Homersapien from './components/Homersapien';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Contacto from './components/Contacto';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/contacto">
          <Contacto />
        </Route>
        <Route path="/">
          <Homersapien />
          <CharacterCards />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;