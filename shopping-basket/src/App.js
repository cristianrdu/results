import React from 'react';
import './App.css';
import Basket from './components/basket/basket.component';
import CollectionGallery from './components/collection-gallery/collection-gallery.component';
function App() {
  return (
    <div className="App">
      <CollectionGallery/>
      <Basket/>
    </div>
  );
}

export default App;
