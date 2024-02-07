import React from 'react';
import './login.css'; 
const login = () => {
    return (
        <div div className='wrapper'>
            <form action=''>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type='text' placeholder='username' required/>
                
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='password' required/>
                
                </div>
                
                            </form>
            
            
            </div>
    )
}
export default login;