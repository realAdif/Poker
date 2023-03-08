import React from 'react';
import "./index.css"

const tourmamentRoundClockEl = () =>{
    let tourmamentRoundClock =[]
    for(let i = 1; i <= 10; i++ ){
        console.log(i);
        tourmamentRoundClock.push(
            <tr>
                <td>&nbsp;{i}</td>
                <td>&nbsp;15:00</td>
                <td>&nbsp;100</td>
                <td>&nbsp;200</td>
                <td>&nbsp;0</td>
                <td>&nbsp;00:00</td>
            </tr>
        );   
    }
    return tourmamentRoundClock;
};



const TournamentClock = () => {
    return(
        <>
        <h2 className='prize-pool-title'>Tournament Clock</h2>
           <div className='tournament-clock-container'>
                <div className='tournament-clock-round-structure'>
                    <h3>ROUND STRUCTURE</h3>
                    <div className='tournament-clock-timetable'>
                    <table className="demo">
                            <thead>
                            <tr>
                                <th>Round</th>
                                <th>Length</th>
                                <th>Small Blind</th>
                                <th>Big Blind</th>
                                <th>Ante</th>
                                <th>Break Length</th>
                            </tr>
                            </thead>
                            <tbody>
                                {tourmamentRoundClockEl()}      
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='tournament-clock-control-panel'>
                    <h3>CONTROL PANEL</h3>
                    <div className='control-panel'>
                        <p>Event Display Name: </p>
                        <input type="text"></input>
                        
                        <p>Start Time:</p>
                        <input type="time"></input>
                        
                        <p>Late Registration Time:</p>
                        <input type="time"></input>

                        <p>Alternate Clock Message:</p>
                        <input type="text"></input>
                    </div>
                    
                    <button className='button-style' onClick={() =>{
                        window.open('/timer');
                    }}>Popup Timer</button>

                    <div className='control-panel-buttons'>
                        
                        <button className='button-style'>Start Countdown</button>
                        <button className='button-style'>Start Clock</button>
                        
                        <button className='button-style'>Previous Round</button>
                        <button className='button-style'>Skip Round</button>
                    </div>

                    <div className='control-panel-round'>
                        <p>Round Length (minutes)</p>
                        <input className='control-panel-round-input' type="number" defaultValue={15}></input>
                    </div>

                    <div className='control-panel-players'>
                        <p>Players Remainning:</p>

                        <button>Remove Player</button>
                        <button>Add Player</button>

                        <button>Cancel</button>
                        <button>Refresh</button>
                    </div>

                </div>
           </div>
        </> 
    )
}
export default TournamentClock;