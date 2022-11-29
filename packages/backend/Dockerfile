FROM python:3.11-slim-buster

RUN apt-get update \
    && apt-get install gcc -y \
    && apt-get clean

WORKDIR /app

ENV BESO_PRODUCTION="true"

COPY ./requirements.txt /app/requirements.txt

RUN pip install \
    --root-user-action=ignore \
    --disable-pip-version-check \
    --no-cache-dir \
    --upgrade \
    -r /app/requirements.txt

COPY assets /app/assets
COPY source /app/source
COPY main.py /app/main.py

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "54567"]
