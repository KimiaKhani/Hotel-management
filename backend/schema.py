from pydantic import BaseModel
from typing import ClassVar
from datetime import datetime
from typing import List
from typing import Optional


class UserBase(BaseModel):
    username: str
    email: str
    password: str


class UserDisplay(BaseModel):
    username: str
    email: str
    # room_id : int

    class Config:
        from_orm = True


class UserAuth(BaseModel):
    id: int
    username: str
    email: str


    class Config:
        from_attributes = True




# user in post display and comment display
class User(BaseModel):
    username: str
    email : str

    class Config:
        from_attributes = True


class RoomBase(BaseModel):
    bed_number : int
    price : int

    class Config:
        from_orm = True


class RoomDisplay(BaseModel):
    id : int
    bed_number : int
    price : int
    is_taken : bool

    class Config:
        from_orm = True



class ReservationBase(BaseModel):
    user_id: int
    room_id: int
    start_date: datetime
    end_date: datetime

class ReservationCreate(ReservationBase):
    pass

class Reservation(ReservationBase):
    id: int
    status: str

    class Config:
        from_attributes = True