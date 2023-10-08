import css from './Searchbar.module.css'
import React, {  useState } from 'react'


export function Searchbar({onSubmit}) {
  const [inputValue, setInputValue] = useState('');

    const  handleValueChange = ({target: {value}}) => {
      setInputValue( value.toLowerCase())
    };

  const  handleSubmit = evt => {
        evt.preventDefault();
        if(!inputValue.trim()){
            return
        }
        onSubmit(inputValue);
        setInputValue( '' )
    }
  return (
    <header className={css.Searchbar}>
      <form onSubmit={handleSubmit} className={css.SearchForm}>
        <button type="submit" className={css['SearchForm-button']}>
          <span className={css['SearchForm-button-label']}>Search</span>
        </button>
    
        <input
          className={css['SearchForm-input']}
          type="text"
        //   autocomplete="off"
        //   autofocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleValueChange}
        />
      </form>
    </header>
  )
}

