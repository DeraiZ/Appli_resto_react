import React from 'react'
import Logo from './Logo'
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
    reservationName: yup.string().min(2).required(),
    numberPerson: yup.number().min(1).max(8).required(),
})



const ReservationForm = () => {
    const formik = useFormik({
        initialValues:{
            reservationName:'',
            reservationDate:'',
            numberPerson:''
        }
    })
    return (
        
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-lg-4">
                        <div className="text-center">
                            <Logo />
                        </div>
                        <div className="wrapper p-4">
                            <h2>Réservation</h2>
                            <form className="form" onSubmit={formik.handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="name">Nom</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Nom de réservation"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="time">Date et Heure</label>
                                    <input className="form-control" type="datetime-local" name="time" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="people"
                                    >Nombre de personnes</label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        name="people"
                                        id="people"
                                        placeholder="4"
                                        required
                                    />
                                </div>
                                <div className="mb-3 d-grid">
                                    <input
                                        className="btn btn-secondary text-uppercase fw-Semibold "
                                        type="submit"
                                        value="Réserver"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        
        
    )
}

export default ReservationForm
