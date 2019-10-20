.PHONY: run install

run:
	@deno -A mod.ts --allow-env --allow-read

install:
	@deno install hello ./mod.ts --allow-env --allow-read
