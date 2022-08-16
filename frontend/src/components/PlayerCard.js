import React from 'react'
import batsman from '../images/batcolored.png';
import bowler from '../images/ball.png';
import wicketkeeper from '../images/gloves.png';
import allrounder from '../images/batball.png';

const PlayerCard = (props) => {
  // {props.details.name}
  // {props.details.country}
  // {props.details.age}
  // {props.details.role}
  // {props.details.caps}
  let role = props.details.role
  let img;
  if (role === 'batsman') {
    img = batsman;
  }
  else if (role === 'wicketkeeper') {
    img = wicketkeeper;
  }
  else if (role === 'allrounder') {
    img = allrounder;
  }
  else {
    img = bowler
  }

  return (
    <>
      <a href="/" className='card w-[23%] my-4 py-1 mx-2 max-w-xs border-2 border-zinc-300 rounded-md hover:my-shadow hover:border-zinc-400 shadow-md'>
        <img className='player-image m-auto w-[100%] h-72 object-top max-w-xs object-cover opacity-90' src={props.details.img} alt="Player" />
        <div className='main-info relative flex my-4 px-2 pb-1 justify-between'>
          <p className='text-lg font-merriweather font-semibold'>{props.details.name}</p>
          <img width={40} src={`https://countryflagsapi.com/png/${props.details.countryCode}`} alt="Player country" />
        </div>
        <div className='extra-player-details flex'>
          <div className="age-box border-l w-[100%] text-center">
            <p className='font-medium'>Age</p>
            <p>{props.details.age}</p>
          </div>
          <div className="role-box border-l border-l-zinc-400 w-[100%] text-center">
            <p className='font-medium'>Role</p>
            <img src={img} alt={props.details.role} width={20} className='block m-auto'/>
          </div>
          <div className="caps-box border-l border-l-zinc-400 w-[100%] text-center">
            <p className='font-medium'>Intl. caps</p>
            <p>{props.details.caps}</p>
          </div>
        </div>
      </a>
    </>
  )
}

export default PlayerCard