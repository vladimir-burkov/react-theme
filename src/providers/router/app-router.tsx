import { createBrowserRouter, RouteObject } from 'react-router-dom'
import App from '../../components/App';
import ChildComponent from '../../components/childComponent';

const routeConfig = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/child",
        element: <ChildComponent />,
    },
];
export const router = createBrowserRouter(routeConfig as unknown as RouteObject[])

