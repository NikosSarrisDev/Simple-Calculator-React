import React,{useState} from 'react'



export const CardSystem = () => {

const [count , setCount] = useState(0);

  return (
    <div className='class_for_div'>
        <div className='class_for_card'>
            <h2>{count}</h2>

            <button className='class_for_button' onClick={() => { setCount(prev => prev + 1) }}>+</button>
            <button className='class_for_button' onClick={() => { setCount(prev => prev - 1) }}>-</button>
        </div>
    </div>
  )
}
