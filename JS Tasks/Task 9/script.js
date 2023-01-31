/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  getSummary() {
    return (
      this.title +
      " directed by" +
      this.director +
      "movie budget is" +
      this.budget
    );
  }
}

const movie = new Movie(
  "The Wolf of Wall Street",
  "Martin Scorsese",
  100000000
);
const movie2 = new Movie("Slacker", "Richard Linklater", 23000);
