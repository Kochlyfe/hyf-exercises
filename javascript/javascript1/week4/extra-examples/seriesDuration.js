// Assignment - seriesDuration
const seriesDurations = [
  {
    title: "The Blue Planet",
    days: 0,
    hours: 6,
    minutes: 40,
  },
  {
    title: "Planet Earth",
    days: 0,
    hours: 10,
    minutes: 0,
  },
  {
    title: "Planet Earth II",
    days: 0,
    hours: 5,
    minutes: 0,
  },
];

// "Calculate how much time a tv series have taken as a percentage of an average lifespan of 80 years."
// The above statement tells me:
// 1. I need to calculate how long 80 years is - I'm thinking of using minutes as it will be easier to divide
// 2. I need to go over all the array elements, ie. I most likely have to do a loop
// 3. For each one I need to calculate their duration in minutes and divide by my total lifetime duration 
// 4. print result

// Then the example shows me that I need to make a total also:
// 5. In order to get the total I will need a variable to store the value
// 6. For each one I also add the duration in minutes to the total minutes variable
// 7. Once the loop has ended, I will print out the total value in the end

function logOutSeriesText() {
  // 1. calculate duration of 80 years in minutes
  const minutesIn80Years = 60 * 24 * 365; // I assume there are 365 days each year, so I won't have to deal with leap years - implement if you would like

  // 5. store the sum
  let totalDuration = 0;

  // 2. loop over seriesDuration
  seriesDurations.forEach((series) => {
    // 3. calculate duration for series (using a helper function)
    const duration = seriesDurationToMinutes(series);
    const result = (duration / minutesIn80Years).toFixed(3);
    // 4. print
    console.log(formatDurationLog(result, series.title))

    // 6. add to the sum
    totalDuration += duration;
  }) 

  // 7. print the total duration
  const totalResult = (totalDuration / minutesIn80Years).toFixed(3);
  console.log(formatDurationLog(totalResult))
}

logOutSeriesText(); // logs out the text found above

function seriesDurationToMinutes(series) {
  const daysToMinutes = series.days * 24 * 60;
  const hoursToMinutes = series.hours * 60;

  return daysToMinutes + hoursToMinutes + series.minutes;
}

function formatDurationLog(result, title) {
  if (title) {
    return `${title} took ${result}% of my life`; 
  }
  return `In total that is ${result}% of my life`;
}