import { Link } from 'react-router-dom';

// styles
import './NavBar.css';

// components
import Searchbar from './Searchbar';

export default function NavBar() {
   return (
      <div className="navbar">
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
