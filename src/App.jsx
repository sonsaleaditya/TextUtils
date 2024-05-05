import React, { useState } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutUs from './components/AboutUs';
import Alerts from './components/Alerts';
import Home from './Home';
import Login from './components/Login';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
function App() {
  const [isLight, setMode] = useState(true);
  const [bg, setBg] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (isLight) {
      setMode(false);
      setBg('dark');
      showAlert('dark mode is activated !!', 'Success');
      document.title = 'TextUtilus - Dark Mode';
    } else {
      setMode(true);
      setBg('light');
      showAlert('light mode is activated !!', 'Success');
      document.title = 'TextUtilus - Light Mode';
    }
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Alerts alert={alert}></Alerts>
          <Navbar
            title="Text-Utilus"
            mode={isLight}
            toggleMode={toggleMode}
          ></Navbar>
          <TextForm
            heading="Enter the text to Analyze "
            mode={isLight}
            showAlert={showAlert}
          ></TextForm>
        </>
      )
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/about',
      element: <AboutUs mode={isLight}> </AboutUs>
    }
  ]);

  return (
    <div className={`bg-${bg}  overflow-hidden` } style={{ height: "100vh" , }}  >
   <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
