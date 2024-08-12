import './App.css'
import { BrowserRouter , Routes , Route} from "react-router-dom";
import AllCards from './components/AllCards';
import CreateCards from './components/CreateCards';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import Share from './components/Share';
import Import from './components/Import';
import { Toaster } from "@/components/ui/toaster"

function App() {

  return (
    <section>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/"  element={<AllCards />} /> 
            <Route path="/createCards" element={<CreateCards />} />
            <Route path='/signin' element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/share" element={<Share />} />
            <Route path="/import" element={<Import />} />
          </Routes>
        </BrowserRouter>

      < Toaster />
  </section>
  )
}

export default App
