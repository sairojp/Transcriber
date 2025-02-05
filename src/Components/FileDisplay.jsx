import React from 'react'

export default function FileDisplay(props) {
  const { handleAudioReset, audioStream, file, handleFormSubmission } = props
  return (
    <main className='flex-1 p-4 flex flex-col text-center gap-3 sm:gap-4 md:gap-5 justify-center pb-20 w-72 sm:w-96 max-w-full mx-auto'>
      <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl'>Your
         <span className='text-blue-400 bold'>File</span></h1>
      <div className='flex flex-col text-left my-4'>
        <h3 className='font-semibold'>Name</h3>
        <p>{file ? file.name : 'Custom Audio '}</p>
      </div>
      <div className='flex items-center justify-between gap-4 '>
        <button onClick={handleAudioReset}className='text-slate-400 hover:text-blue-600 duration-200'>Reset</button>
        <button onClick={handleFormSubmission} className='flex items-center gap-2 specialBtn px-4 py-2 rounded-lg text-blue-400'>
          <p>Transcribe</p>
          <i className="fa-solid fa-pen-to-square"></i>
          </button>
      </div>
    </main>
  )
}
