import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

// styles
import './NavBar.css';

// components
import Searchbar from './Searchbar';

export default function NavBar() {
   const { color } = useContext(ThemeContext);

   return (
      <div className="navbar" style={{ background: color }}>
         <nav>
            <Link className="brand" to="/">
               <h1>Nimble Cook</h1>
            </Link>
            <Searchbar />
            <Link to="/create">Create Recipe</Link>
         </nav>
      </div>
   );
}
