'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Input } from './ui/input'
import { formUrlQuery } from '@/sanity/utils'
import { useRouter, useSearchParams } from 'next/navigation'
import { route } from 'sanity/router'

const SearchForm = () => {
  const [search, setSearch] = useState('')
  const searchParams  = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = '';

      if(search) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'query',
          value: search
        })
      } else {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ['query']
        })
      }
      
      router.push(newUrl, { scroll: false });
    }, 300)
  
    return () => clearTimeout(delayDebounceFn)
  }, [search])

  return (
    <form className='flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5'>
        <label className='flex-center relative w-full max-w-3xl'>
            <Image src="/magnifying-glass.svg"
            className='absolute left-8' width={32} height={32} alt='logo' >
            </Image>
            <Input className='base-regular h-fit border-0 bg-black-400 py-6 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-400 ' type='text' placeholder='Search'
            value={search} onChange={(e)=>setSearch(e.target.value)}  />
        </label>
    </form>
  )
}

export default SearchForm