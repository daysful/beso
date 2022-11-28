import strawberry

from source.graphql.types.general import User



@strawberry.type
class QueryUser:
    @strawberry.field
    def user(self) -> User:
        return User(
            name='user',
        )
