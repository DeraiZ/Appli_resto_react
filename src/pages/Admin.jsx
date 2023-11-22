import React from 'react'
import Logo from '../components/Logo'

const Admin = () => {
    return (
        <div>
            <Logo />
            <div className="col-lg-4 wrapper p-4">

                <h2 className="mb-4">Réservations</h2>
                <div className="btn-group w-100 mb-4" role="group">
                    <input
                        type="radio"
                        className="btn-check"
                        name="status"
                        id="all"
                        autocomplete="off"
                    />
                    <label className="btn btn-secondary" for="all"> Toutes </label>

                    <input
                        type="radio"
                        className="btn-check"
                        name="status"
                        id="open"
                        autocomplete="off"
                    />
                    <label className="btn btn-outline-secondary" for="open">
                        En cours
                    </label>

                    <input
                        type="radio"
                        className="btn-check"
                        name="status"
                        id="closed"
                        autocomplete="off"
                    />
                    <label className="btn btn-outline-secondary" for="closed">
                        Passées
                    </label>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

            export default Admin