import React from 'react'

import logo from '../images/logo.png';


const Navbar = () => {

    return (
        <div className="container disp">
            <nav className="navbar navbar-light bg-light justify-content-center" >
                <button className="btn btn-success ">تسجيل الدخول </button>
                <button className="btn btn-white  mx-2">إنشاء حساب</button>
                <nav className="navbar mx-5">

                    <div className="d-flex">
                        <a className="nav-link mr-5 mx-2 " href=" ">تواصل معنا

                        </a>
                        <a className="nav-link mr-5 mx-2" href=" ">الفعاليات</a>
                        <a className="nav-link mr-5 mx-2 dropdown-toggle" href=" ">من نحن</a>
                        <a className="nav-link  mx-4 " href=" ">الرئيسية</a>
                    </div>
                         <img src={logo} alt="logo" style={{ height: '30px', width: '100px',alignContent:"right" }}  /> 
                </nav>
            </nav>
        </div>




    )


}
export default Navbar;
