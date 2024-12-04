import {useAuthStore} from '../store/auth'
import LogOut from '../images/other/logout.jpg'
import { options } from '../data/options'
import { Token } from '../interfaces'
import { jwtDecode } from 'jwt-decode'

function HomePage() {

  const token: string = useAuthStore.getState().access
  const tokenDecoded: Token = jwtDecode(token)

  const logout = useAuthStore((state) => state.logout)

  return (
    <div className='grid grid-cols-5 gap-5 p-8'>
      <section className='col-span-1 grid grid-rows-6'>
        <div className='text-center row-span-1'>
          <div className='w-full relative'>
            <img src={LogOut} alt="User profile" className='cursor-pointer h-20 w-20 absolute object-cover hidden -translate-x-6 rounded-full md:left-28 md:flex border-stone-200 border' onClick={logout} />
            <img src={`${import.meta.env.VITE_API_IMAGE_URL}${tokenDecoded.image}`} alt="User profile" className='h-20 w-20 absolute object-cover rounded-full translate-x-3 hidden md:right-24 md:flex' />
          </div>
          <div className='mt-20'>
            <p className='text-gray-900 font-bold text-lg'>{tokenDecoded.first_name}</p>
            <p className='text-sm text-gray-500'>@{tokenDecoded.username}</p>
          </div>
        </div>
        <div className='max-h-96 row-span-4 grid grid-rows-6 gap-2 p-8'>
        {options.map(option => (
          <div className='rounded-xl hover:bg-gray-100 transition-all px-8 flex items-center gap-4 cursor-pointer'>
            <option.icon className='text-lg' />
            <p className='font-bold'>{option.title}</p>
          </div> 
        ))}
        </div>
      </section>
      <section className='col-span-3'>
        <nav className='flex sticky'>
          <p className='text-2xl font-bold flex items-center'>Feeds</p>

          <div className='flex flex-1' />

          <div className='flex gap-3 text-gray-800 font-semibold mt-1'>
            <p>Recents</p>
            <p>Friends</p>
            <p>Popular</p>
          </div>
        </nav>

        
      </section>
      <section className='col-span-1'>
        section 3
      </section>

    </div>
  )
}

export default HomePage
