import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message"

export const Input = ({ label, type, id, placeholder, name, validation, multiline }) => {

    //console.log(useFormContext())
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="mb-3">
            <div className='d-flex justify-content-between mb-2'>
                <label htmlFor={id} className="form-label">{label}</label>
                <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => <p className='badge text-bg-danger text-center'>{message}</p>}
                />
              
            </div>
            {multiline ?
                (<textarea
                    className='form-control'
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    {...register(name, validation)}
                >
                </textarea>)
                : (<input
                    type={type}
                    className="form-control"
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    {...register(name, validation)}
                    
                />)}

        </div>
    )
}

