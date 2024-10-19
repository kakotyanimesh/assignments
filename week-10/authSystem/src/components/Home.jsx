import React from 'react'

const Home = () => {
  return (
    <div className='text-center px-2 font-semibold '>
        <h1 className='sm:text-3xl text-xl'>Welcome to the Auth System demo</h1>
        <p className='leading-7 flex items-center flex-col sm:text-xl text-xs mt-10'>
        This demo showcases two approaches to managing authentication state in React:
            <ul className='space-y-2'>
                <li className='flex items-center gap-2'> <input type="checkbox" className='w-5 h-5' /> State Lifting</li>
                <li className='flex items-center gap-2'> <input type="checkbox" className='w-5 h-5' /> Context API</li>
            </ul>
        Use the toggle above to switch between the two approaches.
        </p>
    </div>
  )
}

export default Home