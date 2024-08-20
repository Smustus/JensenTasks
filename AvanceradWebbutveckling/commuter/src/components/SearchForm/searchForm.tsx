import React from 'react'
import './searchForm.css'
import Input from '../Input/input'
import Label from '../Label/label'
import { FormState } from '../../interfaces/interfaces'
import { fetchRoutePlanner, fetchStop} from '../../utilities/fetch'

interface SearchFormProps {
  setInputValue: React.Dispatch<React.SetStateAction<FormState>>,
  inputValue: any,
  setSearchResults: React.Dispatch<React.SetStateAction<FormState>>,
  setActiveSection: React.Dispatch<React.SetStateAction<'searchResults' | 'nearby' | null>>,
}

const SearchForm: React.FC<SearchFormProps> = ({setInputValue, inputValue, setSearchResults, setActiveSection}) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { id, value } = e.target;
    
    setInputValue(prevData => ({
      ...prevData,
      [id]: value
    }));   
  };


  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const searchFrom = await fetchStop(inputValue.searchFrom);
    const searchTo = await fetchStop(inputValue.searchTo);

    const originId = searchFrom[0].StopLocation.extId;
    const destId = searchTo[0].StopLocation.extId;

    const routePlanner = await fetchRoutePlanner(originId, destId);
      
    setSearchResults(routePlanner.Trip);
    setActiveSection('searchResults');
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Från</legend>
        {/* <Label htmlFor={'searchFrom'}>Från: </Label> */}
        <Input type={'text'} id={'searchFrom'} name={'searchFrom'} placeholder={'Sök från'} onChange={handleInputChange} />
      </fieldset>
      <fieldset>
      <legend>Till</legend>
        {/* <Label htmlFor={'seachTo'}>Till: </Label> */}
        <Input type={'text'} id={'searchTo'} name={'searchTo'} placeholder={'Sök till'} onChange={handleInputChange} />
      </fieldset>
      <button type='submit'>Sök</button>
    </form>
  )
}

export default SearchForm