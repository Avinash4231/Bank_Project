import { Link } from "react-router-dom";

const Menu = () => {
    return(
        <div>
            Welcome to Menu Page <br/> 
            <Link to="/addaccount">Add Account</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/showaccount">Show Account</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/accountsearch">Search Account</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/depositaccount">Deposit Account</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            
        </div>
    )
}

export default Menu;