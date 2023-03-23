import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function NotesForm() {
  return (
    <Formik initialValues={{ title: "", body:""}}
            validate={ values =>{
                const errors = {};
                if(!values.title){
                    errors.title = "El título es requerido"
                }else if (!values.message){
                    errors.message= "El mensaje es requerido"
                }
return errors;

            }}
    >
{
    ({isSubmitting}) =>(
        <Form className='form'>
        <div>
          <label htmlFor="title">Título</label>
          <Field type="text" name="title" />
          <ErrorMessage name="title" component="p" />
        </div>
        <div>
          <label htmlFor="body">Qué quieres guardar</label>
          <Field as="textarea" name="message" />
          <ErrorMessage name="message" component="p" />
        </div>
        <button type='submit' disabled={isSubmitting}>
            {isSubmitting ? "Guardando tu nota" : "Guardar nota"}
        </button>
        
      </Form>
    )
}
    </Formik>
  )
}

export default NotesForm;