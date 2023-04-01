import { Provider } from "react-redux";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import store from "./utils/store";
import MainLayout from "./components/MainLayout";
import WatchPage from "./components/WatchPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainLayout />,
        },
        { path: "watch", element: <WatchPage /> },
      ],
    },
  ]);
  return (
    <>
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter} />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
