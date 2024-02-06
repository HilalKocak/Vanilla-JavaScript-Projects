### Day 6 contains implementing type-ahead feature where we have got a list of cities and states with their population in it. When we writing the new word it shows us matching all words. (Search bar)

#### You can try the deployed app from here: https://javascript30challenge-day6.netlify.app/

#### Web app looks like this with starter file:
![Screenshot of starter file](img/starter.png)

#### Web app looks like this after finished the project:
![Screenshot of deployed app](img/after.png)

##### Data is coming from an external source and you can see as a following json.
https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json

```[
    {
        "city": "New York", 
        "growth_from_2000_to_2013": "4.8%", 
        "latitude": 40.7127837, 
        "longitude": -74.0059413, 
        "population": "8405837", 
        "rank": "1", 
        "state": "New York"
    }, 
    {
        "city": "Los Angeles", 
        "growth_from_2000_to_2013": "4.8%", 
        "latitude": 34.0522342, 
        "longitude": -118.2436849, 
        "population": "3884307", 
        "rank": "2", 
        "state": "California"
    }, 
    {
        "city": "Chicago", 
        "growth_from_2000_to_2013": "-6.1%", 
        "latitude": 41.8781136, 
        "longitude": -87.6297982, 
        "population": "2718782", 
        "rank": "3", 
        "state": "Illinois"
    }, 
    {
        "city": "Houston", 
        "growth_from_2000_to_2013": "11.0%", 
        "latitude": 29.7604267, 
        "longitude": -95.3698028, 
        "population": "2195914", 
        "rank": "4", 
        "state": "Texas"
    }, 
```

