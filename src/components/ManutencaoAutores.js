import {useForm} from "react-hook-form";
import { useState, useEffect } from "react";
import { api } from "../config_axios";
import ItemListaAutor from "./ItemListaAutor";  

const ManutencaoAutores = () => {
    const {register, handleSubmit, reset} = useForm();
    const [autores, setAutores] = useState([]);

    const obterLista = async () => {
        try{
            const lista = await api.get("autores");
            setAutores(lista.data);
        }catch(error){
            alert(`Erro: ..Não foi possível obter os dados: ${error}`);
        }
    }


//define o método que será executado assim que o componente for renderizado
useEffect(() => {
    obterLista();
},[]);

const filtrarLista = async (campos) => {
    try{
        const lista = await api.get(`autores/filtro/${campos.palavra}`);
        lista.data.length
        ? setAutores(lista.data)
        : alert("Não há autores cadastrados com a palavra chave pesquisada");
    }catch(error){
        alert(`Erro: ..Não foi possível obter os dados: ${error}`);
    }
    

}

const excluir = async(id,nome) => {
    if(!window.confirm(`Confirma a exclusão do autor ${nome}?`)){
        return;
    }
    try{
        await api.delete(`autores/${id}`);
        setAutores(autores.filter(autor => autor.id !== id));
        
    }catch(error){
        alert(`Erro: ..Não foi possível excluir o autor ${nome}: ${error}`);
    }
}

//alterar os registros
const alterar = async (id,nome,index) => {
    const novoTelefone = Number(prompt(`Digite o novo telefone do autor ${nome}`));
    if (isNaN(novoTelefone) || novoTelefone <= 0) {
        alert('Digite um número e diferente de 0!')
        return;
    }
    try{//captura os erros 
        //chamando o backend e passando os dados
        await api.put(`autores/${id}`,{telefone: novoTelefone});
        const autoresAtualizados = [...autores];
        const indiceAutor = autoresAtualizados.findIndex(autor => autor.id === id);
        autoresAtualizados[indiceAutor].telefone = novoTelefone;
        setAutores(autoresAtualizados);
        obterLista();
    }catch(error){
        alert(`Erro: ..Não foi possível alterar o autor ${nome}: ${error}`);
    }
}
    return (
       <div className="container">
        <div className="row">
            <div className="col-sm-7">
                <h4 className="fst-italic mt-3">Manutenção Autores</h4>
            </div>
            <div className="col-sm-5">
                <form onSubmit={handleSubmit(filtrarLista)}>
                    <div className="input-group mt-3">
                        <input type="text" className="form-control" placeholder="Autor" required {...register("palavra")} />
                        <input type="submit" className="btn btn-primary" value="Pesquisar" />
                        <input type="button" className="btn btn-danger" value="Todos" onClick={()=>{reset({palavra:""});obterLista();}}/>
                    </div>
                </form>
            </div>
        </div>

        <table className="table table-striped mt-3">
            <thead>
                <tr>
                    <th>Cód.</th>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                    <th>Idade</th>
                    <th>Data de nascimento</th>
                    <th>Sexo</th>
                    <th>Telefone</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {autores.map((autor) => (
                    <ItemListaAutor
                        key={autor.id}
                        id={autor.id}
                        nome={autor.nome}
                        sobrenome={autor.sobrenome}
                        idade={autor.idade}
                        data_nascimento={autor.data_nascimento}
                        sexo={autor.sexo}
                        telefone={autor.telefone}
                        excluirClick={()=>excluir(autor.id,autor.nome)}
                        alterarClick={()=>alterar(autor.id,autor.nome)}
                    />
                ))}
            </tbody>
        </table>

       </div> 
    );
};

export default ManutencaoAutores;