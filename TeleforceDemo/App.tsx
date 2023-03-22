import React from 'react';
import {Provider} from 'react-redux';

import {store} from './src/global/store';
import RootNav from './src/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <RootNav />
    </Provider>
  );
};

export default App;
