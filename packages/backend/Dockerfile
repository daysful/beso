FROM python:3.11-slim-buster

RUN apt-get update \
    && apt-get install gcc -y \
    && apt-get clean

WORKDIR /app

ARG PORT=54567
ENV PORT=${PORT}

ENV BESO_PRODUCTION="true"

COPY ./requirements.txt /app/requirements.txt

RUN pip install \
    --root-user-action=ignore \
    --disable-pip-version-check \
    --no-cache-dir \
    --upgrade \
    -r /app/requirements.txt

COPY assets /app/assets
COPY scripts /app/scripts
COPY source /app/source
COPY main.py /app/main.py

CMD ./scripts/start.sh
