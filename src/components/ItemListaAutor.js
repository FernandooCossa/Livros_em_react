import "../css/ItemListaAutor.css"
//const ItemLista = (props) => { 
//nocódigo abaixo fiz a desestruturação de props
const ItemListaAutor = ({id,nome,sobrenome,idade,data_nascimento,sexo,telefone,excluirClick,alterarClick}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{nome}</td>
            <td>{sobrenome}</td>
            <td>{idade}</td>
            <td>{data_nascimento}</td>
            <td>{sexo}</td>
            <td>{telefone}</td>
            <td class="text-center">
                <i className="exclui text-danger fw-bold" title="Excluir" onClick={excluirClick}>&#10008;</i>
                <i className="altera text-sucess fw-bold ms-2" title="Alterar" onClick={alterarClick}>&#36;</i>
            </td>
        </tr>
    );
};

export default ItemListaAutor;