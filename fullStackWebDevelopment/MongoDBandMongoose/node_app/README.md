# Node.js and Express Beginner Summary:

In this tutorial I learned how to install Node.js, Express, EJS, setup a proper
directory structure, and run a local server. I created two simple pages that
listed users and displayed their information. 
In upcoming tutorials I'll connect to a database using Node.js, and incorporate
other helpful libraries that aid in building web applications with Node.js.

### More information on Node.js as resources:

	![TutorialsPoint Guide](http://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm)
	![Express Tutorials](http://expressjs.com/en/starter/hello-world.html)
	![Top 10 Mistakes Node.js Developers Make](https://www.airpair.com/node.js/posts/top-10-mistakes-node-developers-make)
	![The Art of Node](https://github.com/maxogden/art-of-node#the-art-of-node)

### Running Nodemon:
	Terminal into root folder, then enter the following:
	nodemon app.js

# Mongo DB and Mongoose

### Resources

![Official MongoDB Quick Start Guide](http://mongodb.github.io/node-mongodb-native/2.1/quick-start/)
![Collection API: e.g. find(), insertOne(), etc.](http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html)
![Connecting and Working with MongoDB with Node & Express](https://www.terlici.com/2015/04/03/mongodb-node-express.html)
![Node.js body parser module](https://github.com/expressjs/body-parser)

### Install

	brew install mongodb
	
	TODO: Upgrade XCODE
	TODO: brew install mongodb

### Mongo DB Start

	Go to the root folder of your computer and fire up Mongodb with the terminal command ```mongod```

	```npm install mongodb``` in the project folder. Then ```nodemon app.js``` and fire up the application.

	```npm install body-parser```

##### Changed package.json file to the following:

	  "mongod": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/mongod/-/mongod-2.0.0.tgz",
      "integrity": "sha1-zuxLcjBRkOhdb4+smS8VpH6xjHQ=",
      "requires": {
        "promise-queue": "^2.2.3"
      }
    },

##### Hosting to Heroku

![Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
![Procfile - Running the App](https://devcenter.heroku.com/articles/getting-started-with-nodejs#define-a-procfile)
![mLab Connecting the Database](https://docs.mlab.com/connecting/)





##### Deprecation Fixes:

![Current URL string parser is deprecated warning](https://stackoverflow.com/questions/50448272/avoid-current-url-string-parser-is-deprecated-warning-by-setting-usenewurlpars)

![collection.update is deprecated. Use updateOne, updateMany, or bulkWrite instead.
]()
![Mongoose Deprecation Warning Fixes](https://mongoosejs.com/docs/deprecations.html)
![]()














