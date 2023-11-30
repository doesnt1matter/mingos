import React, { useEffect, useState } from 'react'
import UserStore from "../store/UserStore.js";

const Account = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        if (UserStore.isAuth) setUser(UserStore.user);

        return () => {
            setUser({})
        }
    }, [])

    return (
        <div className="account">
            <div className="account__wrap">
                {UserStore.isAuth
                    ?
                    <h1>{user.surname} {user.name} {user.patronymic}</h1>
                    : <h1>Пользователь не авторизован</h1>
                }
            </div>
        </div>
    )
}

export default Account