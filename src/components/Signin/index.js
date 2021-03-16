import React from 'react';
import {
Container,
FormWrap,
Icon,
FormContent,
Form,
FormH1,
FormLabel,
Text,
FormInput,
FormButton
}
from './SigninElements';

const SignIn = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to='/'>Tabish</Icon>
                <Form action='#'>
                    <FormH1>Sign in to your account</FormH1>
                    <FormLabel>Email</FormLabel>
                    <FormInput type='text' required/>
                    <FormLabel>Password</FormLabel>
                    <FormInput type='password' required/>
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Forgot password</Text>
                </Form>
            </FormWrap>
        </Container>
    )
}

export default SignIn
