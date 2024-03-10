import { useState } from "react"
import './App.css';
import Header from "./assets/components/Header/Header.jsx";
import SearchImages from "./assets/components/SearchImages/SearchImages.jsx"
import DisplayImages from "./assets/components/DisplayImages/DisplayImages.jsx"


function App() {

  const [searchData, setSearchData] = useState('');

  return (
    <>
      <Header />
      <main className="main">
        <SearchImages setSearchData={ setSearchData }/>
        <DisplayImages search={ searchData }/>
      </main>
    </>
  )
}

export default App
