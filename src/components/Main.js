import React from 'react'
import { Todo } from './Todo'

export const Main = (obj) => {
    let style = {
        marginBottom: '5.5vh',
    }
    return (
        <div style={style}>
            {
                obj.todoList.length === 0 ? <div className='text-center'><h3 className='my-3'>No Todo to Display</h3></div> :
                    obj.todoList.map((e) => {
                        return <Todo todo={e} key={e.tid} onDelete={obj.onDelete} />
                    })
            }
        </div>
    )
}
