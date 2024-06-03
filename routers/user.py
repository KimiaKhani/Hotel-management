from fastapi import APIRouter, Depends
from schema import UserDisplay, UserBase, UserAuth
from sqlalchemy.orm import Session
from db.database import get_db
from db import db_user
from authentication import auth

router = APIRouter(prefix='/user', tags=['user'])


@router.post('/create', response_model=UserDisplay)
def create_user(request: UserBase, db: Session = Depends(get_db)):
    return db_user.create_user(request, db)


@router.delete('/delete_self_account/{id}')
def delete_user(current_user: UserAuth = Depends(auth.get_current_user), db: Session = Depends(get_db)):
    return db_user.delete_user(user_id=current_user.id, db=db)


