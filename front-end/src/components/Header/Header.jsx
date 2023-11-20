import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setToken, setUser} from "../../redux/actions/userActions";
import {useNavigate} from "react-router";

const Header = () => {

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(setToken(null));
        dispatch(setUser(null))
        navigate('/')
    }

    return (
        <header>
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img
                        className="main-nav-logo-image"
                        src="../../assets/img/argentBankLogo.png"
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    {user.data && user.token ? (
                        <>
                            <p className="main-nav-item" onClick={logout}>
                                <i className="fa fa-user-circle"></i>
                                Log out
                            </p>
                        </>
                    ) : (
                        <Link className="main-nav-item" to="/login">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </Link>
                    )
                    }
                </div>
            </nav>
        </header>
    )
}

export default Header;