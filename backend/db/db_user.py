from db.models import User
from schema import UserBase
from sqlalchemy.orm import Session
from db.hash import Hash
from fastapi.exceptions import HTTPException
from fastapi import status



def create_user(request: UserBase, db: Session):
    name = request.username
    checked = duplicate_username(name, db)
    if checked:
        raise HTTPException(status_code=status.HTTP_406_NOT_ACCEPTABLE,
                            detail='This username already exists')

    user = User(
        username=request.username,
        password=Hash.bcrypt(request.password),
        email=request.email,
        is_admin=False,
        # room_id = None
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


def delete_user(user_id: int, db: Session):
    user = db.query(User).filter(User.id == user_id).first()

    try:
        db.delete(user)
        db.commit()
        return 'User Deleted'
    except:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR)


def duplicate_username(username: str, db: Session):
    user = db.query(User).filter(User.username == username).first()
    if user:
        return True
    else:
        return False


#
# def edite_user(request: UpdateUserBase, db: Session, user_id: int):
#     user = db.query(User).filter(User.id == user_id).first()
#     if not user:
#         raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)
#
#     name = request.username
#     checked = duplicate_username(name, db)
#     if checked == True and user.username != request.username:
#         raise HTTPException(status_code=status.HTTP_406_NOT_ACCEPTABLE,
#                             detail='This username already exists')
#
#     user.username = request.username
#     user.password = Hash.bcrypt(request.password)
#     user.email = request.email
#
#     db.commit()
#
#     return user

def get_user_by_username(username: str, db: Session):
    user = db.query(User).filter(User.username == username).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail='User not found !')

    return user



