from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from db.models import Base
from db.database import engine
from admin_routers import admin_room
from authentication import authentications
from routers import user, room
from routers import reservation_router



app = FastAPI()
app.include_router(admin_room.router)
app.include_router(user.router)
app.include_router(room.router)
app.include_router(authentications.router)
app.include_router(reservation_router.router)



Base.metadata.create_all(engine)

@app.get("/")
def home():
    return "Hello"
