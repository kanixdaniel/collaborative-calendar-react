import { useAuthStore, useCalendarStore } from "../../hooks"

export const Navbar = () => {
    const { startLogout, user } = useAuthStore();
    const { isLoadingEvents } = useCalendarStore();

    return (
        <div className="navbar mb-4 px-4">
            <span>
                <i className="fas fa-calendar-alt"></i>
                &nbsp;&nbsp;
                {user.fullName}
            </span>
            {
                isLoadingEvents && (
                    <div className="spinner-grow text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )
            }
            <button onClick={startLogout} className="btn btn-outline-danger">
                <span>Salir</span>
                &nbsp;&nbsp;
                <i className="fas fa-sign-out-alt"></i>
            </button>
        </div>
    )
}
