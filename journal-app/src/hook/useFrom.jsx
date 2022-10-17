import { useState, useEffect, useMemo } from 'react';

export const useForm = ( initialForm = {}, formValidators = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setFormValidation] = useState({})
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    useEffect(() => {
      createValidator()
    }, [formState])

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidator = () => {
        const formCheckValues = {}
        for (const formField of Object.keys( formValidators )) {
             const [fn, errorMessage] = formValidators[formField]
             
             formCheckValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage
        }
        setFormValidation(formCheckValues)
    }

    const isFormValid = useMemo(() => {
       for (const formValue of Object.keys( formValidation )) {
         if( formValidation[formValue] !== null) return false
         return true
       }
    }, [formValidation])
    
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}