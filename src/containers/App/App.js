import React from 'react';
import './App.css';
import UrlContainer from '../../components/UrlContainer/UrlContainer';
import UrlForm from '../../components/UrlForm/UrlForm';

export const App = () => {
  return (
    <main className="App">
      <header>
        <h1>URL Shortener</h1>
        <UrlForm />
      </header>
      <UrlContainer />
    </main>
  )
}

export default App;
