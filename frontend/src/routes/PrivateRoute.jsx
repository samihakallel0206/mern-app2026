import {Navigate, Outlet} from 'react-router-dom'

const PrivateRoute = ({isAdmin, isAuth, isLoad}) => {
    const hasToken = localStorage.getItem("token");
    // Attente: chargement en cours  ou bien token mais pas 
    if (isLoad || hasToken && !isAuth) return null;
    //pas connecté 
    if (!isAuth) return <Navigate to="/login" replace />

    //connecté mais pas l'admin 
    if(!isAdmin) return <Navigate to="/" replace />;
    
    //succès : c'est l"admin
    return  <Outlet/>
    // return <Navigate to="/admin" replace />; : boucle
}

export default PrivateRoute