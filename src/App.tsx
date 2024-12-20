import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useAuthStore} from '../src/store/auth.ts'
import HomePage from '../src/pages/HomePage.tsx'
import LoginPage from '../src/pages/LoginPage.tsx'
import RegisterPage from './pages/RegisterPage.tsx'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {

  const {isAuth} = useAuthStore()

  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={isAuth ? <HomePage /> : <LoginPage />} />
        <Route index path='/register' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
