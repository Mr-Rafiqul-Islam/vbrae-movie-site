import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./pages/ErrorPage";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route path="/" element={<Home />}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Route>
      
  )
);
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
