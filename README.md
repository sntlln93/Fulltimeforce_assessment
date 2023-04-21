# FULLTIME FORCE TAKE-HOME TEST

This repository contains both a NestJS and a ReactJS project.

# Requirements
- NodeJS 18

# Installation

To run this project follow these steps:

### Create a ```backend/.env``` file based on the ```backend/.env.example``` file

This file already contains the variables needed and it's content.

```
cp backend/.env.example backend/.env
```

### Install both project's dependencies by running

```
cd backend && npm install
cd ..
cd frontend && npm install
```

### Run both projects by typing npm start in separate terminals

> Terminal #1: Run NestJS
> ```
> cd backend
> npm run start:dev
> ```

> Terminal #2: Run ReactJS
>```
> cd frontend
> npm run dev
> ```