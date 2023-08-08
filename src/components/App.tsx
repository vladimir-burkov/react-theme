import React from 'react';
import styles from'./App.module.scss';
import ChildComponent from './childComponent';

console.log(styles);

function App() {
  return (
    <div className={styles.app}>
      heelloo
      <ChildComponent/>
    </div>
  );
}

export default App;
