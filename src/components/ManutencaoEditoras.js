import {useForm} from "react-hook-form";
import { useState, useEffect } from "react";
import { api } from "../config_axios";
import ItemListaEditoras from "./ItemListaEditoras";  

const ManutencaoEditoras = () => {
    const {register, handleSubmit, reset} = useForm();
    const [editoras, setEditoras] = useState([]);

    const obterListaEditoras = async () => {
        try{
            const lista = await api.get("editoras");
            setEditoras(lista.data);
        }catch(error){
            alert(`Erro: ..Não foi possível obter os dados: ${error}`);
        }
    }


//define o método que será executado assim que o componente for renderizado
useEffect(() => {
    obterListaEditoras();
},[]);

const filtrarLista = async (campos) => {
    try{
        const lista = await api.get(`editoras/filtro/${campos.palavra}`);
        lista.data.length
        ? setEditoras(lista.data)
        : alert("Não há editoras cadastrados com a palavra chave pesquisada");
    }catch(error){
        alert(`Erro: ..Não foi possível obter os dados: ${error}`);
    }
    

}

const excluir = async(id,nome) => {
    if(!window.confirm(`Confirma a exclusão da editora ${nome}?`)){
        return;
    }
    try{
        await api.delete(`editoras/${id}`);
        setEditoras(editoras.filter(editora => editora.id !== id));
        
    }catch(error){
        alert(`Erro: ..Não foi possível excluir a editora ${nome}: ${error}`);
    }
}

//alterar os registros
const alterar = async (id,nome,index) => {
    const novaEditora = prompt(`Digite o novo endereco da editora ${nome}`);
    // if (isNaN(novaEditora) || novaEditora <= 0) {
    //     alert('Digite um número e diferente de 0!')
    //     return;
    // }
    try{//captura os erros 
        //chamando o backend e passando os dados
        await api.put(`editoras/${id}`,{rua: novaEditora});
        const editorasAtualizados = [...editoras];
        const indiceAutor = editorasAtualizados.findIndex(editora => editora.id === id);
        editorasAtualizados[indiceAutor].rua = novaEditora;
        setEditoras(editorasAtualizados);
        obterListaEditoras();
    }catch(error){
        alert(`Erro: ..Não foi possível alterar a rua da editora ${nome}: ${error}`);
    }
}
    return (
       <div className="container">
        <div className="row">
            <div className="col-sm-7">
                <h4 className="fst-italic mt-3">Manutenção Editoras</h4>
            </div>
            <div className="col-sm-5">
                <form onSubmit={handleSubmit(filtrarLista)}>
                    <div className="input-group mt-3">
                        <input type="text" className="form-control" placeholder="Editora" required {...register("palavra")} />
                        <input type="submit" className="btn btn-primary" value="Pesquisar" />
                        <input type="button" className="btn btn-danger" value="Todos" onClick={()=>{reset({palavra:""});obterListaEditoras();}}/>
                    </div>
                </form>
            </div>
        </div>

        <table className="table table-striped mt-3">
            <thead>
                <tr>
                    <th>Cód.</th>
                    <th>Nome</th>
                    <th>Cidade</th>
                    <th>Estado</th>
                    <th>Telefone</th>
                    <th>Rua</th>
                    <th>CEP</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {editoras.map((editora) => (
                    <ItemListaEditoras
                        key={editora.id}
                        id={editora.id}
                        nome={editora.nome}
                        cidade={editora.cidade}
                        estado={editora.estado}
                        telefone={editora.telefone}
                        rua={editora.rua}
                        cep={editora.cep}
                        excluirClick={()=>excluir(editora.id,editora.rua)}
                        alterarClick={()=>alterar(editora.id,editora.rua)}
                    />
                ))}
            </tbody>
        </table>

       </div> 
    );
};

export default ManutencaoEditoras;