import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Listing from './pages/Listing';
import Form from './pages/Form';
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
        <Route path="/404" element={<NotFound />}/>
        <Route path='*' element={<Navigate to="/404" />} />
        Navigate
      </Routes>
    </BrowserRouter>
  );
}

export default App;