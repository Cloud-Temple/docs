# Cloud Temple Documentation

Welcome to the official documentation repository for Cloud Temple.
Here, you’ll find guides and resources to help you better understand and utilize Cloud Temple’s services and solutions.

A __PROD__ version of this documentation is available [here](https://docs.cloud-temple.com). This repository and the website are synchronized to ensure up-to-date content.

A __DEV__ version of this documentation is available [here](https://cloud-temple.github.io/docs/).

This project is continuously updated with new guides and improvements.

# Contributing
We value your contributions! Whether it’s improving an existing guide or creating a new one, your input helps us make this repository better.

## How to Contribute

	1.	Fork this repository: Clone your fork to your local environment.
	2.	Make your changes: Update or create guides.
	3.	Submit a Pull Request (PR): Propose your changes to the develop branch.

Our team will review your contribution, provide feedback if needed, and integrate approved changes.

## Guidelines for Contributions

	•	Ensure your contributions are accurate, tested, and well-documented.
	•	Include a brief explanation of your changes in the PR comments.
	•	Follow the structure and style of existing guides for consistency.

# Licensing

By contributing to this repository, you agree to the terms outlined in the LICENSE file.

# Working Locally with Docker

To get started, follow these simple steps:

1. Navigate to the Docker directory:
```bash
cd docker/local
```

2. Launch the services with Docker Compose:
```bash
docker compose up
```

3. Access the documentation locally:

Open your browser and go to: <http://localhost:3000/docs/>

> Base url is set to "/docs" when running on non production build (locally or deployed on github pages)

🎉 Your local environment is ready!

# Build and run locally in production mode

To get started, follow these simple steps:

1. Build the docker image:
```bash
docker build -t docs:v3 . -f docker/production/Dockerfile
```

2. Launch the services with Docker Compose:
```bash
docker run -it --rm -p 8080:80 --name docs docs:v3
```

3. Access the documentation locally (all pages and all langages should work):

Open your browser and go to: <http://localhost:8080>

> Base url is set to "/" on production build
