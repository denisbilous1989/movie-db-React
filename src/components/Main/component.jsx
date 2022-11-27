import { Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home'

import './style.scss'

const Main = () => (
  <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={(<div>search page</div>)} />
        <Route path="details" element={(<div>users page</div>)}>
           <Route path=":userId" element={(<div>userId page</div>)} />
        </Route>
        <Route
           path="*"
           element={
           <main>
              <p>There's nothing here!</p>
           </main>
           }
        />
      </Routes>
  </main>
)

export default Main;

