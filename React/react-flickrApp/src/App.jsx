import { useState } from "react"
import './App.css';
import SearchImages from "./assets/components/SearchImages/SearchImages.jsx"
import DisplayImages from "./assets/components/DisplayImages/DisplayImages.jsx"


function App() {

  const [searchData, setSearchData] = useState('');

  return (
    <>
      <main className="main">
        <SearchImages setSearchData={ setSearchData }/>
        <DisplayImages search={ searchData }/>
      </main>
    </>
  )
}

export default App
