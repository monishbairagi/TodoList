import React from 'react'

export const Footer = (obj) => {
    let style = {
        left: '0',
        bottom: '0',
        position: 'fixed',
        height: '5vh',
        width: '100%'
    }
    return (
        <footer className='bg-dark text-light' style={style}>
            <p className='text-center'>
                Copyright &copy; {obj.crname}
            </p> 
        </footer>
    )
}
