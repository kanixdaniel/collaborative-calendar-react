import { Link } from "react-router"
import { useForm } from "../../hooks";

const initialState = {
    fullName: '',
    email: '',
    password: '',
    samePassword: '',
};

export const Register = () => {
    const { fullName, email, password, samePassword, formState, onInputChange, onResetForm } = useForm(initialState);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
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