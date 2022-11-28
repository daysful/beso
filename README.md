<p align="center">
    <img src="https://raw.githubusercontent.com/daysful/beso/master/about/identity/beso-logo.png" height="250px">
    <br />
    <br />
    <a target="_blank" href="https://github.com/daysful/beso/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/license-DEL-blue.svg?colorB=1380C3&style=for-the-badge" alt="License: DEL">
    </a>
</p>



<h1 align="center">
    beso
</h1>


<h3 align="center">
    BioElectric Simulation Orchestrator
</h3>


`BESO` is based on [`BETSE`](https://github.com/betsee/betse) to provide a bioelectric tissue simulation management environment.



## Setup

In order to run `BESO`, a `backend` and a `frontend` server must be set up.

Provided [`docker`](https://docs.docker.com/get-docker/) is installed, run

```
docker pull daysful/beso-backend
docker pull daysful/beso-frontend

mkdir ./beso_data

docker run --name beso-backend \
    -p 54567:54567 \
    --mount type=bind,source="$(pwd)"/beso_data,target=/code/beso_data \
    -d daysful/beso-backend
docker run --name beso-frontend \
    -p 54568:54568 \
    -d daysful/beso-frontend
```

for a default setup, storing the data in a local `beso_data` directory.


## Development

Clone the repository

```
git clone https://github.com/daysful/beso.git
```

### Backend

Provided [`python3`](https://www.python.org/downloads/) is installed, run in the `backend` directory

```
python3 -m venv ./venv

source ./venv/bin/activate

pip install -r requirements.txt

./scripts/start.sh
```


### Frontend

Provided [`Node.js`](https://nodejs.org/en/) is installed, run in the `frontend` directory

```
npm install

npm run live
```
