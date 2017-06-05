## DevMtn-Travels

### Objective

####
Create an Angular application that uses routes to navigate through a travel site. You will be able to use routes and sub routes by the end of this project.
In this repo, you'll continue to practice fundamental Angular principles you've learned like controller and services.



### Application Design

####
This is located in the images folder in this project.

![Application Design](https://github.com/DevMountain/DevMtn-Travels/blob/master/img/DevMtn-Travels.png?raw=true, "Application Design")



### Setup

####

For this project you're going to need to serve your files through a live-server
* Fork and clone this repository [here](https://github.com/DevMountain/DevMtn-Travels)
* Open up your terminal and run
  `npm install -g live-server`
* When you are ready, cd into your folder and run
  `live-server`
  The line after should print out: `Starting ... at http://127.0.0.1:8080`
* Go to http://localhost:8080 in your browser. You should see the initial state of your application.

**Note** If your text editor supports its own live-server package, install the package and run live-server directly from your editor.


### Review the Existing Repo Code

####

Take a look at the file structure and files that have been provided to you for this project.

A few things have been included for you
* images - Contains all the needed images for this project
* services - We have provided all of the necessary data for you.
* index.html - The structure of the page and CDN's have been provided.
* styles - All the styles have been completed for this project. Feel free to add more or change them.
* views - All of the views have been added for you. However you will need to add some angular markup to get them to work correctly i.e. ng-repeat,ng-click
* app.js - Only the home state has been provided. It will be up to you to determine what else is necessary. Also, note that the $urlRouterProvider has already been configured to go to the homepage as a default.


Take a look at how the routes are broken into folders. This is a very easy way to keep things modular!
* 'styles/' folder -- stores all of our associated css files
* 'img/' folder -- stores all of our associated images
* 'js/' folder -- stores all of our associated js files. We could even modulate this more by creating a folder for services and controllers
* 'views/' folder -- stores all of our associated view.html files.


Take a look at the index.html page.
* `devmtnTravel` is included as the name of our app. ng-app="devmtnTravel"
* A navigation menu has been created that's going to be at the top of the page for every route - Also, notice that they don't do anything yet. They aren't linked to any views.
* The ui-router script tag is separate from Angular. It doesn't come built in with Angular
* &lt;ui-view></ui-view&gt; is included and inside of our index.html


The &lt;ui-view></ui-view&gt; element and it's placement is crucial to understanding how routing works.
The router is going to take that element and inject certain templates (html pages) into it depending on which route we're using.
The template that is injected into the &lt;ui-view></ui-view&gt; element depends entirely on what we specify in using the `$stateProvider` object in our app.js file.
Creating a router this way allows us to dynamically switch templates and controllers based on the URL.

Once you feel VERY comfortable with the existing codebase, move on to the next step.

### Configure the Router

####

In this step, we need to set up five more state views in our app.js.
Go ahead and add the following state views.

* `/packages/:country` - For all packages
* `/locations` - For all locations
* `/booked/:id` - Used to book a specific package.
* `/adventurers/` - This is going to be a sub route of the home page
* `/contact` - This is going to be a sub route of the home page


By setting up the router, we are telling our app which options it has in terms of which views we can see based on url, and what contents are related to those views such as our html templates or controllers.


When you are done, your code should look something like this.

The contact.html and the about-adventurers.html are both sub routes to the home page.




```javascript
   $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })
            .state('adventurers',{
                url:,
                templateUrl:
            })
            .state('contact',{
                url:'',
                templateUrl: ""
            })
            .state('packages',{
                url:'',
                templateUrl: "",
            })
            .state('booked',{
                url:'',
                templateUrl: "",
            })
            .state('locations',{
                url:'',
                templateUrl: "",
            });
```

####

```javascript
   $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })
            .state('adventurers',{
                url:'/adventurers',
                templateUrl: "../views/about-adventurers.html"
            })
            .state('contact',{
                url:'/contact',
                templateUrl: "../views/contact.html"
            })
            .state('packages',{
                url:'/packages/:country',
                templateUrl: "../views/packages.html"

            })
            .state('booked',{
                url:'/booked/:id',
                templateUrl: "../views/booked.html"

            })
            .state('locations',{
                url:'/locations',
                templateUrl: "../views/locations.html"

            });
```


### Controller Setup

####

Next, go ahead and create a controller for the packages, booked, and locations views

Create three new files, which are listed below, and place them in the controllers folder.

* locationsCtrl.js
* packagesCtrl.js
* bookedCtrl.js


Make sure that $scope and mainSrv are injected into each of the controllers. And before we get started, let's make sure that the controllers have been added to your index.html in a script source tag.



#### Add controller to state object

Now that we have created our controllers and added the script tags to the index.html we need to tell the router what controller it needs to use. On the packages, booked and location states add a controller property with the value as whatever you named the associated controller.
Now when you navigate to a view the router will know what controller it needs to be using

####
```javascript
   $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })
            .state('adventurers',{
                url:'/adventurers',
                templateUrl: "../views/about-adventurers.html"
            })
            .state('contact',{
                url:'/contact',
                templateUrl: "../views/contact.html"
            })
            .state('packages',{
                url:'/packages/:country',
                templateUrl: "../views/packages.html",
                controller: 'packagesCtrl'
            })
            .state('booked',{
                url:'/booked/:id',
                templateUrl: "../views/booked.html",
                controller: 'bookedCtrl'
            })
            .state('locations',{
                url:'/locations',
                templateUrl: "../views/locations.html",
                controller: 'locationsCtrl'
            });
```
### Test Controllers

####

Create a test variable in your controller called $scope.test and give it some value. In the associated template file that you created in the last step, put {{test}} somewhere in the file. Make sure that the value that you gave to $scope.test pops up on the view.


### Setup the templates

####

Now that our templates and controllers have been injected into each of the states, we need to add some markup to the templates to get them to work.

Go ahead to your browser and test your content. Now that we have created templates that are linked to the state config, we should be able to see them appear when the url has an appropriate extension.
For example use the following url extension to test the packages page : http://localhost:8080/#/packages.

If everything works correctly, go through the index.html file and the template files, and add any ui-sref attributes that would be necessary to connect to the different views. The templates we need to make changes to are the booked.html,locations.html and the packages.html. Open up those files and you will see comments guiding you through the steps



### Getting Data from service

####

Now that we have tested the controllers and know they work we can get the data we need from the service
We want to gain access to the travelInfo and packageInfo data that is present in our mainSrv by calling to the service through our controllers.

Go ahead and delete the test variables you made and create new $scope variables that are accessible in the html view and associate them with the data that was pulled from the service files.

If you followed the steps located in the views then you should see the data from the service on the page. If you dont see anything make sure your getting the data in your controller from the service.

* Note: The information on the booked.html view  will not display until we configure the data to the specific state by id.



### Finish the booked.html view

####

Let's start by injecting $state into the bookedCtrl, if you console.log($state) you will see that we get a ton of info about our application state. What we need is the $state.params, this will give us the id being passed though the url params

Now that we have the $state.params "id" we can loop over the data we are getting from our service and check if we have a object that has the same id as the $state.params, if we find a object that has that id then set that object on a $scope variable and then attach that variable to the booked view using {{}}


### Resources

####

* Controller scopes http://jsfiddle.net/8pX7p/
* ng-repeat http://jsfiddle.net/PhCUk/1/
* Filter http://jsfiddle.net/WS8gS/1/
* http://docs.angularjs.org/guide/concepts



### Contributions

####

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.


### Copyright

####

© DevMountain LLC, 2016. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
