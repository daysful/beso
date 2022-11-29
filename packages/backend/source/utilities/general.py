import os
import uuid



def mkdir(dir: str):
    if not os.path.exists(dir):
        os.mkdir(dir)


def parse_users():
    """
    parse user tuples (`id,name,key`) separated by semicolon from environment variable
    e.g. `BESO_USERS="123,user1,key1;124,user2,key2"`
    """
    users_string = os.environ.get('BESO_USERS', '')
    if not users_string:
        return []

    users = []
    for user_string in users_string.split(';'):
        user_data = user_string.split(',')
        try:
            if isinstance(user_data[0], str) and \
               isinstance(user_data[1], str) and \
               isinstance(user_data[2], str):
                users.append({
                    'id': user_data[0],
                    'name': user_data[1],
                    'key': user_data[2],
                })
        except:
            pass

    return users


def generate_id(
    length = 3
):
    value = ''

    for _ in range(length):
        value += uuid.uuid4().hex

    return value
