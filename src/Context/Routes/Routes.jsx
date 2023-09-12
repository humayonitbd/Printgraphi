import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Section1 from "../../Pages/HelpLinePage/Section1/Section1";
import HelpLinePage from "../../Pages/HelpLinePage/HelpLinePage/HelpLinePage";
import MyProject from "../../Pages/MyProject/MyProject";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      
      children: [
        {
            path:'/', 
            element:<Home></Home>
        },
        {
            path:'/customer-care/help-center', 
            element:<HelpLinePage />
        },
        {
          path:'/myprojects',
          element:<MyProject/>
        }
        
      ],
    },
  ]);