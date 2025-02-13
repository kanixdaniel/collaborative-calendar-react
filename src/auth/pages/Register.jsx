import { Link } from "react-router"
import { useAuthStore, useForm } from "../../hooks";
import Swal from "sweetalert2";
import { useEffect } from "react";

const initialState = {
    fullName: 'Daniel Perez Gonzalez',
    email: '',
    password: '',
    samePassword: '',
};

export const Register = () => {
    const {
        fullName, email, password, samePassword, formState, onInputChange, onResetForm,
        fullNameError, emailError, passwordError, isPristine
    } = useForm(initialState);
    const { errorMessage, startRegister } = useAuthStore();

    useEffect(() => {
        if (!!errorMessage) {
            Swal.fire('Ha ocurrido un problema', errorMessage, 'error');
        }
    }, [errorMessage])

    const onSubmit = (e) => {
        e.preventDefault();
        if(isPristine) {
            return Swal.fire(
                'Error en formulario',
                'Debe ingresar información en el formulario',
                'error'
            );
        };
        
        if (fullNameError) {
            return Swal.fire(
                'Error en formulario',
                'Debe ingresar un nombre válido',
                'error'
            );
        } else if (emailError) {
            return Swal.fire(
                'Error en formulario',
                'Debe ingresar un correo electrónico válido',
                'error'
            );
        } else if (passwordError) {
            return Swal.fire(
                'Error en formulario',
                'Su contraseña debe de contener al menos 8 caracteres con una minúscula, una mayúscula, un número y un carácter especial',
                'error'
            );
        } else if(password !== samePassword) {
            return Swal.fire(
                'Error en formulario',
                'Las contraseñas deben de ser las mismas',
                'error'
            );
        }
        
        startRegister({fullName, email, password});
    }

    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6">
                    <h3 className="text-center mb-4">Registro</h3>
                    <form onSubmit={onSubmit}>
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="fullName"
                                value={fullName}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input
                                type="email"
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
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña"
                                name="samePassword"
                                value={samePassword}
                                onChange={onInputChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Crear cuenta
                        </button>
                    </form>
                    <p className="text-end">¿Ya tienes una cuenta? <Link to="/auth/login">Inicia sesión</Link></p>
                </div>
            </div>
        </div>
    )
}