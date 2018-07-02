# weatherU

Find out weatherU need that umbrella or not.  This project was built with React/Redux and leverages the Open Weather Map API to fetch weather data every 3 hours over a total of 5 days.

***

[Installation](https://github.com/chris-malloy/weatherU#installation) | [Testing](https://github.com/chris-malloy/weatherU#testing) | [Challenges and Solutions](https://github.com/chris-malloy/weatherU#challenges-and-solutions) | [Code Snippets](https://github.com/chris-malloy/weatherU#code-snippets) | [Acknowledgements](https://github.com/chris-malloy/weatherU#acknowledgements)

***

## Installation

OS X & Linux:

```sh
npm install
```

## Testing

Snapshot testing is done with Jest and assertion testing is done with Enzyme.

```sh
npm install --save-dev jest babel-jest babel-preset-env babel-preset-react react-test-renderer
```

```sh
npm i --save-dev enzyme enzyme-adapter-react-16
```

### Challenges and Solutions

Here are some of challenges I encountered along the way and how I went about solving them.

#### Accessing Weather Data Difficulty

This api is not the easiest to work with.  Parts of the JSON are an only child inside of an array, which I found to be illogical.  Potentially this could be a watered down version of their 16 day forecast Get route, in which case that woul dmake more sense.  In any case, this was definitely could practice in learning how to parse out some confusing JSON.  

Often I would access the JSON this way:

```javascript
itemArray = props.weatherList.list;
```

Which would return undefined because this way was correct for how the JSON was set up:

```javascript
itemArray = props.weatherList[0].list;
```

The lesson learned to is define a plan for how to access the API from the very beginning, so as to not waste precious development time.

### Code Snippets

I wanted to render a message for the user based on the weather status code.  There about 50 or so status code, but most of them can be grouped in a category (all 200 codes have some type of thunder). Because of this, I decided to make use of the javascript string prototype includes to find what the first digit was and then set the user message for all codes in that group.  Coverting the code from number to string was easy enough, but the tricky part was actually associating the right code string with the right message string.  Initally I just took a brute force method and used a conditional tree, but this was not elegant, and makes for a code base that scales poorly.  After some research I was about to set up my code strings and message strings in a Map, and write a function to loop through that Map and call 'includes' on each respective code string.  The result looks like this.

```javascript
  var code = props.code.toString() // to use string proto includes()

  const messageMap = {
    "2": "Oh no, thunder! Bring 5 umbrellas.",
    "3": "Just a drizzle today!",
    "5": "Umbrella time, it's one of those days.",
    "6": "Snow Day!!!",
    "7": "Theres' some weird stuff going on today.",
    "8": "Happy Day! Leave the umbrella home.",
    "90": "Just stay home it's crazy out there."
  };

  const setUmbrellaMessage = () => {
    for (var i in messageMap) {
      if (code.includes(i)) {
        return messageMap[i];
      };
    };
  };

  var umbrellaMsg = setUmbrellaMessage();
```

this setUmbrellaMessage is a big win because I can now extract this function to a utils folder, which would make the code for this component more compact and easier to maintain.  Similarly I can add as many code/message string pairs in the messageMap (which I can extract out to a constants folder) with relative ease.  Hard coding is never fun, so arranging the code this way allows for maximum maintainability and scalability.

#### Future Updates

* look into redux-thunk to control action creators so they don't respond with 404 errors
* allow user to change UI color/skin/theme
* maps integration
* show data graphs
* update data every 5 minutes
* cache queries in local storage

