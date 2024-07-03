import Header from './compoent/Header'
import NavBar from './compoent/NavBar'
import {Outlet} from 'react-router-dom'

function Layout () {
    return(

        <>
        <Header/>
        <NavBar/>
        <Outlet/>
      </>

    );
 
}

export default Layout;