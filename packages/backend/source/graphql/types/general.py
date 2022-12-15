import strawberry

from .betse import Betse



@strawberry.type
class User:
    id: str
    name: str
    # betse: Betse

@strawberry.type
class UserWithToken:
    id: str
    name: str
    token: str
