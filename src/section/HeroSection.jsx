import React from 'react'
import Image1 from '../images/hero/yay 2.png'
import { Download, Login } from '@mui/icons-material'

export default function HeroSection() {
    return (
        <div className='flex flex-row max-sm:flex-col max-sm:flex-col-reverse max-sm:py-8 max-sm:space-x-1 max-sm:px-8 items-center py-24 space-x-16 px-32 max-xl:px-24'>
            <div className='basis-1/2 max-sm:basis-full'>
                <h1 className='text-5xl max-xl:text-4xl text-primary max-sm:pt-8 max-sm:text-xl'>
                    Drive the nation to a more <strong>seamless</strong>, <strong>convenient mobility</strong> and <strong>efficient logistics.</strong>
                </h1>
                <div className='flex max-sm:flex-col space-x-8'>
                    <button type='button' className='mt-16 bg-secondary text-default py-6 px-8 text-lg rounded-lg flex max-sm:text-4xl max-sm:py-6 max-sm:pt-8'>
                        <svg className='w-8 mr-2 max-sm:w-16' viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 30.5C8.175 30.5 7.4685 30.206 6.8805 29.618C6.2925 29.03 5.999 28.324 6 27.5V23H9V27.5H27V23H30V27.5C30 28.325 29.706 29.0315 29.118 29.6195C28.53 30.2075 27.824 30.501 27 30.5H9ZM18 24.5L10.5 17L12.6 14.825L16.5 18.725V6.5H19.5V18.725L23.4 14.825L25.5 17L18 24.5Z" fill="white"/>
                        </svg>
                        Get The App Now
                    </button>
                    <button type='button' className='mt-16 bg-default border border-primary text-primary py-6 px-8 text-lg rounded-lg text-secondary max-sm:text-4xl'>
                        <Login className='mb-1 mr-2' sx={{ fontSize: 64 }}  /> Admin Login
                    </button>
                </div>
            </div>
            <div className='basis-1/2 max-sm:basis-full bg-[#EAEDFB] flex justify-center p-8 rounded-2xl'>
                <img src={Image1} />
            </div>
        </div>
    )
}

