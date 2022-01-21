import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

// styles
import './NavBar.css';

// components
import Searchbar from './Searchbar';

export default function NavBar() {
   const { color } = useTheme();

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
