import { Link } from "react-router"


export const Register = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6">
                    <h3 className="text-center mb-4">Registro</h3>
                    <form>
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input
                                type="email"
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

                        <div className="form-group mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña"
                            />
                        </div>

                        <button className="btn btn-primary">
                            Crear cuenta
                        </button>
                    </form>
                    <p className="text-end">¿Ya tienes una cuenta? <Link to="/auth/login">Inicia sesión</Link></p>
                </div>
            </div>
        </div>
    )
}