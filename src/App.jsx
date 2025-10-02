import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/signin';
import SignUp from './pages/signUp';
import About from './pages/about';
import Profile from './pages/Profile';
export default function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin/>} />
            <Route path="signup/" element={<SignUp />} />
                <Route path="about/" element={<About />} />
                    <Route path="profile/" element={<Profile />} />
  </Routes>
    </BrowserRouter>
  )
}
