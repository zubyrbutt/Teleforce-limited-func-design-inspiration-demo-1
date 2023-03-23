import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import { store } from './src/global/store';
import RootNav from './src/navigation';
import { requestUserPermission } from './src/utils/_firebase';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    return () => {};
  }, []);

  return (
    <Provider store={store}>
      <RootNav />
    </Provider>
  );
};

export default App;
