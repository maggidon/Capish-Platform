Phase 1 — Backend production + Docker baseline

Goal: Make backend run reliably in production mode locally and inside Docker.

Completed
	•	Backend runs locally:
	•	npm run build -> generates dist/
	•	npm start -> runs compiled JS
	•	Backend runs in Docker:
	•	Docker image builds successfully
	•	Container starts and stays running
	•	.env.production loaded correctly

Key fixes
	•	TS path aliases (@src/...) needed runtime support in production:
	•	used module-alias + node -r module-alias/register
	•	App expected .env.production as a file path:
	•	mounted env file into container via Docker Compose
	•	Start command updated to correct build output:
	•	node dist/src/index.js

Result
	•	http://localhost:3000/api/healthz works
	•	http://localhost:3000/api/products works
	•	Docker Compose up runs backend in production mode consistently
