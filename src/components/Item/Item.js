export const Item = ({id, text, isComplete, handleCompleteTodo, handleEditTodo, handleDeleteTodo}) => {
    return <li className="d-flex flex-column mb-3 flex-md-row align-items-md-center">
        <div className="d-flex align-items-center mb-3 mb-sm-0">
            <strong className="me-3 text-uppercase">Id: {id}</strong>
            <input 
            onChange={() => handleCompleteTodo(id)}
            defaultChecked={isComplete}
            className="form-check-input me-3" 
            type="checkbox"/>
            <h5 className={isComplete ? "mb-0 flex-grow-1 text-decoration-line-through" : "mb-0 flex-grow-1"}>{text}</h5>
        </div>
        <div className="ms-auto">
            <button onClick={() => handleEditTodo(id, text)} className="btn btn-warning me-3" text="Edit" type="button">Edit</button>
            <button onClick={() => handleDeleteTodo(id)} className="btn btn-danger" text="Delete" type="button">Delete</button>
        </div>
    </li>
};