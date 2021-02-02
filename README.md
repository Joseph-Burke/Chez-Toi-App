# Chez Toi: App

"**Chez Toi**" is an application for browsing and booking viewings for houses. It interacts with the [Chez Toi API](https://github.com/Joseph-Burke/Chez-Toi-API) to provide users with up-to-date information on the houses that are available and the viewings that the user has booked.

<!-- ![screenshot](./screenshots/screenshot-main.png)
![screenshot](./screenshots/screenshot-recipe.png) -->

The website consists of several pages:

1) The "House Browser" page, where the user may view look through images and brief descriptions for the houses available for viewing and access the "House Details" page for any house that interests them.

2) The "House Details" page, where a user can view further information about the selected house and access a form to book a viewing at that house if they choose.

3) The "Viewings" page, where a user can see all the viewings that they have booked so far, and cancel any if they wish.

4) The "Sign Up" page, where a user can create a new account - this is required in order to book a viewing.

5) The "Log In" page, where a user can log in to an existing account using their e-mail address.

## Live Demo

<!-- To jump right into the project, visit the [Live Demo](https://eats-shoots-leaves.herokuapp.com/), deployed on Heroku. -->

## Built With

- **[React](https://reactjs.org/)** - Bootstrapped using the [**create-react-app**](https://www.npmjs.com/package/create-react-app) package.
- **[Redux](https://redux.js.org/)** - Redux is used for storing state. The `react-redux` package was used to enable React bindings for Redux.
- **[React Router](https://reactrouter.com/)** - the `react-router-dom` package was used to allow navigation between pages.
- **[Bootstrap](https://getbootstrap.com/)** and **[Font Awesome](https://fontawesome.com/)** were both used, via their npm packages.
- Kent Dodds' **[Testing Library](https://testing-library.com/)** - the `/jest-dom` and `/react` APIs were used for testing, on top of Jest, which is `create-react-app`'s default testing suite.
- **ESLint** <!-- and **Stylelint** for --> linting JavaScript<!-- and CSS respectively-->.

## Local Setup

### Prerequisites

_**node.js is a pre-requisite of this project.**_

Don't have node.js? Choose a download method [here](https://nodejs.org/en/download/).

## Setup Instructions

1. Open a Terminal and navigate to the location in your system where you would like to download the project. **New to Terminal? [Learn here](https://www.freecodecamp.org/news/conquering-the-command-line-f85f5e46c07c/).**

2. Enter the following line of code to clone this repository:

`git clone git@github.com:Joseph-Burke/Chez-Toi-App.git`

3. Now that the repository has been cloned, navigate inside it using `cd Chez-Toi-App`.

4. The project's dependencies are managed by npm. The details of this project's dependencies can be found in `package.json`. To install them, enter the following line of code in the Terminal.

`npm install`

5. Start the project with the `npm start` command. This will compile the code, start a server and open a browser for you to view the site.

## Tests

To run tests, simply enter the `npm test` command in the terminal. This will begin `create-react-app`'s built-in testing script, which will watch for changes and run tests automatically.

If you're interested in writing further tests for this project, refer to the documentation for [Jest](https://jestjs.io/docs/en/getting-started) and [Testing Library](https://testing-library.com/).

## Author

👤 **Joe Burke**

- Github: [@Joseph-Burke](https://github.com/Joseph-Burke)
- Twitter: [@__joeburke](https://twitter.com/__joeburke)
- Linkedin: [Joseph Burke](https://www.linkedin.com/in/--joeburke/)

## 🤝 Contributing

Contributions, issues and feature requests are always welcome!

Drop me a line through any of the channels listed above or head directly to the [issues page](issues/).

## Show your support

Hey! Give this project a ⭐️! It costs nothing :)

## Acknowledgments

- This project was built as part of the Microverse Web Development course, which you can learn more about [here](https://www.microverse.org/).
- Based on a [design](https://www.behance.net/gallery/26425031/Vespa-Responsive-Redesign) by [Murat Korkmaz](https://www.behance.net/muratk).

## 📝 License

This project is [MIT](lic.url) licensed.

