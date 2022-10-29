import React from 'react'

export const Login = () => {
  return (
    <div className='bg-light d-flexflex-column min-vh-100 '>

      <form className='w-75 p-4 m-auto'>
        <h2 className='text-center text-dark'>Login</h2>
        <div className="form-floating mb-3 justify-content-center">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">Password</label>
        </div>
        <button className='btn btn-outline-dark w-100 mt-3 text-uppercase fw-bold'>Log In</button>
      </form>
      <form className='w-75 p-4 m-auto mt-4'>
        <h2 className='text-center text-dark'>Register</h2>
        <div className="form-floating mb-3 ">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">Password</label>
        </div>
        <div className="form-floating mb-3">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">Repeat Password</label>
        </div>
        <button className='btn btn-outline-dark w-100 mt-3 text-uppercase fw-bold'>REgister</button>
      </form>
    </div>
  )
}
