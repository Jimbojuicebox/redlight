"use client"

import { useState, useEffect } from "react"
import Loading from '@/components/Loading'
import UtilityCard from "@/components/UtilityCard"


const page = () => {
  const [allPosts, setAllPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchPosts = async () => {
    setIsLoading(true)
    const response = await fetch("/api/utility")
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
            Marketplaces, Exchanges that list and trade $REDLC and Bridges to and from the <span className='text-red-700'>Redlight</span> Blockchain.
        </h4>

        {isLoading ? (
            <Loading />
        ) : (
            <div>
            {allPosts.map((project) => (
                <div key={project._id}>
                    <UtilityCard data={project} />
                </div>
            ))}
            </div>
        )}

      </div>
    </main>
  )
}

export default page