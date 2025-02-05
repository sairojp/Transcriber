import React, { useState } from 'react'
import Transcription from './Transcription'
import Translation from './Translation'

export default function Information(props) {

  const {output} = props 
  const [tab, setTab] = useState('transcription')

  const textElement = tab === 'transcription' ? output.map(val => val.text) : translation || ''

  function handleCopy() {
    navigator.clipboard.writeText(textElement)
  }

  function handleDownload() {
      const element = document.createElement("a")
      const file = new Blob([textElement], { type: 'text/plain' })
      element.href = URL.createObjectURL(file)
      element.download = `Transcribe_${new Date().toString()}.txt`
      document.body.appendChild(element)
      element.click()
  }

  return (
    <main className='flex-1 p-4 flex flex-col text-center gap-3 sm:gap-4 md:gap-5 justify-center pb-20  max-w-prose w-full mx-auto'>
      <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl whitespace-nowrap'>Your
         <span className='text-blue-400 bold'>Transcription</span></h1>
      <div className='grid grid-cols-2 items-center bg-white shadow rounded-full overflow-hidden'>
        {/* <button onClick={() => setTab('transcription')}className= {'px-4 py-1 font-medium ' + (tab === 'transcription' ? 'bg-blue-400 text-white ' : 'text-blue-400 hover:text-blue-600')}>Transcription</button> */}
        {/* <button onClick={() => setTab('translation')} className= {'px-4 py-1 font-medium ' + (tab === 'translation' ? 'bg-blue-400 text-white ' : 'text-blue-400 hover:text-blue-600')}>Translation</button> */}
      </div>
      {tab === 'transcription' ? (
        <Transcription {...props}/>
      ) : (
        <Translation {...props}/>
      )}
            <div className='flex items-center gap-4 mx-auto '>
                <button onClick={handleCopy} title="Copy" className='bg-white  hover:text-blue-500 duration-200 text-blue-300 px-2 aspect-square grid place-items-center rounded'>
                    <i className="fa-solid fa-copy"></i>
                </button>
                <button onClick={handleDownload} title="Download" className='bg-white  hover:text-blue-500 duration-200 text-blue-300 px-2 aspect-square grid place-items-center rounded'>
                    <i className="fa-solid fa-download"></i>
                </button>
        </div>
    </main>
  )
}
