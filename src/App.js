import logo from './logo.svg';
import './App.css';
import MenuSuperior from './components/MenuSuperior';
import InclusaoLivros from './components/InclusaoLivros';
import ManutencaoLivros from './components/ManutencaoLivros';
import ResumoLivros from './components/ResumoLivros'; 
import InclusaoAutores from './components/InclusaoAutores';
import ManutencaoAutores from './components/ManutencaoAutores';
import InclusaoEditoras from './components/InclusaoEditoras';
import ManutencaoEditoras from './components/ManutencaoEditoras';
import {Routes, Route} from 'react-router-dom';




const App = () => {
  return ( // tudo que vai no return é o que aparece na aplicação
 <>
 <MenuSuperior/>
 <Routes>
  <Route path="/" element={<InclusaoLivros/>}/>
  <Route path="/manutencao" element={<ManutencaoLivros/>}/>
  <Route path="/resumo" element={<ResumoLivros/>}/>
  <Route path="/InclusaoAutores" element={<InclusaoAutores/>}/>
  <Route path="/ManutencaoAutores" element={<ManutencaoAutores/>}/>
  <Route path="/InclusaoEditoras" element={<InclusaoEditoras/>}/>
  <Route path="/ManutencaoEditoras" element={<ManutencaoEditoras/>}/>
 </Routes>
 </>
  );
}


// serão criados 3 componentes para essa aplicação
//MenuSuperior.js
//InclusaoLivros.js

export default App;
