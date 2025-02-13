import { Link } from "react-router"
import { useAuthStore, useForm } from "../../hooks"
import { useEffect } from "react";
import Swal from "sweetalert2";

const initialState = {
    email: '',
    password: ''
};

export const Login = () => {
    const { email, emailError, password, formState, isPristine, onInputChange, onResetForm } = useForm(initialState);
    const { errorMessage, startLogin } = useAuthStore();

    useEffect(() => {
        if (!!errorMessage) {
            Swal.fire('Ha ocurrido un problema', errorMessage, 'error');
        }
    }, [errorMessage])


    const onSubmit = (e) => {
        e.preventDefault();
        if (isPristine) {
            return Swal.fire(
                'Error en formulario',
                'Debe ingresar información en el formulario',
                'error'
            );
        } else if (emailError) {
            return Swal.fire(
                'Error en formulario',
                'El correo electrónico ingresado no tiene el formato correcto',
                'error'
            )
        }

        startLogin(formState);
    }

    return (
        <div className="container-fluid">
            <div className="row align-items-center justify-content-center bg-warning px-2 vh-100">
                <div className="col-md-4 col-lg-3 bg-dark rounded-4 p-4">
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
                        <div className="form-group mb-3">
                            <button type="submit" className="btn btn-warning">
                                Iniciar sesión
                            </button>
                        </div>
                    </form>
                    <p className="text-end">¿No tienes cuenta? <Link className="text-warning" to="/auth/register">Crea una</Link></p>
                </div>
            </div>
        </div>
    )
}