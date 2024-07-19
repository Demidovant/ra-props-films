import './App.css'
import React from 'react';
import Stars from './components/Stars/stars';

const App: React.FC = () => (
  <div>
    <h1>Рейтинг фильма</h1>
    <Stars count={0} />
    <Stars count={1} />
    <Stars count={2} />
    <Stars count={3} />
    <Stars count={4} />
    <Stars count={5} />
    <Stars count={6} />
    <Stars count={7} />
  </div>
);

export default App;
