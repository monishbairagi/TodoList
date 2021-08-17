import React from 'react'

export const Todo = (obj) => {
    let style = {
        borderRadius: '10px',
        border: '2px solid gray',
        padding: '2px',
        margin: '5px'         
      }
    return (
        <div>
            <div className="text-left" style={style}>
                <div className="card-body">
                    <h5 className="card-title">{obj.todo.title}</h5>
                    <p className="card-text">{obj.todo.desc}</p>
                    <button className='btn btn-danger btn-sm' onClick={() => obj.onDelete(obj.todo)}>Delete</button>
                </div>
            </div>
        </div>
    )
}
