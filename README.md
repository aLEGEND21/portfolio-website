# portfolio-website

This website was created to serve as my developer portfolio, which can be viewed at [https://arnavm.com](https://arnavm.com). It was created with SvelteKit and deployed using Docker and Nginx. The website is hosted on a Contabo VPS.

## Installation and Usage

To run this project locally, you will need to have Node.js installed. You can install the dependencies by running:

```bash
npm install
```

To start the development server, run:

```bash
npm run dev -- --open
```

To build the project, run:

```bash
npm run build
```

To preview the built project, run:

```bash
npm run preview
```

## Deployment

To deploy this project, you will need to have Docker installed. To use the premade deployment script, run:

```bash
mv portfolio-website/portfolio.sh .
bash portfolio.sh
```

## License

This project is not available for reuse. If you have any questions, please contact me using the form on my [website](https://arnavm.com/#contact).
