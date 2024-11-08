import {useAuthStore} from '../store/auth'

function HomePage() {

  const logout = useAuthStore((state) => state.logout)

  return (
    <div>
      <button onClick={logout}>
        Cerrar sesion
      </button>
    </div>
  )
}

export default HomePage
