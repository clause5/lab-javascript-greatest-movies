// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr){
  let directors = arr.map(movie => movie.director);
  return directors;


}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function cleanDirectors(arr){
  let arrToClean =getAllDirectors(arr);
  if(arrToClean.length === 0){return 0}
  else{
      let clean = new Set(arrToClean);
      return [...clean];
      
  }
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
  function howManyMovies(arr){
      return arr.length === 0 ? 0 : (arr.filter(movie => ((movie.genre).includes('Drama') && movie.director === 'Steven Spielberg'))).length;
  }


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
  function scoresAverage(arr){
      if(arr.length ===0 ){
          return 0;
      }else{
         
          let scores = arr.map(movie =>{ if(!movie.score){ return 0 }else{ return movie.score}});
          
              let suma = scores.reduce(function(a,b){return a+b;});
               return Number((suma/ arr.length).toFixed(2));
          
          
      }
      
  }


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr){
    
  let dramaMovies = arr.filter(movie => (movie.genre).includes('Drama'));
  
  if(dramaMovies.length === 0){
    
      return 0;
  }else if(dramaMovies.length === 1){
    
      return Number((dramaMovies[0].score).toFixed(2));
  }else{
    
      let filterRates = dramaMovies.map(movie => movie.score)
     
      let sum = filterRates.reduce(function(a, b){ return a + b; });
      
       return Number((sum/ dramaMovies.length).toFixed(2));
  }

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr){
  let sortedByYear = arr.sort(((a, b) => {

 if(a.year === b.year){
     return (a.title).localeCompare(b.title);
 }else{
     return a.year - b.year
 }


  }));
 return [...sortedByYear];
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(arr){
  let getTitles = arr.map(movie => movie.title);
    let sortedByTitle = getTitles.sort();
    
    return sortedByTitle.slice(0,20);
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr){
  function convertToMinutes(str){
      let numbers = /(\d+)/g;
      let hours = /(\d+h{1})/g;
      let minutes = /(\d+min{1})/g;
      let h = str.match(hours);
      
      if(h === null){
        h = 0;
      }else{
        h = (Number(h[0].match(numbers)))*60;
      }
      
      let m = str.match(minutes);
      if(m === null){
        m=0;
      }else{
        m = Number(m[0].match(numbers))
      }
    
      let totalMinutes = h + m;
    
      return totalMinutes;
    
    }
  
    let moviesDurationInMinutes = arr.map(function(movie){
      let copyMovie = {...movie};
      copyMovie.duration = Number(convertToMinutes(movie.duration))
      return copyMovie;
  });

  return [...moviesDurationInMinutes];

}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
  
function bestYearAvg(arr) {
  let sumOfRatesPerYear = {};
  let moviesPerYear = {};
  let avgPerYear = {};
  if (arr.length === 0) {
    return null;
  }
  arr.forEach(function (movie) {
    if (sumOfRatesPerYear[movie.year]) {
      moviesPerYear[movie.year] += 1;
      sumOfRatesPerYear[movie.year] += parseFloat(movie.score);
      avgPerYear[movie.year] = parseFloat((sumOfRatesPerYear[movie.year] / moviesPerYear[movie.year]).toFixed(2));
    } else {
      sumOfRatesPerYear[movie.year] = parseFloat(movie.score);
      moviesPerYear[movie.year] = 1;
      avgPerYear[movie.year] = parseFloat(movie.score);
    }
  });
  let year = Object.keys(avgPerYear).reduce(function (a, b) {
    if (avgPerYear[a] === avgPerYear[b]) {
      if (b < a) {
        return b;
      }
      return a;
    } else if (avgPerYear[a] > avgPerYear[b]) {
      return a;
    }
    return b;
  });
  return `The best year was ${year} with an average score of ${avgPerYear[year]}`;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
