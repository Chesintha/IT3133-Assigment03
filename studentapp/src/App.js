import './App.css';
import { students } from './data/StudentsDb';
import StudentTable from './components/StudentTable';
import { useState } from 'react';

function App() {
  const [fs,setFs]=useState(16);
  return (
    <div className="App" style={{fontSize: `${fs}px`}}>
     <h1 className='header'>Students Information Portal</h1>
     <hr/>
     <div className='buttons'>
      <p>Font Size:</p>
      <button onClick={()=>setFs(16)}>S</button>
      <button onClick={()=>setFs(20)}>M</button>
      <button onClick={()=>setFs(24)}>L</button>
     </div>
     <hr/>
     <table width="100%">
      <tbody>
        <tr>
          <td>
              <StudentTable students={students}/>
          </td>
        </tr>
      </tbody>
     </table>
    </div>
  );
}

export default App;
