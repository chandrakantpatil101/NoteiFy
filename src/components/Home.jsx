import React from 'react'
import AllNotes from './AllNotes'
import Editor from './Editor'
import { useNavigate, useLocation } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import Header from './Header'

function Home() {
  const navigate = useNavigate()
  const location = useLocation()
  const isEditorRoute = location.pathname !== '/'

  return (
    <div className="h-screen flex flex-col bg-[#121212] text-white">
      {/* Sticky Header */}
      <Header/>

      {/* 💻 Desktop layout (md and up) */}
      <div className="hidden md:flex flex-1 gap-1 overflow-hidden">
        <div className='w-[30%]'>
          <AllNotes />
        </div>
        <div className='w-[70%]'>
          <Editor />
        </div>
      </div>

      {/* 📱 Mobile layout (below md) */}
      <div className="block md:hidden  pb-2">
        {/* Show only AllNotes on root route */}
        {!isEditorRoute && (
          <div>
            <AllNotes />
            <button
              onClick={() => navigate('/new')}
              className="fixed bottom-4 right-4 bg-indigo-500 text-white rounded-full p-4 shadow-lg hover:bg-indigo-600 transition duration-300 z-40">
              <AiOutlinePlus size={24} />
            </button>
          </div>
        )}

        {/* Show Editor on /new or /:noteId */}
        {isEditorRoute && <Editor />}
      </div>
    </div>
  )
}

export default Home
