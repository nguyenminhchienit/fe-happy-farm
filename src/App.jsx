import { Routes, Route } from 'react-router-dom';
import Home from './pages/public/Home/Home';
import DetailsPage from './pages/public/Details';
import NotFound from './pages/public/NotFound';
import SignIn from './pages/public/SignIn';
import SignUp from './pages/public/SignUp';
import PublicLayout from './pages/public/PublicLayout';

// layout Admin
import AdminLayout from './pages/admin/AdminLayout'

function App() {
  return (
    <div className="App">
      <Routes>


        {/* layout client */}
        <Route path="/" element={<PublicLayout />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product/:id" element={<DetailsPage />} />
          <Route exact path="/signIn" element={<SignIn />} />
          <Route exact path="/signUp" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* layout admin */}
        <Route path='/admin/v1' element={ <AdminLayout/> } >
        
        </Route>
        


      </Routes>
    </div>
  );
}

export default App;
