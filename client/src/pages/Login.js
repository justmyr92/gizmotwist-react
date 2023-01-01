import React from 'react'

const Login = () => {
    return (
        <section className="login-section">
            <div className="container">
                <div className="row">
                    <div className="col-1">
                    </div>
                    <div className="col-2">
                        <form action="#" method="post">
                            <div className="form-control">
                                <label htmlFor="username">Username</label>
                                <input type="text" placeholder='Username' id='username' />
                            </div>
                            <div className="form-control">
                                <label htmlFor="password">Username</label>
                                <input type="password" placeholder='Password' id='password' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login