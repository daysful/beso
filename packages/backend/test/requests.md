# requests

curl -X POST http://127.0.0.1:54567/new

curl -X POST http://127.0.0.1:54567/new \
   -H 'Content-Type: application/json' \
   -d '{"name":"sim_1"}'

curl -X POST http://127.0.0.1:54567/new \
   -H 'Content-Type: application/json' \
   -d '{"name":"sim_2", "betse": true}'

curl -X POST http://127.0.0.1:54567/start?simulationID=<id>

curl -X POST http://127.0.0.1:54567/stop?simulationID=<id>
