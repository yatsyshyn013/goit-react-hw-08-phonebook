import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { LabelText, ButtonForm, Label, FormComponent } from './ContactForm.styled';
import { toast } from 'react-toastify';
import { getContact } from 'redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';


export function ContactForm() {
   
    const contacts = useSelector(getContact);
    const dispatch = useDispatch();

    const initialValues = {
        name: '',
        number: '',
    }

    const schema = yup.object().shape({
        name: yup.string().required(),
        number: yup.string().required()
    })

    function handleSubmit(values, {resetForm}) {
        
        const isDuplicate = contacts.some( contact => contact.name.toLowerCase() === values.name.toLowerCase())

        if (isDuplicate) {
            toast.error(`${values.name} is already in contacts`);
            resetForm();
            return
            
        } else {

           dispatch(addContact({ name: values.name.trim(), number: values.number.trim() }));
            resetForm();
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={schema}
        >
          <FormComponent action="">
            <Label htmlFor="name">
              <LabelText>Name</LabelText>
                    <Field 
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                          />
                </Label>
                
                <Label htmlFor="number">
                   <LabelText>Phone number</LabelText> 
                    <Field
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    
                    </Label>
            <ButtonForm type="submit">Add contact</ButtonForm>
            </FormComponent>
             
      </Formik>
   )
} 


