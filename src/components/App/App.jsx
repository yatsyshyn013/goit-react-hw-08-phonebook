
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PhoneBookContainer } from './App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Loader } from 'components/Loader/Loader';
import { ThreeDots } from "react-loader-spinner";

import { lazy } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

const Home = lazy(() => import("../../pages/Home"))
const Contacts = lazy(() => import("../../pages/Contacts"))
const Login = lazy(() => import("../../pages/Login"))
const Register = lazy(()=> import("../../pages/Register"))


export default function App() {

  const dispatch = useDispatch()
  const {isRefreshing} = useAuth()

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])
  // const dispatch = useDispatch()
  // const isLoading = useSelector(state => state.contacts.isLoading)
 

  // useEffect(() => {
  //   dispatch(fetchContacts())
  // }, [dispatch])
  
  return isRefreshing
      ? 'Fetching user data'
      : (
        <Routes>
              <Route path='/' element={<SharedLayout/>}>
                <Route index element={<Home />} />
            <Route path='/register' element={
              <RestrictedRoute redirectTo="/contacts" component={<Register />} />
                } />
            <Route path='/login' element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
                } />
            <Route path='/contacts' element={
              <PrivateRoute redirectTo="/contacts" component={<Contacts />} />
            } />
              </Route>
              

            </Routes>
    
    

//     <PhoneBookContainer>
      
//         <h1>PhoneBook</h1>
//         <ContactForm/>
        
//       <h2>Contacts</h2>
//       <Filter />
      
//       {isLoading &&     <ThreeDots 
// height="80" 
// width="80" 
// radius="9"
// color="grey" 
// ariaLabel="three-dots-loading"
// wrapperStyle={{}}
// wrapperClassName=""
// visible={true}
//       />}
//       {!isLoading && <>
        
      
//       <ContactList /></>}
      
      
//         <ToastContainer
//           autoClose={3000}
//           position="top-center"
//           theme="colored"
// />
//       </PhoneBookContainer>
      
    );
}



// export default function App() {

//   const dispatch = useDispatch()
//   const isLoading = useSelector(state => state.contacts.isLoading)
 

//   useEffect(() => {
//     dispatch(fetchContacts())
//   }, [dispatch])
  
//   return (


    
//     <PhoneBookContainer>
      
//         <h1>PhoneBook</h1>
//         <ContactForm/>
        
//       <h2>Contacts</h2>
//       <Filter />
      
//       {isLoading &&     <ThreeDots 
// height="80" 
// width="80" 
// radius="9"
// color="grey" 
// ariaLabel="three-dots-loading"
// wrapperStyle={{}}
// wrapperClassName=""
// visible={true}
//       />}
//       {!isLoading && <>
        
      
//       <ContactList /></>}
      
      
//         <ToastContainer
//           autoClose={3000}
//           position="top-center"
//           theme="colored"
// />
//       </PhoneBookContainer>
      
//     );
// }
