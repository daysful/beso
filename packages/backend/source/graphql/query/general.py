import strawberry

from source.constants import allow_user_registration
from source.graphql.types.general import User
from source.graphql.context import Info



@strawberry.type
class QueryUser:
    @strawberry.field
    def allowUserRegistration(self) -> bool:
        return allow_user_registration

    @strawberry.field
    def user(self, info: Info) -> User | None:
        return info.context.user
