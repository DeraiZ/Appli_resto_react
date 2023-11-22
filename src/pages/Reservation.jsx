import React from 'react'
import { useFormik } from 'formik'
import ReservationForm from '../components/ReservationForm'
import createReservation from '../services/reservationService'
import * as yup from "yup";

const validationSchema = yup.object({
    reservationName: yup.string().min(2).required(),
    numberPerson: yup.number().min(1).max(8).required(),
})

const Reservation = () => {
        const onSubmit = (values) => {
            createReservation(values)
                .then(() => {
                    window.alert("Réservation realiser");
                })
        }

        const formik = useFormik({
            initialValues: {
                reservationName: '',
                reservationDate: '',
                numberPerson: ''
            },
            onSubmit,
            validationSchema
        })
        return (
            <ReservationForm />
        )

}

export default Reservation