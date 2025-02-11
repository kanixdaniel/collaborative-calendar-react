import { addHours } from 'date-fns';
import { useState } from 'react';
import Modal from 'react-modal';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { es } from 'date-fns/locale';

registerLocale('es', es);

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const ModalEvent = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [formValues, setFormValues] = useState({
        title: 'Cumpleaños Mateo',
        notes: 'Falta el pastel',
        start: new Date(),
        end: addHours(new Date(), 2),
    });

    const onInputChange = ({ target }) => {
        const { value, name } = target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    }

    const onDateChange = (dateType, value) => {
        setFormValues({
            ...formValues,
            [dateType]: value
        });
    }

    const onCloseModal = () => {
        setIsOpen(false);
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            className="modal"
            overlayClassName="background-modal"
            closeTimeoutMS={200}
        >
            <div className="container">
                <h1 className="fs-3 mt-1"> Nuevo evento </h1>
                <hr />
                <form>
                    <h2 className="fs-5 mb-3">Horario</h2>
                    <div className="form-group mb-2">
                        <label>Fecha y hora inicio</label>
                        <DatePicker
                            minDate={new Date()}
                            selected={formValues.start}
                            locale="es"
                            timeCaption="Hora"
                            onChange={(value) => onDateChange('start', value)}
                            dateFormat="Pp"
                            showTimeSelect
                            className="form-control"
                            wrapperClassName="w-100"
                        />
                    </div>

                    <div className="form-group mb-2">
                        <label>Fecha y hora fin</label>
                        <DatePicker
                            selected={formValues.end}
                            minDate={formValues.start}
                            locale="es"
                            timeCaption="Hora"
                            onChange={(value) => onDateChange('end', value)}
                            dateFormat="Pp"
                            showTimeSelect
                            className="form-control"
                            wrapperClassName="w-100"
                        />
                    </div>
                    <hr />

                    <h2 className="fs-5 mb-3">Título y notas</h2>
                    <div className="form-group mb-2">
                        <label className="form-label">Título del evento</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Una descripción corta"
                            name="title"
                            autoComplete="off"
                            value={formValues.title}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Notas</label>
                        <textarea
                            type="text"
                            className="form-control"
                            rows="4"
                            name="notes"
                            placeholder="Información adicional"
                            value={formValues.notes}
                            onChange={onInputChange}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary d-block"
                    >
                        <i className="far fa-save"></i>
                        <span> Guardar</span>
                    </button>
                </form>
            </div>
        </Modal>
    )
}
