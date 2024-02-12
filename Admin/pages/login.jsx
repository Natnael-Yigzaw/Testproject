import React from "react"; 

const login = () => {
    return(
        
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
            <div className="input_box">
        <input type ="number" placeholder="Enter phone" required /> 
        </div>
        <div className="input_box">
        <input type ="password" placeholder="password" required /> 
        </div>
        
        <button type="submit">Login </button>
        
            </form>
            </div>
       
    
    );
};
export default login;
