import React, { useState, useEffect } from 'react'
import { useAuth } from '../auth-context'

const Auth = props => {
    const { history } = props;
    const { login, token } = useAuth()
    const [formValues, setFormValues] = useState({})

    const handleInput = field => event => {

        event.preventDefault()

        setFormValues({
            ...formValues,
            [field]: event.target.value
        })
    }

    const handleLogin = () => {
        login(formValues)
    }

    useEffect(() => {
        if(token){
            history.push('/')
        }
    }, [token, history])

    return (
        <div>
            <div>
                <div>
                    <label htmlFor='email-input'>
                        Email
                    </label>
                    <input id='email-input' onChange={handleInput('email')}/>
                </div>

                <div>
                    <label htmlFor='password-input'>
                        Password
                    </label>
                    <input id='password-input' onChange={handleInput('password')} type='password'/>
                </div>

                <button onClick={handleLogin}>Login!</button>
            </div>

        </div>
    )

}

export default Auth