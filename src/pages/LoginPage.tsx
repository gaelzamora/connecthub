import Logo from '../images/logo/659f6329bfa9da358332d95a.png'
import Video from '../images/gifts/redes-sociales.gif'
import {FaEye, FaEyeSlash} from 'react-icons/fa'
import { useState } from 'react';

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  return (
    <div className="relative">

      <img src={Logo} alt="Logo" className='h-10 absolute left-4 top-4 cursor-pointer' />

      <section className="grid md:grid-cols-2 w-8/12 mx-auto py-32">
        <div className="py-10 text-center">
          <p className="font-bold text-2xl">Login</p>
          <p className="text-gray-400 text-xs mt-4">Hi, Welcome to Connecthub👋</p>
          <div className="my-10 w-1/2 mx-auto">
            <form >
              <div className="border rounded-md overflow-hidden">
                <input
                  type="email"
                  placeholder="Email"
                  className="block w-full border-b px-4 py-2 focus:outline-none"
                />
                <div className='relative'>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="block w-full px-4 py-2 focus:outline-none"
                  />
                  <button
                    type='button'
                    onClick={togglePasswordVisibility}
                    className='absolute right-3 top-3 text-gray-500'
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

              </div>

              <button 
                type="submit" 
                className="bg-blue-500 text-white w-full rounded-md mt-5 py-3.5"
                >
                Login
              </button>
            </form>

            <div className="grid md:grid-cols-2 text-xs text-gray-400 mt-8">
              <p>¿Aun no tienes una cuenta?</p>
              <p>¿Olvidaste tu contraseña?</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg w-96 mx-auto shadow-lg ">
          <div className='text-center py-12 font-semibold text-gray-600'>
            <p className='text-2xl font-semibold px-8'>Explora, Descubre, Haz Comunidad, Platica y Mas...</p>
            <p className='text-sm mt-2 '>Encuentra sobre nosotros {'>'} </p>
          </div>
          <img src={Video} alt='Gift' className='rounded-b-md'></img>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
