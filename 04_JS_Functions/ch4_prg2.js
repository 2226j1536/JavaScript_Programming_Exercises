// Displaying information from similar objects

var movie1;
var movie2;
var movie3;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
  title: "Spectre",
  actors: "Daniel Craig, Christoph Waltz",
  directors: "Sam Mendes"
};

movie3 = {
  title: "Star Wars: Episode VII - The Force Awakens",
  actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
  directors: "J.J.Abrams"
};

/* Further Adventures
 *
 * 1) Add a fourth movie and display its info
 *
 * 2) All the movie info is in one big block on the console.
 *    Change the code to space out the different movies.
 *
 * 3) Create objects to represent three calendar events
 *
 * 4) Display info from the three events on the console.
 *
 */
var movie4;
var movie4 = {
    title: "The Martian",
    actors: "Matt Damon, Jessica Chastain",
    directors: "Ridley Scott"
};
function displayMovieInfo(movie) {
    console.log("Movie information for " + movie.title);
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
}
displayMovieInfo(movie1);
displayMovieInfo(movie2);
displayMovieInfo(movie3);
displayMovieInfo(movie4);

var event1={
    title:"conference",
    time:"10:30",
    date:"22-09-2022"
}
var event2={
    title:"friends party",
    time:"12:30",
    date:"26-12-2022"
}
var event3={
    title:"Birthday party",
    time:"7:30",
    date:"09-09-2024"
}
function displayEventInfo(event) {
    console.log("Event:" + event.title);
    console.log("Date:" + event.date);
    console.log("Time:" + event.time);
}
displayEventInfo(event1);
displayEventInfo(event2);
displayEventInfo(event3);
  
  