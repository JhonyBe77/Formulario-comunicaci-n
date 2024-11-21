import { useContext} from 'react';
import { UserContext } from '../../context/UserContext';

function Header() {
  const email  = useContext(UserContext); // email recibe el contexto de app.jsx

  return (
    <div class="header">
      <p>{email}</p>
    </div>
  );
}

export default Header