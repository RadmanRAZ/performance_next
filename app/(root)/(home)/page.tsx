import Filters from '@/components/Filters'
import ResouseCard from '@/components/ResouseCard'
import SearchForm from '@/components/SearchForm'
import { getResources } from '@/sanity/actions'
import React from 'react'

const Page = async () => {
  const resourses = await getResources({
    query : "",
    category : "",
    page : "1"
  })
  console.log(resourses)
  return (
    <main className='flex-center paddings mx-auto w-full max-w-screen-2xl flex-col'>
      <section className='nav-padding w-full'>
        <div className='flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center'>
          <h1 className='sm:heading1 heading2 mb-6 text-center text-white' >Javascript Mastery Resources</h1>
        </div>
        <SearchForm/>


      </section>
      <Filters/> 
      <section className='flex-center mt-6 w-full flex-col sm:mt-20'>
        Header
        <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
          {resourses?.length > 0 ? (
            resourses.map((resourse:any)=>
              <ResouseCard 
                key={resourse._id}
                title = {resourse.title}
                id = {resourse.id}
                image = {resourse.image}
                downloadNumber = {resourse.views}
              />
            )
          ):(
            <p className='body-regular text-white'> 
              no result found
            </p>
          )}
        </div>
      </section>

    </main>
  )
}

export default Page