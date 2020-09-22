import React from 'react';
import { GlobalProvider } from './store'
import Router from './Router';

import 'font-awesome/css/font-awesome.min.css';

const App = () => {
  return (
    <GlobalProvider>
      <Router />
    </GlobalProvider>
  );
}
export default App;
