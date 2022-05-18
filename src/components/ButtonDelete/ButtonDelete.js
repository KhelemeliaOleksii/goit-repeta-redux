function ButtonDelete(props) {
    // console.log(props);
    return (
        <button type="button" onClick={() => props.onClickDelete(props.id)}>Delete</button>
    )
};

export default ButtonDelete;