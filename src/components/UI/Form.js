import React from 'react'
import { Input } from './Input'
import { useForm, FormProvider } from "react-hook-form";
import Button from './Button';
import { name_validation } from '../validations/Name_validation';
import { password_validation } from '../validations/Password_validation';
import { email_validation } from '../validations/Email_validation';
import { desc_validation } from '../validations/Desc_validation';
import { Age_validation } from '../validations/Age_validation';
export default function Form() {


    const methods = useForm();
    //const {} = useForm();
    //console.log(methods)

    const onSubmitForm = methods.handleSubmit(data => {
        console.log(data)
        methods.reset()
    })
    return (
        <FormProvider {...methods} >
            <div className='mt-5'>
                <form className='row g-3'
                    onSubmit={e => e.preventDefault()}
                    noValidate
                >
                    <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                        <Input {...name_validation} />
                        <Input {...password_validation} />
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                        <Input {...email_validation} />
                        <Input {...Age_validation} />
                    </div>
                    <Input {...desc_validation} />
                    <div className='mb-3'>
                        <Button styles='btn btn-primary' text='Submit' onClickFun={onSubmitForm} />
                    </div>
                </form>
            </div>
        </FormProvider>
    )
}
