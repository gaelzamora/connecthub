import {useAuthStore} from '../store/auth'
import PersonProfile from '../images/other/person1jpg.jpg'
import LogOut from '../images/other/logout.jpg'
import { options } from '../data/options'

function HomePage() {

  const logout = useAuthStore((state) => state.logout)

  return (
    <div className='grid grid-cols-5 gap-5 p-8'>
      <section className='col-span-1 grid grid-rows-6'>
        <div className='text-center row-span-1'>
          <div className='w-full relative'>
            <img src={LogOut} alt="User profile" className='cursor-pointer h-20 w-20 absolute object-cover hidden -translate-x-6 rounded-full md:left-28 md:flex border-stone-200 border' onClick={logout} />
            <img src={PersonProfile} alt="User profile" className='h-20 w-20 absolute object-cover rounded-full translate-x-3 hidden md:right-24 md:flex' />
          </div>
          <div className='mt-20'>
            <p className='text-gray-900 font-bold text-lg'>Yourname</p>
            <p className='text-sm text-gray-500'>@Yourname</p>
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
        section 2
      </section>
      <section className='col-span-1'>
        section 3
      </section>

    </div>
  )
}

export default HomePage
