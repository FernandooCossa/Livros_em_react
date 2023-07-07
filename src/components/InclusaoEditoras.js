//Componente para incluir livros no banco de dados
//declaração da função do componente IncluirLivros
import { useForm } from "react-hook-form";
import { api } from "../config_axios";
import { useState } from "react";
//register serve para definir os nomes dos campos do form (validações)
//handleSubmit, para indicar o método a ser acionado no evento onSubmit do form
//form onSubmit={handleSubmit(salvar)}
const InclusaoEditoras = () => {
    const{ register, handleSubmit } = useForm();
    const [aviso, setAviso] = useState("");
    //método chamado ao enviar form onSubmit
    const salvar = async (campos) => {  
        try {
                    const response = await api.post("editoras", campos);
                    setAviso(`Editora cadastrado com sucesso!"
                    ${response.data.id}`);
                } catch (error) {
                    setAviso("Erro ao cadastrar Editora!");
                }
    }
    //JSON.stringify() converte um objeto javascript para uma String JSON 
    //alert(JSON.stringify(campos));
    //lá no html puro usavamos titulo.value para pegar valor
    
    //aqui é o que vai ser exibido em tela
    return ( 
        <div className="container">
            <h4 className="fst-italic mt-3">Inclusão Editoras</h4>
            <form onSubmit={handleSubmit(salvar)}>
                <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" className="form-control" id="nome"
                    required autoFocus {...register("nome")}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="cidade">Cidade</label>
                        <input type="text" className="form-control" id="cidade"
                        required {...register("cidade")}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="estado">Estado:</label>
                        <input type="text" className="form-control" id="estado"
                        required {...register("estado")}/>
                </div>
                <div className="row mt-2">
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label htmlFor="telefone">Telefone</label>
                            <input type="number" className="form-control"
                            id="telefone" required {...register("telefone")}></input>
                        </div>
                    </div>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="rua">Rua:</label>
                        <input type="text" className="form-control" id="rua"
                        required {...register("rua")}/>
                </div>
                <div className="row mt-2">
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label htmlFor="cep">CEP</label>
                            <input type="number" className="form-control"
                            id="cep" required {...register("cep")}></input>
                        </div>
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

export default InclusaoEditoras;