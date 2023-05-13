
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import {Layout} from './views/client/components/layout'
import {Home} from './views/client/pages/Home'
import { About } from './views/client/pages/About'
import { Products } from './views/client/pages/Products'
import { Contact } from './views/client/pages/Contact'

function App() {

  return (
    <>
    {/* <h1 className="text-5xl text-emerald-600 font-bold underline">
      Hello world!
    </h1> */}
     <Router>
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </Layout>
    </Router>

    </>
  )
}

export default App
