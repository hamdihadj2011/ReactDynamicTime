import React  from 'react';
import './App.css';
import Time from './Time.js'
import Btn from './button.js'

const App = () =>  {
  
    return (
      <div>
        <Time ms={2500} />
       <Btn className='start' text='Start'/>
       <Btn className='reset' text='Reset'/>
      </div>
    )
}


export default App;
