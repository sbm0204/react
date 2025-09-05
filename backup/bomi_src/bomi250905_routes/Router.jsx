import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "../components/ProductList.jsx";
import TabUi from "../components/TabUi.jsx";
import App from "../App.jsx"

// 라우터를 정의하는 Router 객체 인스턴스를 생성
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/', // 라우팅 경로를 설정하는 요소입니다. 
        element: <ProductList /> // 랜더링할 컴포넌트를 지정하는 속성입니다. 
      },
      {
        path: '/test',
        element: <TabUi /> 
      }
    ]
  }
]);

function Router() {
  return <RouterProvider router={router}/>
}

export default Router;