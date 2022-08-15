import React from 'react'

const PlayerCard = (props) => {
  // {props.details.name}
  // {props.details.country}
  // {props.details.age}
  // {props.details.role}
  // {props.details.caps}
  return (
    <div className='card w-[23%] my-4 py-1 mx-2 max-w-xs border-2 border-zinc-300 rounded-md hover:my-shadow hover:border-zinc-400 shadow-md'>
      <img className='player-image m-auto w-[100%] h-72 object-top max-w-xs object-cover' src={props.details.img} alt="Player" />
      <div className='main-info relative flex my-4 px-2 justify-between'>
        <p className='text-lg font-merriweather font-semibold'>{props.details.name}</p>
        <img width={40} src={`https://countryflagsapi.com/png/${props.details.country}`} alt="Player country" />
      </div>
      <div className='extra-player-details hidden'>
        <div className="age-box border-l w-[100%] text-center">
          <p className='font-medium'>Age</p>
          <p>{props.details.age}</p>
        </div>
        <div className="role-box border-l border-l-zinc-400 w-[100%] text-center">
          <p className='font-medium'>Role</p>
          <p>{props.details.role}</p>
        </div>
        <div className="caps-box border-l border-l-zinc-400 w-[100%] text-center">
          <p className='font-medium'>Intl. caps</p>
          <p>{props.details.caps}</p>
        </div>
      </div>
    </div>
  )
}

export default PlayerCard