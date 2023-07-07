import "../css/ItemListaEditoras.css"
//const ItemLista = (props) => { 
//nocódigo abaixo fiz a desestruturação de props
const ItemListaEditoras = ({id, nome, cidade, estado, telefone, rua, cep, excluirClick, alterarClick}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{nome}</td>
            <td>{cidade}</td>
            <td>{estado}</td>
            <td>{telefone}</td>
            <td>{rua}</td>
            <td>{cep}</td>
            <td class="text-center">
                <i className="exclui text-danger fw-bold" title="Excluir" onClick={excluirClick}>&#10008;</i>
                <i className="altera text-sucess fw-bold ms-2" title="Alterar" onClick={alterarClick}>&#36;</i>
            </td>
        </tr>
    );
};

export default ItemListaEditoras;