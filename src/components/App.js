
import './App.css';

import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from './StartScreen';
import Questions from "./Questions";
import NextButton from './NextButton';
import Progress from './Progress';
import Finished from './Finished';
import Footer from './Footer';
import Timer from './Timer';
import { useQuiz } from './context/ContextProvider';





function App() {


const{status}=useQuiz();



  return (
   

    <div className="App">

     <Header/>

     <Main>
    
     {status==="loading" && <Loader/>}
     {status==="error" && <Error/>}
     {status==="ready" && <StartScreen />}
     {status==="active"&& <>


     <Progress/>




     <Questions/>

    <Footer>

     <Timer/>

     <NextButton/>

   
     </Footer>
     </>
     
     }


     {status==="finished" && <Finished />}
     
     </Main>

      </div>

  
  );
}

export default App;
