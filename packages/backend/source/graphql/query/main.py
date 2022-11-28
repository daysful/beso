from strawberry.tools import merge_types

from .general import QueryUser
from .betse import QueryBetseWorld



Query = merge_types(
    'Query',
    (
        QueryUser,
        QueryBetseWorld,
    ),
)
