# Portfolio Project 5 PartyDimension social community and inspirational website
 
PartyDimension social community and inspirational website

## Table of contents
 
* [About this project](https://github.com/jossansik/Portfolio-project5-partysite-frontend#About-this-project)
* [Technology](https://github.com/jossansik/Portfolio-project5-partysite-frontend#Technology)
* [Setup project locally](https://github.com/jossansik/Portfolio-project5-partysite-frontend#Setup-project-locally)
* [UX design](https://github.com/jossansik/Portfolio-project5-partysite-frontend#UX-design)
* [Features & site goals](https://github.com/jossansik/Portfolio-project5-partysite-frontend#Features-&-site-goals)
* [Site experience](https://github.com/jossansik/Portfolio-project5-partysite-frontend#Site-experience)
* [Testing](https://github.com/jossansik/Portfolio-project5-partysite-frontend#Testing)
* [Bugs](https://github.com/jossansik/Portfolio-project5-partysite-frontend#Bugs)
* [Validator testing](https://github.com/jossansik/Portfolio-project5-partysite-frontend#Validator-testing)
* [Accessibility](https://github.com/jossansik/Portfolio-project5-partysite-frontend#Accessibility)
* [Deployment](https://github.com/jossansik/Portfolio-project5-partysite-frontend#Deployment)
* [Credits](https://github.com/jossansik/Portfolio-project5-partysite-frontend#Credits)
 
## About this project
 
This project is a a content-sharing web application with React and an API (Django Rest Framework) Back-End. This allows the users to browse and comment/like each other's content as well as add and delete their own. The users can also bookmark content.
This project is built on the concept of a user-driven community/inspirational platforn/website with images and creative ideas relating to everything about throwing parties and other social events.
This site is for everyone who is looking for creative ideas or tips about everything concearning parties and other social events. A user can be anybody thinking of throwing parties or just looking for inspiration for the future. Guiding principles for the website will be family-friendly, fun, creative & inspiring.
The project is divided into two repositories, this one for the front-end (this) and one for the back-end, found [here](https://github.com/jossansik/Portfolio-project5-partysite-backend).
As Agile methodology during the development process of planning and designing this project Github Issues was used for user stories and Github Projects for kanban board.
 
The board is found [here](https://github.com/users/jossansik/projects/7)
 
The project is deployed through [Heroku](https://heroku.com) and accessed at https://partysite-api.herokuapp.com/.
 
## Technology
 
This project is built with React+Bootstrap (HTML+CSS+Javscript), using [Heroku Postgres](https://www.heroku.com/postgres) as relational database. The application is run, operated and deployed through Heroku.
 
Images and media are uploaded and stored through [Cloudinary](https://cloudinary.com).
## Setup project locally
 
### Pre-requirements:
 
VS Code, node and yarn or npm.
 
.env.local with following properties:
- REACT_APP_APIURL
 
### Installation
 
- Git clone - To get all code to your computer locally
- cmd: 'yarn install' - To get all packages installed
- cmd: 'yarn start' - To start webserver
- cmd: 'yarn test' - To run all tests
## UX design
 
The UX design work process for this project is found in [this](https://www.figma.com/file/UE6Mi3sEHRQiKXhjAvIpzH/UX-for-PartyDimension?node-id=0%3A1) FigJam file.
 
### Business Vision:
 
Description: The vision is to create an inspiring, user-driven web community for everyone who is looking for creative ideas or tips about everything concearning parties and other social events. A user can be anybody thinking of throwing parties or just looking for inspiration for the future. Guiding principles for the website will be family-friendly, fun, creative and inspiring.
 
Target Groups: Because of the wide span of the subject, the target group is very broad and multifaceted in terms of age and other demographics.
 
Needs: User need to find a site where the can find the party content fast and in a easy way
 
Business goals: A goal could be make the site to a place where differents venues and other businesses would like to advertise.
 
Product: An inspirational party themed DIY web site/content-sharing platform.

## Features & site goals
 
### User goals
 
Users can view the content on the site to get inspiration and ideas
Users can log in and access their profile page
Users can upload and share their own content
User can bookmark other users content and thereby build a collection
... some more...
 
### Site admin goals
Features for (staff) adminwebsite

- Can manage categories
- Can manage tags

## User experience
Features for user

- ....

## Testing
 
### React tests
 
To run tests, run the following command: yarn test
 
Located in src/pages/home/__ tests __. 

#### Tests for home page.
 
1. expect Halloween to be found as category:
 
This tests that expect Halloween to be found as category using msw to mock api call.

## React architecture

The project re-uses Post.js which allows the user to for example remove post, like and bookmark on all pages where it is used.

The project re-uses Comment.js which show comments in a common way when used as a component.

## React libraries

The project uses a package called testing-library/jest-dom which allow us to test components.

The project uses a package called msw to mock api calls and return mocked data which is a nice feature when testing.

The project uses a package callde react-infinite-scroll-component which allow us to not load all items from datase in one call but rather in chunks.

The projects uses axios as a helper to fetch data from our api.

The project uses jwt-decode to decode our jwt token to get the expiration date from the authentication token.

The project uses bootstrap to get a neat way to handle boostrap in react with bootstrap components for example \<Row> instea of \<div className="row">.

## Issues

### Cookie 3d party mobile
Due to project requirements with website in separate domains the cookie cannot be shared and therefore it is a problem in Safari and mobile which does not allow cross-site tracking. It is however possible to turn it of in mobile, here is how you do it:
IMG

If the task did not require multiple projects I would have used an approach where I had put the website in the same domain with a proxy.

### Website logout
It is not possible to 

## Validator testing
 
### Css validation:
When validating the css files separatly the result is fine.
Jigsaw warns about 3-party (bootstrap) library which I cannot affect.
Jigsaw warns about google font import which is as expected.

### Html validation:
Document checking completed. No errors or warnings to show.
 
## Accessibility
TODO

## Deployment
 
Initial step for creating a app in Heroku:
 
- Created an account on Heroku.com (from the Heroku dashboard clicked the “Create new app” button).
- Named the app "partysite-api"
- Selected region (Europe), then clicked “Create app”.

## Credits
Wireframes and mockups, as well as images and vectors used on the website were made using [Figma](https://figma.com/)

The icons are from [this](https://fontawesome.com/) Font awesome
 
Data schema is created with [graphviz](https://graphviz.org/)

Alot of code is based on this project [drf-api](https://github.com/Code-Institute-Solutions/drf-api)

The images uploaded to the site are from Adobe stock and royalty free
