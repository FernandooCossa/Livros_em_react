import logo from './logo.svg';
import './App.css';
import MenuSuperior from './components/MenuSuperior';
import InclusaoLivros from './components/InclusaoLivros';
import ManutencaoLivros from './components/ManutencaoLivros';
import ResumoLivros from './components/ResumoLivros'; 
import {Routes, Route} from 'react-router-dom';


const App = () => {
  return ( // tudo que vai no return é o que aparece na aplicação
 <>
 <MenuSuperior/>
 <Routes>
  <Route path="/" element={<InclusaoLivros/>}/>
  <Route path="/manutencao" element={<ManutencaoLivros/>}/>
  <Route path="/resumo" element={<ResumoLivros/>}/>
 </Routes>
 </>
  );
}


// serão criados 3 componentes para essa aplicação
//MenuSuperior.js
//InclusaoLivros.js

export default App;
