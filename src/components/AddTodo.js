import React, { useState } from 'react'

export const AddTodo = (obj) => {
    let style = {
        width: '100%',
        backgroundColor: 'gray',
        color: 'white'
    }
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Either Title or Description is Empty");
        } else {
            obj.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <form className="my-3" onSubmit={submit}>
            <div className="mb-3">
                <h1 className='text-white'>Add New Todo</h1>
            </div>
            <div className="mb-3">
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" placeholder="Enter Title" />
            </div>
            <div className="mb-3">
                <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" placeholder="Enter Description" />
            </div>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"  style={style} type="submit">Add</button>
        </form>
    )
}
