client_run:
	cd client && npm install && npm run dev

client_build:
	cd client && npm run build

server_build:
	cd server && go build -o ./bin/server ./main.go

server_run:
	cd server &&  go mod download && go run main.go
