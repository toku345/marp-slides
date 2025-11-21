.PHONY: help install preview build build-html build-pdf build-pptx lint lint-fix clean

help: ## Show this help message
	@echo "Available commands:"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36mmake %-15s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	bun install

preview: ## Start preview server
	bun run preview

build: ## Build all formats (HTML + PDF)
	bun run build

build-html: ## Build HTML only
	bun run build:html

build-pdf: ## Build PDF only
	bun run build:pdf

build-pptx: ## Build PPTX only
	bun run build:pptx

lint: ## Lint markdown files
	bun run lint

lint-fix: ## Lint and fix markdown files
	bun run lint:fix

clean: ## Clean dist directory
	rm -rf dist/*
