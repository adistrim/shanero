APP_NAME=server
GO_CMD=go
MAIN_FILE=main.go
MIGRATION_SCRIPT=cmd/migrate/main.go

# Build Go binary
.PHONY: build
build:
	@echo "Building Go binary..."
	$(GO_CMD) build -o ./bin/$(APP_NAME) $(MAIN_FILE)

# Execute Go binary
.PHONY: exec
exec: build
	@echo "Executing Go binary..."
	./bin/$(APP_NAME)

# Run server locally
.PHONY: run
run:
	@echo "Running server..."
	$(GO_CMD) run $(MAIN_FILE)

# Clean up binary
.PHONY: clean
clean:
	@echo "Cleaning build artifacts..."
	rm -rf ./bin

# Run Migrations
.PHONY: migrate
migrate:
	@echo "Running database migrations..."
	$(GO_CMD) run $(MIGRATION_SCRIPT)
