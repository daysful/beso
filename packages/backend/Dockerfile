# docker build -t beso-backend .

FROM python:3.11-slim-buster

RUN apt-get update \
    && apt-get install gcc -y \
    && apt-get clean

WORKDIR /code

COPY ./requirements.txt /code/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

COPY assets /code/assets
COPY main.py /code/main.py
COPY source /code/source

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "54567"]
