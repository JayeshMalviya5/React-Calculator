import React from 'react'

function Buttons(props) {
  return (
    <div className='btn'>
        <button name='+' onClick={props.handleResult}>+ Add</button>
        <button name='-' onClick={props.handleResult}>- Sub</button>
        <button name='*' onClick={props.handleResult}>* Mul</button>
        <button name='/' onClick={props.handleResult}>/ Dvi</button>
    </div>
  )
}

export default Buttons