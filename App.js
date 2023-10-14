
import './Appa.css';
import {useState} from 'react';
import Form from './components/Form';
// import Example from './components/Example';
// import Navbar from './components/Navbar';
// import DarkMode from './components/DarkMode';
// // import {
//    BrowserRouter as Router,
   
//    Route,
//    Link,
//    Routes
//  } from "react-router-dom";





   

function App() { 


   const handlecolor=()=>{
      if(color==='success'){
        setcolor('danger');
        document.body.style.backgroundColor='red';
      }else{
        setcolor('success');
        document.body.style.backgroundColor='white';
      }
   }

      const handlebluecolor=()=>{
         if(color==='success'){
          setcolor('primary');
          document.body.style.backgroundColor="blue"
         }else{
          setcolor('success');
          document.body.style.backgroundColor="white"
         }
      }

     const handlegreencolor=()=>{
         if(color==='success'){
          setcolor('success');
          document.body.style.backgroundColor="green"
         }else{
          setcolor('success');
          document.body.style.backgroundColor="white"
         }
      }


      const handleorangecolor=()=>{
        if(color==='success'){
         setcolor('warning');
         document.body.style.backgroundColor="orange"
        }else{
         setcolor('success');
         document.body.style.backgroundColor="white"
        }
     }


  const[color,setcolor]=useState('success');
  


    
  return (
   <>
    {/* <Router>
      <div>
     <Navbar/>


    

       <Routes>

        <Route  path="/home" element={<Example handlecolor={handlecolor}/>}/>
        <Route  path="/About" element={<DarkMode/>}/>

       </Routes>
       </div>
       </Router> */}

       <Form></Form>


     
   </>
  );
}

export default App;
