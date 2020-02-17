import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { art } from './reducers';
import ArtSearch from './containers/ArtSearchContainer';

const store = createStore(art);
store.subscribe( () => {
    console.table(store.getState());
})




export default function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <ArtSearch />
    </div>
    </Provider>
  );
}
