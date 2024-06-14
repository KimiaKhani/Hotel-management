from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from db import get_db
from schema import ReservationCreate, Reservation
from db.db_reservation import create_reservation, get_all_reservations, get_reservation


router = APIRouter(tags=['Reservation'])

@router.post("/reservations/", response_model=Reservation)
def reserve_room(reservation: ReservationCreate, db: Session = Depends(get_db)):
    db_reservation = create_reservation(db=db, reservation=reservation)
    return {
        "id": db_reservation.id,
        "user_id": db_reservation.user_id,
        "room_id": db_reservation.room_id,
        "first_name": db_reservation.user.first_name,
        "last_name": db_reservation.user.last_name,
        "check_in": db_reservation.check_in,
        "check_out": db_reservation.check_out,
        "status": db_reservation.status
    }
@router.get("/reservations/{reservation_id}", response_model=Reservation)
def read_reservation(reservation_id: int, db: Session = Depends(get_db)):
    db_reservation = get_reservation(db, reservation_id)
    if db_reservation is None:
        raise HTTPException(status_code=404, detail="Reservation not found")
    return {
        "id": db_reservation.id,
        "user_id": db_reservation.user_id,
        "room_id": db_reservation.room_id,
        "first_name": db_reservation.user.first_name,
        "last_name": db_reservation.user.last_name,
        "check_in": db_reservation.check_in,
        "check_out": db_reservation.check_out,
        "status": db_reservation.status
    }
@router.get("/reservations", response_model=List[Reservation])
def read_all_reservations(db: Session = Depends(get_db)):
    reservations = get_all_reservations(db)
    return [
        {
            "id": reservation.id,
            "user_id": reservation.user_id,
            "room_id": reservation.room_id,
            "first_name": reservation.user.first_name,
            "last_name": reservation.user.last_name,
            "check_in": reservation.check_in,
            "check_out": reservation.check_out,
            "status": reservation.status
        }
        for reservation in reservations
    ]