import React, { useState } from 'react'
import PlayerCard from './PlayerCard'

const PlayerList = () => {
  const [active, setActive] = useState("all-players");
  const details = {
    "name": "Virat Kohli",
    "img": "https://www.cricket.com.au/-/media/Players/Men/International/India/2021%20T20WC/Virat-Kohli-2122.ashx",
    "country": "in",
    "age": 33,
    "role": "batsman",
    "caps": 293
  }
  return (
    <>
      <div className='w-[85%] m-auto'>
        <div className="options font-medium">
          <button onClick={() => setActive('all-players')} className={`${active === 'all-players' ? 'active': ''} p-1 mx-2`}>All players</button>
          <button onClick={() => setActive('batsman')} className={`${active === 'batsman' ? 'active' : ''} p-1 mx-2`}>Batsmen</button>
          <button onClick={() => setActive('wicket-keeper')} className={`${active === 'wicket-keeper' ? 'active' : ''} p-1 mx-2`}>Wicket-keepers</button>
          <button onClick={() => setActive('all-rounder')} className={`${active === 'all-rounder' ? 'active' : ''} p-1 mx-2`}>All-rounders</button>
          <button onClick={() => setActive('bowler')} className={`${active === 'bowler' ? 'active' : ''} p-1 mx-2`}>Bowlers</button>
        </div>
        {/* Players List goes here */}
        <div className='flex mt-8 flex-wrap justify-center'>
          <PlayerCard details={details} />
          <PlayerCard details={details} />
          <PlayerCard details={details} />
          <PlayerCard details={details} />
          <PlayerCard details={details} />
          <PlayerCard details={details} />
        </div>

      </div>
    </>
  )
}

export default PlayerList