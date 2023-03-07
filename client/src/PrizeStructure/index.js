import React from 'react';
import "./index.css"

const PrizeStructure = () => {
    return(
        <>
        <h2 className='prize-pool-title'>Prize Structure</h2>
            <div className='prize-pool'>
                <h3>PRIZE POOL</h3>
                <button>Re-set to Saved Amounts</button>
                <button>Re-calcuate Prize Structure</button>
            </div>
        </> 
    )
}
export default PrizeStructure;