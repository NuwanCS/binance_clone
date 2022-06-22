
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Markets from './components/Markets';
import styled from 'styled-components';

const Container = styled.div`
 background-color: red;
`
function App() {
  return (
    <Container>

        <Routes>
          
          <Route exact path='/'  element={<Home/>} >
              
          </Route>
          <Route exact path='/markets' element={<Markets/>}></Route>
        </Routes>
      
    </Container>
  );
}

export default App;
