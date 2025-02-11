export const Navbar = () => {
    return (
        <div className="navbar mb-4 px-4">
            <span>
                <i className="fas fa-calendar-alt"></i>
                &nbsp;
                Daniel Perez
            </span>
            <button className="btn btn-outline-danger">
                <i className="fas fa-sign-out-alt"></i>
                &nbsp;
                <span>Salir</span>
            </button>
        </div>
    )
}
