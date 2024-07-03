import { NavLink } from "react-router-dom";

function NavBar () {

    const activeStyle = {
       backgroundColor: 'purple',
        color: 'white'
    }

    return(
        <div>
            <ul>
                <li><NavLink to ="/main" style = {({isActive}) => isActive? activeStyle: undefined }>HOME</NavLink></li>   
                <li><NavLink to ="/search" style = {({isActive}) => isActive? activeStyle: undefined }>조회하기</NavLink></li>   
                  
            </ul>

        </div>
    );
}

export default NavBar;