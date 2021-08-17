import React from 'react'
import { AddTodo } from './AddTodo'

export const Header = (obj) => {
    let style = {
        top: '0px',
        position: 'sticky',
        width: '100%'
    }
    let font = {
        fontSize: '150%',
        color: 'white',
        fontWeight: 'bold'
    }
    return (
        <nav className="navbar pos-f-t navbar-dark bg-dark text-center" style={style}>
            <div className="container-fluid">
                <h3 className="text-white">{obj.title}</h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <div style={font}>+</div>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li><AddTodo addTodo={obj.addTodo}/></li>
                    </ul>
                    {
                        obj.search ?
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> : ""
                    }
                </div>
            </div>
        </nav>
    )
}
