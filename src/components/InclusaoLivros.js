//Componente para incluir livros no banco de dados
//declaração da função do componente IncluirLivros
import { useForm } from "react-hook-form";
import { api } from "../config_axios";
import { useState } from "react";
//register serve para definir os nomes dos campos do form (validações)
//handleSubmit, para indicar o método a ser acionado no evento onSubmit do form
//form onSubmit={handleSubmit(salvar)}
const InclusaoLivros = () => {
    const{ register, handleSubmit } = useForm();
    const [aviso, setAviso] = useState("");
    //método chamado ao enviar form onSubmit
    const salvar = async (campos) => {  
        try {
                    const response = await api.post("livros", campos);
                    setAviso(`Livro cadastrado com sucesso!"
                    ${response.data.id}`);
                } catch (error) {
                    setAviso("Erro ao cadastrar livro!");
                }
    }
    //JSON.stringify() converte um objeto javascript para uma String JSON 
    //alert(JSON.stringify(campos));
    //lá no html puro usavamos titulo.value para pegar valor
    
    //aqui é o que vai ser exibido em tela
    return ( 
        <div className="container">
            <h4 className="fst-italic mt-3">Inclusão</h4>
            <form onSubmit={handleSubmit(salvar)}>
                <div className="form-group">
                    <label htmlFor="titulo">Titulo</label>
                    <input type="text" className="form-control" id="titulo"
                    required autoFocus {...register("titulo")}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="autor">Autor</label>
                        <input type="text" className="form-control" id="autor"
                        required {...register("autor")}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="foto">URL da foto:</label>
                        <input type="url" className="form-control" id="foto"
                        required {...register("foto")}/>
                </div>
                <div className="row mt-2">
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label htmlFor="ano">Ano de Publicação</label>
                            <input type="number" className="form-control"
                            id="ano" required {...register("ano")}></input>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8">
                    <div className="form-group">
                        <label htmlFor="preco">Preço R$:</label>
                        <input type="number" className="form-control" 
                        id="preco" step="0.01" required {...register("preco")}></input>
                    </div>
                </div>
                <input type="submit" className="btn btn-primary mt-3"
                value="Enviar" />
                <input type="reset" className="btn btn-danger mt-3 ms-3"
                value="Limpar"/>
        </form>
        <div className="alert"></div>
        </div>
    )
}

export default InclusaoLivros;