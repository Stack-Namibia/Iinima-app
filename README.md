![Build](https://github.com/Stack-Namibia/Iinima-backend/actions/workflows/node.js.yml/badge.svg)

# Iinima-app

![PHOTO-2022-10-15-09-59-43 2](https://user-images.githubusercontent.com/36531734/196195676-931e9f7d-dc5a-487a-8b3e-8d59b4f9fb83.jpg)

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Authors](#authors)
- [License](#license)

## Description

Iinima is a powerful and user-friendly platform that simplifies the process of renting and listing items in your local area. Whether you're looking to rent something or have items you want to share with others, our application makes the entire rental experience seamless and convenient.

## Features

Iinima offers the following features:

- **Browse items for rental around your area:** Users can search and browse items available for rent in their vicinity. They can filter and view items based on categories, location.

- **List items you want to put up for rent:** Users can create listings and put their items up for rent. They can add details such as item descriptions, images, rental rates.

- **Manage items:** Item owners have access to a dashboard where they can manage their listed items. They can edit listings.

- **Contact item owners with WhatsApp integration or call:** Users can easily get in touch with item owners through WhatsApp integration or make direct calls from within the application, simplifying communication and inquiries about rental items.

These features enhance the user experience and provide a seamless platform for both renters and item owners to interact, discover, and manage rental items in the area.


## Tech Stack

Your Application Name is built using the following technologies:

- **Frontend**: React, TypeScript
- **Authentication**: Auth0
- **Content Management**: Sanity
- **Deployment and Hosting**: Vercel

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Stack-Namibia/Iinima-app`
2. Install the dependencies: `npm install`
3. Set up environment variables (see [Environment Variables](#environment-variables) section)
4. Start the development server: `npm start`

## Environment Variables

The application uses the following environment variables:

- `REACT_APP_AUTH0_DOMAIN`: Auth0 domain for authentication
- `REACT_APP_AUTH0_CLIENTID`: Auth0 client ID for authentication
- `REACT_APP_AUTH0_AUDIENCE`: Auth0 audience for authentication
- `REACT_APP_API_KEY`: API key for the application
- `REACT_APP_API_BASE_URL`: Base URL for the API
- `REACT_APP_BASE_URL`: Base URL for the React application
- `REACT_APP_CM_PROJECT_ID`: Sanity Content Manager project ID
- `REACT_APP_CM_DATASET`: Sanity Content Manager dataset
- `REACT_APP_CM_API_VERSION`: Sanity Content Manager API version

Make sure to set up these environment variables in your development environment.

## Deployment

The application is deployed and hosted on Vercel. Vercel's preview feature allows for seamless deployment previews for pull requests.

To deploy the application to Vercel, simply push your changes to the main branch or create a pull request. Vercel will automatically build and deploy the application to the production environment.

## Authors

- [@Stack Technologies](https://github.com/orgs/Stack-Namibia) - Creator and maintainer

See the list of [contributors](https://github.com/orgs/Stack-Namibia/teams/iinima) who participated in this project.

## License

[license here](https://github.com/Stack-Namibia/Iinima-app/blob/main/LICENSE)

