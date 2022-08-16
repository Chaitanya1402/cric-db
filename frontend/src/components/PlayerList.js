import React, { useState } from 'react'
import PlayerCard from './PlayerCard'
import PlayerInfo from './PlayerInfo';

const PlayerList = () => {
  const [active, setActive] = useState("allplayers");
  const details = {
    "name": "Virat Kohli",
    "country": "India",
    "img": "https://www.cricket.com.au/-/media/Players/Men/International/India/2021%20T20WC/Virat-Kohli-2122.ashx",
    "countryCode": "in",
    "age": 33,
    "role": "batsman",
    "caps": 293,
    "personalInfo": [
      {"Birth Place": "Delhi"},
      {"Height": "5ft 9in (175cm)"},
      {"Batting Style": "Right Handed Bat"},
      {"Bowling Style": "Right-arm Medium"}
    ],
    "rankings": [
      {"batting": [
          {"Test": 12},
          {"ODI": 5},
          {"T20": 32}
    ]},
      {"bowling": [
        {"Test": "NA"},
        {"ODI": "NA"},
        {"T20": "NA"}
      ]}
    ],
    "teamsPlayedFor": "India, Delhi, India Red, India U19, Royal Challengers Bangalore, Board Presidents XI, North Zone, Indians, India A, Asia XI"
  }

  return (
    <>
      <div className='w-[85%] m-auto'>
        <div className="options font-medium">
          <button onClick={() => setActive('allplayers')} className={`${active === 'allplayers' ? 'active': ''} p-1 mx-2`}>All players</button>
          <button onClick={() => setActive('batsman')} className={`${active === 'batsman' ? 'active' : ''} p-1 mx-2`}>Batsmen</button>
          <button onClick={() => setActive('wicketkeeper')} className={`${active === 'wicketkeeper' ? 'active' : ''} p-1 mx-2`}>Wicket-keepers</button>
          <button onClick={() => setActive('allrounder')} className={`${active === 'allrounder' ? 'active' : ''} p-1 mx-2`}>All-rounders</button>
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
      <PlayerInfo details={details} />
    </>
  )
}

export default PlayerList