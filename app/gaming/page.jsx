"use client"

import { useState, useEffect } from "react"
import Loading from '@/components/loading'
import GamingCard from "@/components/GamingCard"


const page = () => {
  const [allPosts, setAllPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchPosts = async () => {
    setIsLoading(true)
    const response = await fetch("/api/gaming")
    const data = await response.json()

    setAllPosts(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchPosts()
  }, [])


  return (
    <main className='pb-16'>
      <div className='pt-8'>
        <h4 className='text-lg'>
            Web3.0 games and supporting services utilising the <span className='text-red-700'>Redlight</span> Blockchain for super fast and gas free NFT technology.
        </h4>

        {isLoading ? (
            <Loading />
        ) : (
            <div>
            {allPosts.map((project) => (
                <div key={project._id}>
                    <GamingCard data={project} />
                </div>
            ))}
            </div>
        )}

      </div>
    </main>
  )
}

export default page