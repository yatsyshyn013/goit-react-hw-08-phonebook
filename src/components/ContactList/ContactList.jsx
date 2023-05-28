import { List, ListItem, ContactListBtn } from "./ContactList.styled"
import { getContact, getFilter } from 'redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from "redux/contacts/operations";



export function ContactList() {

    const contacts = useSelector(getContact);


    const filtered = useSelector(getFilter)
    const dispatch = useDispatch();

  


       const getFilteredContacts = () => {
         const normalizeFilter = filtered.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
  }

    return (
        <List>

            {getFilteredContacts().map(({ id, name, number }) => 
                 (
                
                    <ListItem key={id}>{name}: {number}
                        <ContactListBtn type="button" onClick={() => dispatch(deleteContact(id))}>Delete</ContactListBtn>
                    </ListItem>
                    
                
                )
            )}
           
        </List>
    )
}

