.PHONY: test test-watch cover lint lint-fix format format-check

test:
	npm test

cover:
	npm run coverage

lint:
	npm run lint

lint-fix:
	npm run lint:fix

format:
	npm run format

format-check:
	npm run format:check
