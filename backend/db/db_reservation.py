from sqlalchemy.orm import Session
from db.models import Reservation, User
from schema import ReservationCreate

def create_reservation(db: Session, reservation: ReservationCreate):
    user = db.query(User).filter(User.first_name == reservation.first_name, User.last_name == reservation.last_name).first()
    if not user:
        user = User(first_name=reservation.first_name, last_name=reservation.last_name)
        db.add(user)
        db.commit()
        db.refresh(user)
    
    db_reservation = Reservation(
        room_id=reservation.room_id,
        user_id=user.id,
        check_in=reservation.check_in,
        check_out=reservation.check_out
    )
    db.add(db_reservation)
    db.commit()
    db.refresh(db_reservation)
    return db_reservation

def get_reservation(db: Session, reservation_id: int):
    return db.query(Reservation).filter(Reservation.id == reservation_id).first()


def get_all_reservations(db: Session):
    return db.query(Reservation).all()