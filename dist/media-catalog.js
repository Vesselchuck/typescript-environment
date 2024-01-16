"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalog = exports.line = void 0;
const line = "-".repeat(70);
exports.line = line;
class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    ;
    get title() {
        return this._title;
    }
    ;
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    ;
    get ratings() {
        return this._ratings;
    }
    ;
    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }
    ;
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
    ;
    getAverageRating() {
        console.log(this._ratings);
        const sum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
        const length = this._ratings.length;
        return sum / length;
    }
    ;
    addRating(input) {
        const numberInput = Number(input);
        if (!isNaN(numberInput) && numberInput >= 1 && numberInput <= 5) {
            this._ratings.push(input);
        }
        else {
            console.log("Input is not between 1 and 5");
        }
        ;
    }
    ;
}
;
class Book extends Media {
    constructor(title, author, genre, pages) {
        super(title);
        this._author = author;
        this._genre = genre;
        this._isCheckedOut = false;
        this._pages = pages;
        this._ratings = [];
    }
    ;
    get author() {
        return this._author;
    }
    ;
    get pages() {
        return this._pages;
    }
    ;
    get genre() {
        return this._genre;
    }
    ;
}
;
const historyOfEverything = new Book("A Short History of Nearly Everything", "Bill Bryson", "Popular Science", 544);
console.log(historyOfEverything.title);
console.log(historyOfEverything.author);
console.log(historyOfEverything.genre);
console.log(historyOfEverything.pages);
console.log(line);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.ratings;
console.log(historyOfEverything.getAverageRating());
console.log(line);
class Movie extends Media {
    constructor(title, director, runtime, score) {
        super(title);
        this._director = director;
        this._isCheckedOut = false;
        this._ratings = [];
        this._runtime = runtime;
        this._score = score;
    }
    ;
    get director() {
        return this._director;
    }
    ;
    get runtime() {
        return this._runtime;
    }
    ;
    get score() {
        return this._score;
    }
    ;
}
;
const speed = new Movie("Speed", "Jan de Bont", 116, "Mark Mancina");
console.log(speed.title);
console.log(speed.director);
console.log(speed.runtime);
console.log(speed.score);
console.log(line);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(3);
speed.addRating(4);
speed.addRating(5);
speed.ratings;
console.log(speed.getAverageRating());
console.log(line);
class CD extends Media {
    constructor(title, released, singer, tracks) {
        super(title);
        this._isCheckedOut = false;
        this._ratings = [];
        this._released = released;
        this._singer = singer;
        this._tracks = tracks;
    }
    ;
    get released() {
        return this._released;
    }
    ;
    get singer() {
        return this._singer;
    }
    ;
    get tracks() {
        return this._tracks;
    }
    ;
    shuffle() {
        const shuffledTracks = this._tracks;
        for (let i = shuffledTracks.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledTracks[i], shuffledTracks[j]] = [shuffledTracks[j], shuffledTracks[i]];
        }
        ;
        return shuffledTracks;
    }
    ;
}
;
const midnights = new CD("Midnights", 2022, "Taylor Swift", ["Lavender Haze", "Maroon", "Anti-Hero", "Snow on the Beach", "You're on Your Own, Kid", "Midnight Rain", "Question...?", "Vigilante Shit", "Bejeweled", "Labyrinth", "Karma", "Sweet Nothing", "Mastermind"]);
console.log(midnights.title);
console.log(midnights.released);
console.log(midnights.singer);
console.log(midnights.tracks);
console.log(line);
midnights.toggleCheckOutStatus();
console.log(midnights.isCheckedOut);
midnights.addRating(4);
midnights.addRating(5);
midnights.addRating(4);
midnights.ratings;
console.log(midnights.getAverageRating());
console.log(line);
console.log(midnights.shuffle());
class Catalog {
    constructor(entries = []) {
        this._entries = entries;
    }
    ;
    addEntry(entry) {
        this._entries.push(entry);
    }
    ;
    removeEntry(entry) {
        this._entries = this._entries.filter(item => item !== entry);
    }
    ;
    getAllEntries() {
        return this._entries;
    }
    ;
}
exports.Catalog = Catalog;
;
const mediaCatalog = new Catalog();
mediaCatalog.addEntry(historyOfEverything);
mediaCatalog.addEntry(speed);
mediaCatalog.addEntry(midnights);
console.log("All Media Items in catalog:", mediaCatalog.getAllEntries());
console.log(line);
//# sourceMappingURL=media-catalog.js.map