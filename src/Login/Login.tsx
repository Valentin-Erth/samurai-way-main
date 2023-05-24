import React from 'react';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import {useFormik} from "formik";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}
export const Login = () => {
    const formik = useFormik({
        initialValues:{
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            console.log(values)
            const errors: FormikErrorType = {}

            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.password) {
                errors.password = "Required"
            } else if (values.password.length < 3) {
                errors.password = 'Password should be more 3 symbols'
            }
            return errors
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
            // console.log(values)
            // dispatch(loginTC(values))
            // formik.resetForm();

        },
    })
    return (
            <Grid container justifyContent={'center'}>
            <Grid item justifyContent={'center'}>
                <form onSubmit={()=>{alert("HHHHHHHH")}}>
                    <FormControl>
                       <FormGroup>
                            <TextField label="Email" margin="normal"
                                       {...formik.getFieldProps('email')}/>
                            {formik.touched.email && formik.errors.email ?
                                <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                            <TextField type="password" label="Password"
                                       margin="normal" name={"password"} onBlur={formik.handleBlur}
                                       onChange={formik.handleChange}
                                       value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password ?
                                <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
                            <FormControlLabel label={'Remember me'}
                                              control={<Checkbox onChange={formik.handleChange}
                                                                 checked={formik.values.rememberMe} name={"rememberMe"}/>}/>
                            <Button type={'submit'} variant={'contained'} color={'primary'}>
                                Login
                            </Button>
                        </FormGroup>
                    </FormControl>
                </form>
            </Grid>
        </Grid>
    );
};

