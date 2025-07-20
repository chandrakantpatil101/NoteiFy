import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromNote } from '../redux/noteSlice'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function AllNotes() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const allNotes = useSelector((state) => state.noteStore.notes)
    const [searchedTerm, setSearchTerm] = useState('')

    const filteredData = allNotes.filter(
        (note) =>
            note.title.toLowerCase().includes(searchedTerm.toLowerCase())
    )

    function handleDelete(noteId) {
        dispatch(removeFromNote(noteId))
        navigate('/')
    }
    function handleShareLink(id) {
        const url = `${window.location.origin}/${id}`;
        navigator.clipboard.writeText(url)
            .then(() => toast.success('Link copied to clipboard!'))
            .catch(() => toast.error('Failed to copy link.'));
    }


    return (
        <div className='w-full h-screen  text-gray-200 border-r border-gray-700 flex flex-col'>
            {/* Sticky Search Bar */}
            <div className='px-8 py-4 sticky top-0 z-10 border-b border-gray-700'>
                <input
                    className='w-full px-4 py-2 rounded-lg bg-[#2A2A2A] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-white'
                    type="search"
                    placeholder='Search...'
                    value={searchedTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Scrollable Notes Section */}
            <div className='flex-1 overflow-y-auto px-8 py-4 flex flex-col gap-4 custom-scrollbar'>
                {filteredData.length > 0 ? (
                    filteredData.reverse().map((note) => (
                        <div key={note._id} className='bg-[#242424] p-4 rounded-xl border border-gray-700 shadow-sm hover:shadow-blue-500 transition-shadow duration-200'>
                            <Link to={`/${note._id}`}>
                                <div className='mb-3'>
                                    <h2 className='text-lg font-semibold text-blue-400 mb-1'>{note.title}</h2>
                                    <hr className='border-gray-600 mb-2' />
                                    <p className='text-sm text-gray-300 line-clamp-1'>{note.content}</p>
                                </div>
                            </Link>
                            <div className='flex justify-between text-sm text-gray-400'>
                                <button
                                    onClick={() => handleDelete(note._id)}
                                    className='hover:text-red-500 transition-colors duration-150'>
                                    Delete
                                </button>
                                <button
                                    className='hover:text-green-400 transition-colors duration-150'
                                    onClick={() => {
                                        navigator.clipboard.writeText(note.content)
                                        toast.success('Copied to Clipboard')
                                    }}>
                                    Copy</button>
                                <button 
                                className='hover:text-blue-400 transition-colors duration-150'
                                onClick={() => handleShareLink(note._id)}
                                >Share</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='text-gray-500 text-center mt-10'>No notes found</div>
                )}
            </div>
        </div>
    )
}

export default AllNotes