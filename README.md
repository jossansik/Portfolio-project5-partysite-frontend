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
* [Issues](https://github.com/jossansik/Portfolio-project5-partysite-frontend#Issues)
* [Validator testing](https://github.com/jossansik/Portfolio-project5-partysite-frontend#Validator-testing)
* [Accessibility](https://github.com/jossansik/Portfolio-project5-partysite-frontend#Accessibility)
* [Deployment](https://github.com/jossansik/Portfolio-project5-partysite-frontend#Deployment)
* [Credits](https://github.com/jossansik/Portfolio-project5-partysite-frontend#Credits)
 
## About this project
This project is a a content-sharing web application with React and an API (Django Rest Framework) Back-End. This allows the users to browse and comment/like each other's content as well as add and delete their own. The users can also bookmark content.

The basic concept of this website is: user built, user driven. Meaning that the main asset of the site will be the users' own contributed material and that the interactions between the users and the integrated technologies should be meaningful, informative and results driven.

Party themed, having different choices of themes for parties is the main concept.

Features and functionalities include Sharing and collecting. Sharing your own ideas and thoughts, collecting and saving others ideas for the future.

Because of the wide span of the subject, the target group is very broad and multifaceted in terms of age and other demographics.

This site is for everyone who is looking for creative ideas or tips about everything concearning parties and other social events. A user can be anybody thinking of throwing parties or just looking for inspiration for the future. Guiding principles for the website will be family-friendly, fun, creative & inspiring.

Goal - The goal for this project was To build a community that make it easy and fun for party planners and guest to organize and find ideas, to inspire creativity and make the process more fun and exciting.

The project is divided into two repositories, this one for the front-end (this) and one for the back-end, found [here](https://github.com/jossansik/Portfolio-project5-partysite-backend). As Agile methodology during the development process of planning and designing this project Github Issues was used for user stories and Github Projects for kanban board.

The project board is found [here](https://github.com/users/jossansik/projects/7). 
The project board consists of both frontend and backend user stories to make the project objective coherent.

![image](https://user-images.githubusercontent.com/92020968/204350975-a9fd9214-cb66-4fdf-94b7-eb10edc1880b.png)

The project is deployed through [Heroku](https://heroku.com) and accessed at https://partysite.herokuapp.com/.
 
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

Illustrations are made by me.

These are some high fidelity wireframes made in Figma, they are not exactly like the end product but more of a concept visualization:

![Start Page](https://user-images.githubusercontent.com/92020968/198819991-42ef9c48-1980-46af-8d12-200eedfe456f.png)
![Category - Halloween](https://user-images.githubusercontent.com/92020968/198820007-09c1ab37-ba78-4c01-8132-f8f1a5010c4a.png)
![Fluffys profile](https://user-images.githubusercontent.com/92020968/198820011-0cc77bc9-1ba8-4016-b80e-7faee7b3a3c9.png)
![Bookmarks sorting](https://user-images.githubusercontent.com/92020968/198820026-6358279d-7917-414a-b513-9bd34f450938.png)
![View post](https://user-images.githubusercontent.com/92020968/198820034-47a1e952-0de7-424d-96c0-6cb645a3d238.png)

### Business Vision:
 
Description: The vision is to create an inspiring, user-driven web community for everyone who is looking for creative ideas or tips about everything concearning parties and other social events. A user can be anybody thinking of throwing parties or just looking for inspiration for the future. Guiding principles for the website will be family-friendly, fun, creative and inspiring.
 
Target Groups: Because of the wide span of the subject, the target group is very broad and multifaceted in terms of age and other demographics.
 
Needs: User need to find a site where the can find the party content fast and in a easy way
 
Business goals: A goal could be make the site to a place where differents venues and other businesses would like to advertise.
 
Product: An inspirational party themed DIY web site/content-sharing platform.

## Features & site goals
 
### User goals
 
- Users can view categories
- Users can filter posts within a category by tags
- Users can view the content on the site to get inspiration and ideas
- Users can comment on posts
- Users can log in and access their profile page
- Users can upload and share their own content
- Users can bookmark other users content and thereby build a collection
- Users can view their bookmarked posts
- Users can like content
- Users can edit their profile
- Users can delete their posts
- Users can log out

### Site admin goals
Features for (staff) adminwebsite

- Can manage categories
- Can manage tags

## User experience
Features for user

Start page:

![image](https://user-images.githubusercontent.com/92020968/198821780-9fdb3af5-1f68-4ab2-b9a2-20a046fbd5e3.png)

Log in page:

![image](https://user-images.githubusercontent.com/92020968/198821922-31b22817-0db4-49d0-9ba8-5182f229c294.png)

Category page:

![image](https://user-images.githubusercontent.com/92020968/198821940-cbc323fb-695c-4726-90d0-428aae1deff4.png)

Add post page:

![image](https://user-images.githubusercontent.com/92020968/198821970-1ac1e119-73db-4dc3-aa3a-22a5818e866c.png)

View post page (as post owner, delete post availability).

As seen user can like/bookmark/comment on the post as long as they are not the post owner:

![image](https://user-images.githubusercontent.com/92020968/198821989-23bc46fb-785f-4ac6-8ae7-f05853bac77c.png)

Profile page

User see list of their own posts with option to delete and navigate to edit profile page:

![image](https://user-images.githubusercontent.com/92020968/198822048-8996e71b-3066-4c23-a407-24527ad0d122.png)

Bookmarked posts page:

![image](https://user-images.githubusercontent.com/92020968/198822147-ed99a792-8451-44b4-8dab-348b1e425df0.png)

Profile edit page:

![image](https://user-images.githubusercontent.com/92020968/198822212-f6af1e15-eb56-407e-bb75-491d567f023a.png)

Sign up account page:

![image](https://user-images.githubusercontent.com/92020968/198822447-08dcc595-eb2f-4470-b3aa-fa0d879cac5a.png)

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

### Cookie 3rd party mobile
Due to project requirements with website in separate domains the cookie cannot be shared and therefore it is a problem in Safari and mobile which does not allow cross-site tracking. It is however possible to turn it of in mobile, here is how you do it:
![image](https://user-images.githubusercontent.com/92020968/198820423-ff5a080f-0b00-4e5f-ab5c-0fe6358f2e40.png)

If the task did not require multiple projects I would have used an approach where I had put the website in the same domain with a proxy.

### Admin web and website cookie
A known issue is that if a administrator log in to admin web and then visits website the cookie is not valid so the admin has to log out before using website.

## Validator testing
 
### Css validation:
When validating the css files separatly the result is fine.
Jigsaw warns about 3-party (bootstrap) library which I cannot affect.
Jigsaw warns about google font import which is as expected.

### Html validation:
Document checking completed. No errors or warnings to show.
 
## Accessibility
![image](https://user-images.githubusercontent.com/92020968/198821716-fe60939e-6a6a-4e00-8e6d-333744fb61ab.png)

## Deployment
 
Initial step for creating a app in Heroku:
 
- Created an account on Heroku.com (from the Heroku dashboard clicked the “Create new app” button).
- Named the app "partysite"
- Selected region (Europe), then clicked “Create app”.

Using Heroku for deployment, here is the overview:

![image](https://user-images.githubusercontent.com/92020968/198822260-f7722c03-164e-4cf5-af5a-b52da18aa174.png)

The settings in Heroku for my app:

![image](https://user-images.githubusercontent.com/92020968/198822286-800114ae-c13c-4dfd-907d-9a898712eeca.png)

## Credits
Wireframes and mockups, as well as images and vectors used on the website were made using [Figma](https://figma.com/)

The icons are from [this](https://fontawesome.com/) Font awesome

Alot of code is based on this project [moments](https://github.com/Code-Institute-Solutions/moments)

The images uploaded to the site are from Adobe stock and royalty free
