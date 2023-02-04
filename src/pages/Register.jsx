import React from 'react'
import { Link } from 'react-router-dom'
const Register=()=>{

return(
<div className='auth'>
            <h1>إنشاء حساب</h1>
            <form>
                <input  required type="text" placeholder='إسم المستخدم' />
                <input  required type="text" placeholder='البريد الالكتروني'/>
                <input  required type="password" placeholder='كلمة العبور' />
                <button>تسجيل الدخول</button>
                <span> لديك حساب؟
                    <Link to="/login">تسجيل دخول</Link>
                </span>
            </form>

        </div>


)


}
export default Register