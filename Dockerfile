FROM node as builder
WORKDIR /app
COPY client/package*.json ./
RUN npm install
COPY client/** .
RUN npm run build


FROM golang:1.22-alpine
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY * ./
COPY --from=builder /app/build ./public
RUN CGO_ENABLED=0 go build -o ./bin/server ./main.go
EXPOSE 3000
CMD ["./bin/server"]
