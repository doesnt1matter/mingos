import React, { useState } from 'react'

import { Input } from "./"

import UserStore from "../store/UserStore.js";

const AuthForm = () => {
    const [form, setForm] = useState({});
    const [formType, setFormType] = useState(0);

    return (
        <div className="form">
            {
                formType
                    ?
                    <div className="form__login">
                        <div>LOGIN</div>
                        <Input name="login" type="text" form={form} setForm={setForm} />
                        <Input name="password" type="text" form={form} setForm={setForm} />
                        <button onClick={() => UserStore.login(form.login, form.password)}>LOGIN</button>
                    </div>
                    :
                    <div className="form__reg">
                        <div>REGISTRATION</div>
                        <Input name="name" type="text" form={form} setForm={setForm} />
                        <Input name="surname" type="text" form={form} setForm={setForm} />
                        <Input name="patronymic" type="text" form={form} setForm={setForm} />
                        <Input name="telephone" type="text" form={form} setForm={setForm} />
                        <Input name="email" type="text" form={form} setForm={setForm} />
                        <Input name="password" type="text" form={form} setForm={setForm} />
                        <button onClick={() => UserStore.registration(form.name, form.surname, form.patronymic, form.telephone, form.email, form.password)}>REGISTRATION</button>
                    </div>
            }
            <br />
            <div onClick={() => {setFormType(!formType)}}>{formType ? "Еще нет аккаунта" : "Уже есть аккаунт"}</div>
        </div>
    )
}

export default AuthForm