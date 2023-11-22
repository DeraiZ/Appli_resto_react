import React from 'react'

const reservationList = () => {
  const [reservations, setreservation] = useState([]);
  useEffect(()=>{
      getAllReservations().then((data)=>{
          setBooks(data);
          console.log(data);
      })
  } , [] )

const ListGroup = () => {
  return (
    <div>ListGroup</div>
  )
}
}
export default ListGroup