import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/Redux/store";

//components
import {
  Navbar,
  SignUp,
  Footer,
  AppBackgroundImage,
  Login,
} from "./components/index";
//pages
import {
  Landing,
  ErrorPage,
  Contact,
  About,
  Features,
  TermsCondition,
} from "./pages/index";

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className="relative font-[Nunito]">
          <AppBackgroundImage />
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/signin",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/pricing",
        element: <ErrorPage />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/terms",
        element: <TermsCondition />,
      },
    ],
  },
]);

export default App;
