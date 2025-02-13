import { Link } from "react-router"
import { useAuthStore, useForm } from "../../hooks"
import { useEffect } from "react";
import Swal from "sweetalert2";

const initialState = {
    email: '',
    password: ''
};

export const Login = () => {
    const { email, password, formState, onInputChange, onResetForm } = useForm(initialState);
    const { errorMessage, startLogin } = useAuthStore();

    useEffect(() => {
        if(!!errorMessage) {
            Swal.fire('Ha ocurrido un problema', errorMessage, 'error');
        }
    }, [errorMessage])
    

    const onSubmit = (e) => {
        e.preventDefault();
        startLogin(formState);
    }

    return (
        <div className="container-fluid">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-6">
                    <h3 className="mb-4">Ingreso</h3>
                    <form onSubmit={onSubmit}>
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="email"
                                value={email}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="password"
                                value={password}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <button type="submit" className="btn btn-primary">
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