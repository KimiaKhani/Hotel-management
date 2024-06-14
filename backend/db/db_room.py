from db.models import Room, User, Room_User
from schema import RoomBase
from sqlalchemy.orm import Session
from fastapi.exceptions import HTTPException
from fastapi import status



#admin-----------------------------------------------------------------------------------
def add_room(request: RoomBase, db :Session, admin_id: int):
    user = db.query(User).filter(User.id == admin_id).first()
    if user.is_admin == False:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)

    new_room = Room(
        bed_number = request.bed_number,
        price = request.price,
        is_taken = False,
    )

    db.add(new_room)
    db.commit()
    db.refresh(new_room)
    return new_room


def delete_room(id: int, db: Session, admin_id: int):
    user = db.query(User).filter(User.id == admin_id).first()
    if user.is_admin == False:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)
    try:
        room = db.query(Room).filter(Room.id == id).first()
        if not room:
            return "No such a room"

        db.delete(room)
        db.commit()

        return 'room deleted'

    except:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR)


def get_room_by_admin(id: int, db: Session, admin_id: int):
    user = db.query(User).filter(User.id == admin_id).first()
    if user.is_admin == False:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)

    room = db.query(Room).filter(Room.id == id).first()
    if not room:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='room not found.')

    if room.is_taken == True :
        user = db.query(Room_User).filter(room.id == Room_User.room_id).first()
    return room 


def get_user_by_admin(name: str, db: Session, admin_id: int):
    user = db.query(User).filter(User.id == admin_id).first()
    if user.is_admin == False:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)

    user = db.query(User).filter(User.username == name).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='user not found.')

    room = db.query(Room_User).filter(user.user_id == Room_User.user_id)
    if not room:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="this user hasn't booked any room")
    
    return room , user.username



#user------------------------------------------------------------------------------------------
def get_all_rooms_by_user(db: Session):
    room = db.query(Room).filter(Room.is_taken==False).all()
    if not room:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='there is no empty room!')
    return room


def get_rooms_by_bednumber(bed_number : int, db:Session):
        room = db.query(Room).filter((Room.bed_number==bed_number),(Room.is_taken==False)).all()
        if not room:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='there is no empty room!')
        return room

