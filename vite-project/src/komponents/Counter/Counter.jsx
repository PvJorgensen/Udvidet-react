import { useState } from 'react'

export const Counter =  () => {
    const [ count, setCount ] = useState(0);
  return (
    <>
    <div>
        <h1>Tæl med et klik</h1>
        <p>Du har klikket på knappet {count} antal gange</p>
        <div>{count}</div>
        <button type='button' onClick={() => setCount(count + 1)}>Tæl</button>
    </div>
    </>
    )
  
}
