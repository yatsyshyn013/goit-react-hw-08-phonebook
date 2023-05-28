import React from 'react'

import { FindArea } from 'components/Filter/Filter.styled';
import { getFilter } from 'redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';


export function Filter() {
    
    const filteredOption = useSelector(getFilter);
    const dispatch = useDispatch()

    return (
         <label htmlFor="name">
              <FindArea>Find contacts by name</FindArea>
                    <input 
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={(e)=> dispatch(setFilter(e.target.value))}
                value={filteredOption}
                          />
                </label>
    )
   
}
