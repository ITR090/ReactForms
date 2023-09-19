import React from 'react'

export default function Button({onClickFun,styles,text}) {
  return (
    <button onClick={onClickFun} className={styles}>
        {text}
    </button>
  )
}
