import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    return (
        <div className='auth'>
            <h1>تسجيل الدخول</h1>
            <form>
                <input required type="text" placeholder='إسم المستخدم' />
                <input  required type="password" placeholder='كلمة العبور' />
                <button>تسجيل الدخول</button>
                <span>ليس لديك حساب؟
                    <Link to="/register"> قم بنشأ حساب</Link>
                </span> 
            </form>

        </div>


    )


}
export default Login


