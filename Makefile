.PHONY: test test-verbose test-watch cover lint lint-fix format format-check
.DEFAULT_GOAL=test

test:
	npm test

test-verbose:
	npm run test-verbose

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
