from sqlalchemy import Column, Integer,Float,String, DateTime, ForeignKey, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, backref

Base = declarative_base()

#user table
class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String, index=True)
    last_name = Column(String, index=True)
    username = Column(String)
    password = Column(String)
    email = Column(String)
    is_admin = Column(Boolean)
    # room_id = Column(Integer, ForeignKey('room.id'))
    # room = relationship("Room", back_populates="user", uselist=False)



#room table
class Room(Base):
    __tablename__ = 'room'
    id = Column(Integer, index=True, primary_key=True)
    bed_number = Column(Integer)
    is_taken = Column(Boolean)
    price = Column(Integer)
    # user_id = Column(Integer, ForeignKey('user.id'))
    # user = relationship("User", back_populates="room")


class Room_User(Base):
    __tablename__ = 'room_user'
    id = Column(Integer, index=True, primary_key=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    room_id = Column(Integer, ForeignKey('room.id'))


class Reservation(Base):
    __tablename__ = 'reservations'
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    room_id = Column(Integer, ForeignKey('room.id'))
    check_in = Column(DateTime)
    check_out = Column(DateTime)
    status = Column(String, default='pending')

    user = relationship('User')
    room = relationship('Room')



