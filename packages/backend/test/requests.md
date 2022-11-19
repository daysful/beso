# requests

curl -X POST http://127.0.0.1:54567/start

curl -X POST http://127.0.0.1:54567/start \
   -H 'Content-Type: application/json' \
   -d '{"name":"sim_1"}'

curl -X POST http://127.0.0.1:54567/start \
   -H 'Content-Type: application/json' \
   -d '{"name":"sim_2", "betse": true}'
