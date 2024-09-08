import Filters from '@/components/Filters'
import Header from '@/components/Header'
import ResouseCard from '@/components/ResouseCard'
import SearchForm from '@/components/SearchForm'
import { getResources, getResourcesPlaylist } from '@/sanity/actions'
import React from 'react'

interface Props{
  searchParams : {[key : string] : string}
}

const Page = async ({searchParams}:Props) => {
  console.log("this is search params" , searchParams)
  const resourses = await getResources({
    query : searchParams?.query || "",
    category : searchParams?.category || "", 
    page : "1"
  })

  const resoursesPlaylist = await getResourcesPlaylist()



  return (
    <main className='flex-center paddings mx-auto w-full max-w-screen-2xl flex-col'>
      <section className='nav-padding w-full'>
        <div className='flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center'>
          <h1 className='sm:heading1 heading2 mb-6 text-center text-white' >Javascript Mastery Resources</h1>
        </div>
        <SearchForm/>


      </section>
      <Filters/> 
      {(searchParams?.query || searchParams?.category) &&(<section className='flex-center mt-6 w-full flex-col sm:mt-20'>
        <Header  
          title = "Resources"
          query = {searchParams?.query || ''}
          category = {searchParams?.category || ''}
        />
        <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
          {resourses?.length > 0 ? (
            resourses.map((resourse:any)=>
              <ResouseCard 
                key={resourse._id}
                title = {resourse.title}
                id = {resourse.id}
                image = {resourse.image}
                downloadNumber = {resourse.views}
                downloadLink={resourse.downloadLink}
              />
            )
          ):(
            <p className='body-regular text-white'> 
              no result found
            </p>
          )}
        </div>
      </section>)}
      {
        resoursesPlaylist.map((item:any)=>(
          <section key={item._id} className='flex-center mt-6 w-full flex-col sm:mt-20'  >
            <h1 className='heading3 self-start text-white'>
              {item.title}
            </h1>
            <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start' >
              { item.resources.map((resourse:any)=>
              <ResouseCard 
                key={resourse._id}
                title = {resourse.title}
                id = {resourse.id}
                image = {resourse.image}
                downloadNumber = {resourse.views}
                downloadLink={resourse.downloadLink}
              />
            )}
            </div>
          </section>
        ))
      }
      

    </main>
  )
}

export default Page