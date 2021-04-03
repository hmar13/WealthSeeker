# WealthSeeker

<p align="center">
  <img src="https://user-images.githubusercontent.com/69591006/113473778-fc493600-946b-11eb-93cd-99483135bc9c.png">
</p>

WealthSeeker is a mobile application aimed at helping its users better manage their investment portfolios.

The app allows people to research equity, forex and derivative markets around the world while also saving chosen assets to their watchlist for easy future viewing.

## Screenshots

<p align="center">
  <img src="https://user-images.githubusercontent.com/69591006/113473315-3c5ae980-9469-11eb-90dd-85f453425bcb.png" width="200">
  <img src="https://user-images.githubusercontent.com/69591006/113473309-36650880-9469-11eb-85cc-ca95b915cec0.png" width="200">
  <img src="https://user-images.githubusercontent.com/69591006/113473316-3ebd4380-9469-11eb-8d62-bea0972a0608.png" width="200">
</p>

## Before you start
Please get a free API key from [IEX Cloud](https://iexcloud.io/) and [NEWS API](https://newsapi.org/).
Install a [Mobile Application Emulator](https://developer.android.com/studio?gclid=CjwKCAjwpKCDBhBPEiwAFgBzj1Q0XvFfwjmk25ngpE-7ZqxAHw-giz-4DRL47GjYiLN3pfBICzN3lRoCYZwQAvD_BwE&gclsrc=aw.ds) on your phone or desktop
Install [Expo](https://docs.expo.io/get-started/installation/)

* Add a .env file in the server folder with the following: 
```
DB_DATABASE='your database name goes here' 
DB_HOST='your host name goes here'
DB_PORT='your port name goes here'
DB_USER='your database username goes here'
DB_PASSWORD='your database password goes here'
```

* Add a appConfig.json file in the client folder with the following:
```
{
  "BASE_URL": "your localhost url goes here",
  "IEX_URL": "your iex url goes here",
  "IEX_TOKEN": "your iex token goes here",
  "NEWS_URL": your news url goes here",
  "NEWS_TOKEN": "your news token goes here",
}
```
## Getting started

1. Make sure you have a PostgreSQL service running in your local environment.
2. Clone the repo
```
git clone https://github.com/hmar13/WealthSeeker.git
```
3. Install dependencies for both the client and server
* Client:
```
cd client
```
```
npm install or npm i
```
* Server:
```
cd server
```
```
npm install or npm i
```
4. Start the development server
```
nodemon or node index.js
```
5. Navigate to the client folder and run the React Native application
```
npm start
```
6. Run on Device or Emulator

## Tech Stack
* [React Native](https://reactnative.dev/) (ejected from Expo)
* [Express](https://expressjs.com/)
* [PostgreSQL](https://www.postgresql.org/)

## Author

Haydn Martin - [Github](https://github.com/hmar13) - [LinkedIn](https://www.linkedin.com/in/haydnmartin/)
