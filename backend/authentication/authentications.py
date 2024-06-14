from fastapi import APIRouter, Depends, status
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from fastapi.exceptions import HTTPException
from sqlalchemy.orm.session import Session
from db import models
from db.database import get_db
from db.hash import Hash
from authentication import auth

router = APIRouter(tags=['Authentication'])


@router.post('/token')
def get_token(request: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.meli_code == request.meli_code).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='invalid meli_code')

    if not Hash.verify(user.password, request.password):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='invalid password')

    access_token = auth.create_access_token(data={'sub': user.meli_code})

    return {
        'access_token': access_token,
        'type_token': 'bearer',
        'userID': user.id,
        'meli_code': user.meli_code,
    }
