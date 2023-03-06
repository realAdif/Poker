import './index.css';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import StorageIcon from '@mui/icons-material/Storage';

const Sidebar = ()=>{
    
    return(
    <nav className='navbar'>
        <ul className='navbar-nav'>
            <li className='nav-item'>
                <a href='#' className="nav-link">
                    <svg><HomeIcon/> </svg> 
                    <span className='link-text'>Home</span>
                </a>
                <a href='#' className="nav-link">
                    <svg><PersonIcon/> </svg> 
                    <span className='link-text'>Player</span>
                </a>
                <a href='#' className="nav-link">
                    <svg><PersonAddAlt1Icon/> </svg> 
                    <span className='link-text'>Add Players</span>
                </a>
                <a href='#' className="nav-link">
                    <svg><StorageIcon/> </svg> 
                    <span className='link-text'>Database</span>
                </a>
            </li>
        </ul>
    </nav>
       
    )
}
export default Sidebar