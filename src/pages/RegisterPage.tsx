import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { Link } from "react-router-dom"
import { registerRequest } from "../api/users"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import Logo from '../images/logo/659f6329bfa9da358332d95a.png'
import {users} from "../data/users"

function RegisterPage() {
  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  const registerMutation = useMutation({
    mutationFn: () => registerRequest(email, first_name, last_name, password),
      onSuccess: () => {
        toast.success("Register successful !")
        navigate("/")
      },
      onError: () => {
        toast.error("Error!")
        console.log("Error")
      }
  })

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    registerMutation.mutate()
  }

  return (
    <div className="grid grid-cols-6 h-screen">
      <section className="col-span-2 bg-[#005eff] h-full relative">
        <img src={Logo} alt="Logo" className="h-8 absolute left-4 top-4" />
          <div className="mt-36 px-10">
            <p className="text-gray-100 text-5xl font-bold">
              Let's meet new people only in 
              <span className="text-gray-800"> ConnectHub</span>
            </p>
            <p className="text-md text-gray-200 font-semibold mt-10">All-in-one solution to for your business in the state. Form a new company from scratch or onboard your existing US company.</p>
          </div>
        <div className="bg-[#004cdf] relative w-3/4 mx-auto mt-10 p-4 rounded-xl">
          {users.map(user => (
            <>
              <p className="text-xl text-gray-100">{user.title}</p>
              <p className="text-xs pt-4 text-gray-200">{user.content}</p>
              <img src={user.photo} alt="User profile" className="h-10 w-10 mt-3 rounded-full object-cover" />
              <p className="text-gray-100 absolute left-16 bottom-6">{user.name}</p>
            </>
          ))}
        </div>
      </section>
      <section className="col-span-4">
        <div className="mt-44 w-2/3 mx-auto text-center">
          <p className="text-3xl font-semibold">Create an account</p>
          <div className="my-10 w-2/3 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="border rounded-md overflow-hidden">
                <input 
                  type="text" 
                  placeholder="First Name"
                  className="block w-full border-b px-4 py-2 focus:outline-none"
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  />

                <input 
                  type="text" 
                  placeholder="Last Name"
                  className="block w-full border-b px-4 py-2 focus:outline-none"
                  onChange={(e) => setLastName(e.target.value)}
                  value={last_name}
                  required
                  />

                <input 
                  type="email" 
                  placeholder="Email"
                  className="block w-full border-b px-4 py-2 focus:outline-none"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  />

                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="block w-full px-4 py-2 focus:outline-none"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-3 text-gray-500"
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
              </div>
              <button 
                type="submit" 
                className="bg-blue-500 text-white w-full rounded-md mt-5 py-2.5">
                  Create an account
                {registerMutation.isPending && (
                  <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                  </svg>
                )}
              </button>
            </form>


            <div className="text-center mt-32">
              <p className="text-gray-600 text-sm">Already have an account? <Link to={'/'} className="font-bold">Log In</Link></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RegisterPage
