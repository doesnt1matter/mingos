import React, { useState } from 'react'

import {Input} from "./"

import UserStore from "../store/UserStore.js";

const AuthForm = () => {
    const [form, setForm] = useState({});

    return (
        <div>
            <div>LOGIN</div>
            <Input name="login" type="text" form={form} setForm={setForm}/>
            <Input name="password" type="text" form={form} setForm={setForm}/>
            <button onClick={() => UserStore.login(form.login, form.password)}>LOGIN</button>
        </div>
    )
}

export default AuthForm