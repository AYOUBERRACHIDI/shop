import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    
  };
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      
      <Router>
        <Header toggleTheme={toggleTheme} onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<ProductList searchTerm={searchTerm} />} />
          <Route path="/product/:id" element={<ProductDetails />} /> {/* Route de la page de détails */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;




// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Inscription from './components/Inscription';
// import Home from './components/Home';


// import './App.css';



// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Inscription />}/>
//         <Route path="/home" element={<Home />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React from 'react';
// import Compteur from './components/Compteur';
// import './App.css';

// const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Bienvenue dans notre boutique</h1>
//       </header>
//       <main>
//         <Compteur />
//       </main>
//       <footer className="App-footer">
//         <p>© 2024 Votre Boutique. Tous droits réservés.</p>
//       </footer>
//     </div>
//   );
// };

// export default App;

//   import React from 'react';
//   import './App.css';
// import Inscription from './components/Inscription';

//   const App = () => {
//     return (
//       <Inscription/>
//     );
//   };

//   export default App;