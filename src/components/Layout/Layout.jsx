import './styles.scss';
import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="header__nav">
                        <NavLink to="/" className={({isActive}) => isActive ? "active-link" : ""}>User</NavLink>
                        <NavLink to="/create-user" className={({isActive}) => isActive ? "active-link" : ""}>Create User</NavLink>
                    </nav>
                </div>
            </header>

            <main className="main">
                <div className="container">
                    <div className="content">
                        <Outlet />
                    </div>
                </div>
            </main>

            <footer className="footer"></footer>
        </>
    );
}
