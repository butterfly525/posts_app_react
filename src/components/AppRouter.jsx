import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/routes'
import Error from '../pages/Error';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';


const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Routes>
            {isAuth 
                ? privateRoutes.map(({ path, component: Component }) => (
                    <Route
                        key={path} // Уникальный ключ для каждого маршрута
                        path={path}
                        element={<Component />}
                    />
                ))
                : publicRoutes.map(({ path, component: Component }) => (
                    <Route
                        key={path} // Уникальный ключ для каждого маршрута
                        path={path}
                        element={<Component />}
                    />
                ))
            }
            <Route path='*' element={<Navigate to={isAuth ? "/posts" : "/login"} replace />} />
        </Routes>
    );
}


export default AppRouter;