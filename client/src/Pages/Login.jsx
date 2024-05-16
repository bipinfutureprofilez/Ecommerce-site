import React from 'react'
// import Logo from '../logo.svg';

export default function Login() {
  return (
    <>
        <div className='login_sec py-5'>
            <div className='container'>
                  <div className='card p-5 w-50 mx-auto'>
                      <form>
                          {/* <img class="mb-4" src={Logo} alt="" width="72" height="57" /> */}
                          <h1 class="h3 mb-3 fw-bold text-center">Please sign in</h1>

                          <div class="form-floating mb-3">
                              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                              <label for="floatingInput">Email address</label>
                          </div>
                          <div class="form-floating mb-3">
                              <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                              <label for="floatingPassword">Password</label>
                          </div>

                          <div class="checkbox mb-3">
                              <label>
                                  <input type="checkbox" value="remember-me" /> Remember me
                              </label>
                          </div>
                          <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                      </form>
                  </div>
            </div>
        </div>
    </>
  )
}
