import React,{useContext, useEffect, useState} from "react";
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'



function Account() {
  const [messageError,setmessageError] = React.useState('')
    const auth = useContext(AuthContext)
    const {loading, request} = useHttp()
    const [form, setForm] = useState({
      email: '', password: '',Name: '',Surname: ''
    })
    
      useEffect(() => {
        console.log(window)
      }, [])
    

      const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
      }
    
      const registerHandler = async () => {
        try {
          const data = await request('/api/auth/register', 'POST', {...form})
          setmessageError(data.message)
        } catch (e) {
          setmessageError(e.message)
        }
      }
    
      const loginHandler = async () => {
        try {
          const data = await request('/api/auth/login', 'POST', {...form})
          auth.login(data.token, data.userId)
        } catch (e) {}
      }
      
    return(
        <main>
        <div className="special user-form">
            <div className="container">
                <div className="title">Авторизация</div>
                <p className="description">Авторизуйтесь в системе, чтобы получить доступ к вашим курсам</p>
                <div className="form-default form-theme__default" > 
                <p className="help-block help-block-error">{messageError}</p>  
                    <div className="form-group field-loginform-username required">
                        <input 
                        type="text" 
                        id="loginform-username" 
                        className="form-control" 
                        name="Name" 
                        value={form.Name}
                        placeholder="Имя" 
                        onChange={changeHandler}
                        
                        />
                        <p className="help-block help-block-error"></p>
                    </div> 
                    <div className="form-group field-loginform-username required">
                        <input 
                        type="text" 
                        id="loginform-username" 
                        className="form-control" 
                        name="Surname" 
                        placeholder="Фамилия" 
                        value={form.Surname}
                        onChange={changeHandler}
                        />
                        <p className="help-block help-block-error"></p>
                    </div>   
                    <div className="form-group field-loginform-username required">
                        <input 
                        type="text" 
                        id="loginform-username" 
                        className="form-control" 
                        name="email" 
                        value={form.email}
                        placeholder="Email" 
                        onChange={changeHandler}
                        />
                    </div>        
                    <div className="form-group field-loginform-password required">
                        <input type="password" 
                        id="loginform-password" 
                        className="form-control" 
                        name="password" 
                        value={form.password}
                        placeholder="Пароль" 
                        onChange={changeHandler}
                        />
                    </div>      
                    <div className="btn-wrapper">
                        <button type="submit" className="btn btn-primary" name="login-button"
                         onClick={loginHandler}
                         disabled={loading}
                        >Войти
                        </button>  
                        <button type="submit" className="btn btn-primary" name="login-button"
                        onClick={registerHandler}
                        disabled={loading}
                        >Регистрация
                        </button>     
                    </div>
                </div>
                <p className="forget-link">
                    <a href="#">Забыли пароль?</a>
                </p>
            </div>
        </div>
        </main>
    )
    
}

export default Account;