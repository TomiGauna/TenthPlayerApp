import styles from './navbar.module.scss';
import CartWidget from '../CartWidget/cartwidget';
import { NavLink } from 'react-router-dom';

const Navbar = () => {


  return (
    <nav className= {styles.navbarcontainer}>
        <NavLink to="/">
            <p className={styles.brandname}><img className={styles.brandicon} src='https://i.ibb.co/SfncxDD/brand-icon.png' />Tenth Player</p>
        </NavLink>

        <NavLink to="/category/nationalteams">
            <p className={styles.menu}>National Teams</p>
        </NavLink>

        <NavLink to="/category/premierleague">
            <p className={styles.menu}>EPL</p>
        </NavLink>

        <NavLink to="category/laliga">
            <p className={styles.menu}>La Liga</p>
        </NavLink>

        <NavLink to="category/serie-a">
            <p className={styles.menu}>Serie A</p>
        </NavLink>

        <NavLink to="category/bundesliga">
            <p className={styles.menu}>Bundesliga</p>
        </NavLink>

        <NavLink to="category/ligue1">
            <p className={styles.menu}>Ligue 1</p>
        </NavLink>

        <NavLink to={"/cart"}>
            <CartWidget 
                icon='https://cdn-icons-png.flaticon.com/512/5087/5087847.png'/>
        </NavLink>
    </nav>
  )
}

export default Navbar