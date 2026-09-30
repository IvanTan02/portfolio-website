.PHONY: install dev build start lint clean

install: ## Install dependencies
	npm install

run: ## Run the dev server (http://localhost:3000)
	npm run dev

build: ## Production build
	npm run build

start: build ## Build and run the production server
	npm run start

lint: ## Run eslint
	npm run lint

clean: ## Remove build artifacts
	rm -rf .next
