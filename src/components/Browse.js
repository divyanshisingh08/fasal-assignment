import React from 'react'
import Header from './Header'
import bg1 from './images/bg1.jpg'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

const Browse = () => {
  return (
    <div>
      <Header/>
      <div className="fixed -z-10">
        <img className=" h-screen w-screen object-cover" src={bg1} alt="bg" />
      </div>
      <SearchBar/>
      <SearchResults/>
    </div>
  )
}

export default Browse
