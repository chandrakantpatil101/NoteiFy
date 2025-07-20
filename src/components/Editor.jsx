import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { addToNote, updateToNote } from '../redux/noteSlice'
import toast from 'react-hot-toast'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'

function Editor() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const navigate = useNavigate()
    const allNotes = useSelector((state) => state.noteStore.notes)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm()

    const editNote = id ? allNotes.find((note) => note._id === id) : null

    useEffect(() => {
        reset({
            title: editNote?.title || '',
            content: editNote?.content || '',
        })
    }, [id, allNotes])

    function createNote(data) {
        const _id = id || Date.now().toString(36)
        if (id) {
            const updatedAt = new Date().toISOString()
            const note = { ...data, _id, updatedAt }
            dispatch(updateToNote(note))
        } else {
            const createdAt = new Date().toISOString()
            const note = { ...data, _id, createdAt }
            dispatch(addToNote(note))
            reset()
        }
    }

    function errorHandler(errors) {
        if (errors.title) toast.error('Please add Title')
        if (errors.content) toast.error('Please add Content')
    }

    return (
        <div className='w-full px-5 md:px-20 pt-5 md:pt-10 text-gray-200 sticky top-0 z-10'>

            {/* 🔙 Back Button - Only on Mobile */}
            <div className="md:hidden mb-5">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-gray-300 hover:text-indigo-400 transition">
                    <IoArrowBack size={20} />
                    <span className="text-sm">Back</span>
                </button>
            </div>

            <div >

                <form onSubmit={handleSubmit(createNote, errorHandler)}>
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-col gap-4'>
                            <input
                                type='text'
                                {...register('title', { required: true })}
                                placeholder='Title..'
                                className='bg-[#1C1C1C] border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400'
                            />
                            <textarea
                                rows='12'
                                {...register('content', { required: true })}
                                placeholder='Content...'
                                className='bg-[#1C1C1C] border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 resize-none'
                            />
                        </div>
                        <div className='flex justify-between items-center'>
                            <button
                                type='submit'
                                className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-200'>
                                {editNote ? 'Update' : 'Create'}
                            </button>
                            {editNote && (
                                <Link
                                    to='/'
                                    className='bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-all duration-200'>
                                    Create New
                                </Link>
                            )}
                        </div>
                    </div>
                </form>
                <div className="w-full text-center text-sm text-gray-500 py-2 mt-25 sticky bottom-0 bg-[#121212] z-10">
                    <p>Developed with 💕 by Chandrakant😈</p>
                </div>
            </div>
        </div>
    )
}

export default Editor
