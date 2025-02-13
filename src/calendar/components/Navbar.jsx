import { useAuthStore } from "../../hooks"

export const Navbar = () => {
    const { startLogout, user } = useAuthStore();

    return (
        <div className="navbar mb-4 px-4">
            <span>
                <i className="fas fa-calendar-alt"></i>
                &nbsp;
                {user.fullName}
            </span>
            <button onClick={startLogout} className="btn btn-outline-danger">
                <span>Salir</span>
                &nbsp;&nbsp;
                <i className="fas fa-sign-out-alt"></i>
            </button>
        </div>
    )
}
