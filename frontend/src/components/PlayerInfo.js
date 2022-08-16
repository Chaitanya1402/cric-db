import React, { useEffect, useState } from 'react'

const PlayerInfo = (props) => {
  const [wiki, setWiki] = useState("");

  const wikiPlayer = async () => {
    let url = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exsentences=5&explaintext=1&format=json&titles=${props.details.name}&origin=*`
    const res = await fetch(url);
    const json = await res.json();
    // console.log(json.query.pages[Object.keys(json.query.pages)[0]].extract);
    setWiki(json.query.pages[Object.keys(json.query.pages)[0]].extract)
  }

  useEffect(() => {
    wikiPlayer();
  })

  return (
    <>
      <div className='w-[75%] m-auto'>
        <div className='flex justify-between items-start'>
          <div className='details w-[65%]'>
            <p className='text-4xl font-semibold'>{props.details.name}</p>
            <p className='text-xl font-medium'>{props.details.country}</p>
            <p className='text-lg mt-5'>Personal Information</p>
            <div className='my-2 bg-gray-100 w-[60%]'>
              {props.details.personalInfo.map((element, key) => {
                return (
                  <div className='flex justify-between' key={key}>
                    <p className='w-[100%] px-2 py-1 border border-gray-200 font-medium'>{Object.keys(element)[0]}</p>
                    <p className='w-[100%] px-2 py-1 border border-gray-200'>{element[Object.keys(element)[0]]}</p>
                  </div>
                )
              })}
            </div>
            
            <p className='text-lg mt-5'>ICC Rankings</p>
            <div className='my-2 bg-gray-100 w-[60%] grid grid-cols-4'>
              <p className='px-2 py-1 border border-gray-200'></p>
              <p className='px-2 py-1 border border-gray-200 font-medium'>Test</p>
              <p className='px-2 py-1 border border-gray-200 font-medium'>ODI</p>
              <p className='px-2 py-1 border border-gray-200 font-medium'>T20</p>
              <p className='px-2 py-1 border border-gray-200 font-medium'>Batting</p>
              <p className='px-2 py-1 border border-gray-200'>{props.details.rankings[0].batting[0].Test}</p>
              <p className='px-2 py-1 border border-gray-200'>{props.details.rankings[0].batting[1].ODI}</p>
              <p className='px-2 py-1 border border-gray-200'>{props.details.rankings[0].batting[2].T20}</p>
              <p className='px-2 py-1 border border-gray-200 font-medium'>Bowling</p>
              <p className='px-2 py-1 border border-gray-200'>{props.details.rankings[1].bowling[0].Test}</p>
              <p className='px-2 py-1 border border-gray-200'>{props.details.rankings[1].bowling[1].ODI}</p>
              <p className='px-2 py-1 border border-gray-200'>{props.details.rankings[1].bowling[2].T20}</p>
            </div>

            <p className='text-lg mt-5'>Teams played for:</p>
            
            <div className='my-2 bg-gray-100 w-[60%] py-1 px-2 border border-gray-200'>
              {props.details.teamsPlayedFor}
            </div>
          </div>
          <div className="img">
            <img className='h-[30rem] object-cover' src={props.details.img} alt="Player" />
          </div>
        </div>

        <div className='my-5 text-justify'>
          { wiki }
        </div>
      </div>
    </>
  )
}

export default PlayerInfo