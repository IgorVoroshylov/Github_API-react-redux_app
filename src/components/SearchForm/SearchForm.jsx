import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage, setSearchQuery } from '../../redux/repositoriReducer';
import style from './searchform.module.css';

const SearchForm = () => {
   const dispatch = useDispatch();

   return(
      <div className={style.search_wrapper}>
         <Formik
            initialValues={{ search: '' }}
            validate={values => {
            const errors = {};
            if (!values.search) {
               errors.search = 'Поле не должно быть пустым!';
            }
            return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
               dispatch(setCurrentPage(1));
               dispatch(setSearchQuery(values.search));
               setSubmitting(false);
            }}>
            {({ isSubmitting }) => (
               <Form >
                  <div className={style.search}>
                     <Field type="text" name="search" style={{ flex: '1 1 auto'}}/>
                     <button type="submit" disabled={isSubmitting}>
                        Find
                     </button>
                  </div>
                  <div style={{ color: 'red', fontSize: '20px'}}>
                     <ErrorMessage name="search" />
                  </div>
               </Form>
            )}
         </Formik>
      </div>
   )
}

export default SearchForm;