from sqlalchemy.orm import Session
from db.models import Reservation
from schema import ReservationCreate

def create_reservation(db: Session, reservation: ReservationCreate):
    db_reservation = Reservation(**reservation.dict())
    db.add(db_reservation)
    db.commit()
    db.refresh(db_reservation)
    return db_reservation

def get_reservation(db: Session, reservation_id: int):
    return db.query(Reservation).filter(Reservation.id == reservation_id).first()


def get_all_reservations(db: Session):
    return db.query(Reservation).all()