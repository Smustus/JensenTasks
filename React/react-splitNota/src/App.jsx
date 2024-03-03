import './App.css'
import Header from './components/Header/Header.jsx'
import BillForm from './components/BillForm/BillForm.jsx'
import BillFormHook from './components/BillForm/BillFormHooks.jsx'

function App() {
  
  return (
    <>
      <Header />
      {/* <BillForm /> */}
      <BillFormHook />
    </>
  )
}

export default App
