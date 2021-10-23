
import './App.css';
// import Nav from './components/Nav';
import Project from './components/Project';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from './components/Resume';
import About from './components/About';
import {useState} from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  document.title = currentPage;

  function changePage(){
  
     switch(currentPage){
       case "home": 
       return <About/>

       case "portfolio":
       return   <Project />
      
       case "contact":
         return <Contact/>

      case "resume":
          return <Resume/>
      default:
          return
         
     }
  }
  return (
    <div className="App">
      <Header currentPage = {currentPage} setCurrentPage = {setCurrentPage}> 
      <h1> {currentPage}</h1> </Header>
      {console.log(currentPage)}
      <main className="main-back">
        {changePage()}
  
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
