// Using Math.min and Math.max

var showSmaller = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(smaller + " is smaller than " + larger);
};
var showLarger = function(num1, num2){
    var small = Math.min(num1, num2);
    var large1 = Math.max(num1, num2);
    console.log(large1+ " is larger than " + small);
};

showLarger(3,-9);
showLarger(9,10);

showSmaller(12, 3);


/* Further Adventures
 *
 * 1) Try out some different arguments.
 *
 * 2) Write a showLarger function.
 *
 * 3) Write a showSmallest function that takes
 *    three arguments and displays the smallest
 *    of the three.
 *
 */