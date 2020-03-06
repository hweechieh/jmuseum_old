## About
Museum enthusiasts able to hover through various categorised museums in Japan effortlessly on the map,
view the specific details such as operating hours, admission fee and have the total costs of admission
calculated for them. Jmuseum also provide conversion of currewncies. These features solves the need to
visit multiple museum sites and for efficient budget planning when planning museum trips in Japan.

## Further (I)
Seamless and elevated animation and interactivity to ensure pleasant user experience
Allow user to export selected museums and total costs so that they can have a copy

## Further (II)
Well designed mobile responsiveness

## Further (III)
Create own API for other apps to use data
Webscrap to get details of museums so that they can be up-to-date consistently instead of 
updating data manually


## Technologies
- React (v16)
- Express.js (v4) as production and development server
- Webpack 4 (production and development configurations)
- SCSS support (+ sanitize.css included)
- ES2015+

React boilerplate with ES2015, Express.js, and Webpack

## Features
- Preconfigured eslint and Prettier code formatter
- React Hot Loader
- Linux/MacOS/Windows

## Usage

### Make sure you have nodemon installed globally
```
npm install -g nodemon
```

### Installation
```bash
git clone https://github.com/wdi-sg/react-express-webpack.git
cd react-express-webpack
npm install


# remove boilerplate git references
rm ./.git
```

### Scripts
```bash
# run development mode
npm run dev

# run production mode
npm run build
npm start

# run prettier
npm run prettier

# run lint
npm run lint

# run on a different port
HTTP_PORT=3001 npm run dev
```

### Deploy

Some operating systems do not copy the server files to the build directory.

See the documentation here: [https://github.com/calvinmetcalf/copyfiles/blob/master/readme.md](https://github.com/calvinmetcalf/copyfiles/blob/master/readme.md)

## License
MIT License. Free use and change.
