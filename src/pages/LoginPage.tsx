import Logo from '../images/logo/659f6329bfa9da358332d95a.png'
import Video from '../images/gifts/redes-sociales.gif'
import {FaEye, FaEyeSlash} from 'react-icons/fa'
import { useState } from 'react';
import {useMutation} from '@tanstack/react-query'
import { useAuthStore } from '../store/auth';
import { loginRequest } from '../api/users';
import toast from 'react-hot-toast'
import {jwtDecode} from 'jwt-decode'
import {Token} from '../interfaces'
import { Link } from 'react-router-dom';

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const logout = useAuthStore((state) => state.logout)
  const setToken = useAuthStore((state) => state.setToken)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginMutation = useMutation( {
    mutationFn: () => loginRequest(email, password),
    onSuccess: (response) => {
      setToken(response?.data.access, response?.data.refresh)
      const token : string = useAuthStore.getState().access
      const tokenDecoded: Token = jwtDecode(token)
      const first_name = tokenDecoded.first_name
      toast.success(`Bienvenido/a ${first_name}`)
    },
    onError: () => {
      toast.error("Hubo un error")
    }
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    loginMutation.mutate()
  }

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
            <form onSubmit={handleSubmit}>
              <div className="border rounded-md overflow-hidden">
                <input
                  type="email"
                  placeholder="Email"
                  className="block w-full border-b px-4 py-2 focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className='relative'>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="block w-full px-4 py-2 focus:outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
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
              <Link to='/register' className='cursor-pointer'>¿Aun no tienes una cuenta?</Link>
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
