import { Route, Routes } from 'react-router-dom';
import CustomerRouter from './Router/CustomerRouter.jsx'

function App() {
  

  return (
    <>
    <div>
    <Routes>
        <Route path="/*" element={<CustomerRouter/>} />
      </Routes>
    </div>

  </>
  )
}

export default App
