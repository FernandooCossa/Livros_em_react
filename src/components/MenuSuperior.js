import { Link } from "react-router-dom";


const MenuSuperior = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark sticky-top">
      <div className="container">
        <Link to="/" className="navbar-brand">Controle Pessoal de Livros</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Inclusão</Link>
          </li>
          <li className="nav-item">
            <Link to="/InclusaoAutores" className="nav-link">Inclusão Autores</Link>
          </li>
          <li className="nav-item">
            <Link to="/InclusaoEditoras" className="nav-link">Inclusão Editoras</Link>
          </li>
          <li className="nav-item">
            <Link to="/manutencao" className="nav-link">Manutenção</Link>
          </li>
          <li className="nav-item">
            <Link to="/ManutencaoAutores" className="nav-link">Manutenção Autores</Link>
          </li>
          <li className="nav-item">
            <Link to="/ManutencaoEditoras" className="nav-link">Manutenção Editoras</Link>
          </li>
          <li className="nav-item">
            <Link to="/resumo" className="nav-link">Resumo</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default MenuSuperior;
