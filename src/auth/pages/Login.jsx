import { Link } from "react-router"

export const Login = () => {
    return (
        <div className="container-fluid">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-6">
                    <h3 className="mb-4">Ingreso</h3>
                    <form>
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <button className="btn btn-primary">
                                Iniciar sesión
                            </button>
                        </div>
                    </form>
                    <p className="text-end">¿No tienes cuenta? <Link to="/auth/register">Crea una</Link></p>
                </div>
            </div>
        </div>
    )
}