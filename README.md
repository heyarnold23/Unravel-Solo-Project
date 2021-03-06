# Unravel

![GIF of Unravel splash page](https://i.ibb.co/x5S6RMP/ezgif-6-ebb3f4a07083.gif)

## What is Unravel?

[Unravel](https://unravel-genius-clone.herokuapp.com/) is a full stack app utilizing PostgreSQL, Express, and React/Redux. Unravel allows logged in users to browse various song lyrics pages and share their interpretations of what a line means via annotations. Aside from that, users can also post comments on each song page as well. Currently, Unravel is only seeded with a few demo users as well as a handful of song pages to interact with.

## Features

### Annotations

Logged in users are able to highlight lines of text within a song page and share their thoughts on what they think it means.
They can also update it at any time as well as delete it if they desire. 

![GIF of Unravel annotation feature](https://i.ibb.co/F4z95qg/ezgif-6-6d073778945c.gif)

### Comments

Logged in users are able to comment on song pages, whether just to provide extra thought on the song overall or just for fun!

![GIF of Unravel comment feature](https://i.ibb.co/GCCJcLd/ezgif-6-48dfc67ff2be.gif)

## Application Architecture

Unravel is built on a React frontend with an Express backend, using PostgreSQL as a database.

## Frontend Overview

Unravel does the vast majority of its application logic on the backend, but display/interaction logic on the frontend is managed using several technologies.

### Frontend Technologies Used

#### React 

Unravel is a React application. All display logic is handled by the React libraries.

#### Redux

Unravel makes extensive use of Redux. All state management is handled with Redux, with thunks making API calls to the backend server for data. 

## Backend Overview

Unravel uses an Express server with a PostgreSQL database.

### Backend Technologies Used

#### Express

Express was my choice for this project and it proved to be very handy in terms of being able to manipulate what I needed to send from the back to front and vice versa. It was my first time utilizing it with React/Redux on the front end and ended up being a great learning experience.


#### PostgreSQL

PostgreSQL was the database of choice because it is simple to work with, and is easily manipulable using Express.

#### SQLAlchemy

SQLAlchemy was the ORM of choice for Unravel because of how nicely it integrates with PostgreSQL. All table management and data seeding was handled neatly and simply by way of SQLAlchemy.

## Conclusion and Next Steps

So far I am pleased with the progress made on Unravel's functionality. In the future I would like to implement a search bar to allow users to search for a song on the site. I am also thinking about implementing Genius's API as I had just recently discovered it. It would be nice to implement pagination as well to accompany however many more songs get added from the API.
