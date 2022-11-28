# docker build -t beso-backend .

FROM python:3.11-slim-buster

RUN apt-get update \
    && apt-get install gcc -y \
    && apt-get clean

WORKDIR /app

COPY ./requirements.txt /app/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt

COPY assets /app/assets
COPY main.py /app/main.py
COPY source /app/source

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "54567"]
