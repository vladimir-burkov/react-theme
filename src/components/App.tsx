import { Link, useNavigate } from 'react-router-dom';
import styles from'./App.module.scss';

function App() {
  const navigate = useNavigate();

  const goToChild = () => {
    navigate('child')
  }


  return (
    <div className={styles.app}>
      heelloo
      <Link to="/child">Contact</Link>
      <button onClick={goToChild}>Contact</button>
    </div>
  );
}

export default App;
