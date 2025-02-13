import { useEffect, useMemo, useState } from 'react';
import { addHours, differenceInSeconds } from 'date-fns';
import Swal from 'sweetalert2';
import Modal from 'react-modal';
import DatePicker, { registerLocale } from "react-datepicker";
import { es } from 'date-fns/locale';
import "react-datepicker/dist/react-datepicker.css";
import "sweetalert2/dist/sweetalert2.min.css";
import { useCalendarStore, useUiStore } from '../../hooks';

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

export const EventModal = () => {
    const { isEventModalOpen, closeEventModal } = useUiStore();
    const { activeEvent, isLoadingEvents, startSavingEvent, startDeleteEvent } = useCalendarStore();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [formValues, setFormValues] = useState({
        title: '',
        notes: '',
        start: new Date(),
        end: addHours(new Date(), 2),
    });

    const titleClass = useMemo(() => {
        if (!formSubmitted) return '';
        return (formValues.title.length > 0)
            ? ''
            : 'is-invalid'
    }, [formValues.title, formSubmitted]);

    useEffect(() => {
        if (activeEvent !== null) {
            setFormValues({ ...activeEvent });
        }
    }, [activeEvent])


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

    const onSubmit = async (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        const difference = differenceInSeconds(formValues.end, formValues.start);
        if (isNaN(difference) || difference < 0) {
            Swal.fire('Fecha y hora errónea', 'Por favor, valide las fechas y horas de inicio y fin del evento', 'error');
            return;
        }

        if (formValues.title.length <= 0) return;

        await startSavingEvent(formValues);
        closeEventModal();
        setFormSubmitted(false);
    }

    const onDeleteEvent = async () => {
        await startDeleteEvent();
        closeEventModal();
    }

    return (
        <Modal
            isOpen={isEventModalOpen}
            onRequestClose={closeEventModal}
            style={customStyles}
            className="modal"
            overlayClassName="background-modal"
            closeTimeoutMS={200}
        >
            <div className="container">
                <h1 className="fs-3 mt-1"> Nuevo evento </h1>
                <hr />
                <form onSubmit={onSubmit}>
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
                            className={`form-control ${titleClass}`}
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

                    <div className="row justify-content-between">
                        {
                            !!activeEvent?.id && (
                                <div className="col">
                                    <button
                                        onClick={onDeleteEvent}
                                        className="btn btn-danger"
                                        disabled={isLoadingEvents}
                                    >
                                        <span>Eliminar</span>
                                        <i className="fas fa-trash ms-2"></i>
                                    </button>
                                </div>
                            )
                        }

                        <div className="col text-end">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isLoadingEvents}
                            >
                                <span> Guardar</span>
                                <i className="fas fa-save ms-2"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Modal>
    )
}
