import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목,b] = useState('하이욤');

  return (
    <div className="App">
      <div class="black-nav">
        <h4> 리액트 개장인 되는법 </h4>
      </div>
      <div className='list'>
        <h4> {글제목} </h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
