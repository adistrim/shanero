APP_NAME=server
GO_CMD=go
MAIN_FILE=main.go

# Build Go binary
.PHONY: build
build:
	@echo "Building Go binary..."
	$(GO_CMD) build -o ./bin/$(APP_NAME) $(MAIN_FILE)

# Run server locally
.PHONY: run
run:
	@echo "Building and running server..."
	$(GO_CMD) build -o ./bin/$(APP_NAME) $(MAIN_FILE)
	./bin/$(APP_NAME)

# Clean up binary
.PHONY: clean
clean:
	@echo "Cleaning build artifacts..."
	rm -rf ./bin
