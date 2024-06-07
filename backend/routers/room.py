from fastapi import APIRouter, Depends, status
from schema import RoomDisplay, RoomBase, UserAuth
from sqlalchemy.orm import Session
from db.database import get_db
from db import db_room
from typing import List
from authentication import auth
from fastapi.exceptions import HTTPException


router = APIRouter(prefix='/room', tags=['room'])

@router.get('/get_all_rooms', response_model=List[RoomDisplay])
def get_all_rooms(db: Session = Depends(get_db)):
    return db_room.get_all_rooms_by_user(db)

@router.get('/get_rooms_by_bednumber/{number}', response_model=List[RoomDisplay])
def get_rooms_by_bednumber(bed_num : int, db: Session = Depends(get_db)):
    return db_room.get_rooms_by_bednumber(bed_num, db)

