# iKant runner — deterministic, dependency-free fetch + verify + trace.
#
# The runner uses only the Node.js standard library, so the image needs no
# `npm install` step and pulls no third-party packages. Build from the repository
# root so the corpus (Operation/MANIFEST.json + sidecars) is available for the
# default offline resolution mode:
#
#   docker build -f Operation/runner/Dockerfile -t ikant-runner .
#   docker run --rm ikant-runner --all
#   docker run --rm ikant-runner --id roa-main-entrypoint
#
# Pass --online to fetch from raw.githubusercontent.com instead of local files.
FROM node:20-alpine

WORKDIR /app

# Copy the whole repository so offline resolution can read the corpus sidecars
# and PDFs referenced by Operation/MANIFEST.json.
COPY . .

# Run the dependency-free integration tests at build time as a smoke gate.
RUN node --test "Operation/runner/test/*.test.js"

ENTRYPOINT ["node", "Operation/runner/app.js"]
CMD ["--all"]
