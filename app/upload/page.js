"use client";
import { useSession } from '@clerk/nextjs'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import HeaderTitle from './_components/HeaderTitle';
import UploadImages from './_components/UploadImages';



const Upload = () => {
    const { session } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (!session) {
            router.push('/')
        }
    }, [session])

  return (
    <div className='w-full'>
       <HeaderTitle />
       <div className='mx-auto max-w-screen-xl flex gap-6 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 flex-col md:flex-row lg:flex-row'>
            <div className='w-full lg:w-1/2 md:w-1/2'>
                <UploadImages />
            </div>
            <div className='w-full lg:w-1/2 md:w-1/2'>
                <div className='bg-white p-4 rounded-md'>
                    <h2 className='text-2xl font-bold text-gray-900'>Uploaded Images</h2>
                    <p className='mt-1.5 text-sm text-gray-500'>Images uploaded will be displayed here</p>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Upload
