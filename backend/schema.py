from pydantic import BaseModel
from typing import ClassVar
from datetime import datetime
from typing import List
from typing import Optional


class UserBase(BaseModel):
    username: str
    first_name: str
    last_name: str
    email: str
    password: str


class UserDisplay(BaseModel):
    id: int
    first_name: str
    last_name: str
    username: str
    email: str


    class Config:
        orm_mode = True


class UserAuth(BaseModel):
    id: int
    username: str
    email: str


    class Config:
        orm_mode = True




# user in post display and comment display
class User(BaseModel):
    username: str
    email : str

    class Config:
        orm_mode = True


class RoomBase(BaseModel):
    bed_number : int
    price : int

    class Config:
        orm_mode = True


class RoomDisplay(BaseModel):
    id : int
    bed_number : int
    price : int
    is_taken : bool

    class Config:
        orm_mode = True



class ReservationBase(BaseModel):
    user_id: int
    room_id: int
    check_in: datetime
    check_out: datetime

class ReservationCreate(ReservationBase):
    first_name: str
    last_name: str

class Reservation(ReservationBase):
    id: int
    status: str
    first_name: str
    last_name: str

    class Config:
        orm_mode = True