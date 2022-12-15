from strawberry.tools import merge_types

from .general import QueryUser



Query = merge_types(
    'Query',
    (
        QueryUser,
    ),
)
