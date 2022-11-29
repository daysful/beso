import strawberry

from source.constants import allow_user_registration
from source.graphql.types.general import User



@strawberry.type
class QueryUser:
    @strawberry.field
    def allowUserRegistration(self) -> bool:
        return allow_user_registration

    @strawberry.field
    def user(self) -> User:
        return User(
            name='user',
        )
