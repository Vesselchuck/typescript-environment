import { line, Catalog } from "./media-catalog";

class School {
  private _name: string;
  private _averageTestScores: number;
  private _numberOfStudents: number;
  private _schoolOverview: string;
  private _level: string;

  constructor(
    name: string,
    averageTestScores: number,
    numberOfStudents: number,
    schoolOverview: string,
    level: string
  ) {
    this._name = name;
    this._averageTestScores = averageTestScores;
    this._numberOfStudents = numberOfStudents;
    this._schoolOverview = schoolOverview;
    this._level = level;
  };

  get name(): string {
    return this._name;
  };

  get averageTestScores(): number {
    return this._averageTestScores;
  };

  get level(): string {
    return this._level;
  };

  get numberOfStudents() {
    return this._numberOfStudents;
  };

  set averageTestScores(input: number) {
    if (typeof input === "number") {
      this._averageTestScores = input;
    } else {
      console.log("Invalid input: averageTestScores must be set to a number.");
    };
  };

  set numberOfStudents(input: number) {
    if (typeof input === "number") {
      this._numberOfStudents = input;
    } else {
      console.log("Invalid input: numberOfStudents must be set to a number.");
    };
  };

  quickFacts(): void {
    console.log(`${this._name} is an educational institution at the ${this._level} level, catering to ${this._numberOfStudents} students. Average Test Scores: ${this._averageTestScores}. ${this._schoolOverview}`);
  };

  static pickSubstituteTeacher(substituteTeachers: string[]): void {
    const maxValue = substituteTeachers.length;
    const randomValue = Math.floor(Math.random() * maxValue);
    const randomTeacher = substituteTeachers[randomValue];
    console.log(`${randomTeacher} will be assigned as a substitute teacher.`);
  };
};

class PrimarySchool extends School {
  private _pickupPolicy: string;

  constructor(
    name: string,
    averageTestScores: number,
    numberOfStudents: number,
    schoolOverview: string,
    pickupPolicy: string,
    level: string = "primary"
  ) {
    super(name, averageTestScores, numberOfStudents, schoolOverview, level);
    this._pickupPolicy = pickupPolicy;
  };

  get pickupPolicy() {
    return this._pickupPolicy;
  };
};

class MiddleSchool extends School {
  private _schoolClubs: string[];

  constructor(
    name: string,
    averageTestScores: number,
    numberOfStudents: number,
    schoolOverview: string,
    schoolClubs: string[],
    level: string = "middle"
  ) {
    super(name, averageTestScores, numberOfStudents, schoolOverview, level);
    this._schoolClubs = schoolClubs;
  };

  get schoolClubs() {
    return this._schoolClubs;
  };
};

class HighSchool extends School {
  private _sportsTeams: string[];

  constructor(
    name: string,
    averageTestScores: number,
    numberOfStudents: number,
    schoolOverview: string,
    sportsTeams: string[],
    level: string = "high"
  ) {
    super(name, averageTestScores, numberOfStudents, schoolOverview, level);
    this._sportsTeams = sportsTeams;
  };

  get sportsTeams() {
    return this._sportsTeams;
  };
};

const lorraineHansbury = new PrimarySchool("Lorraine Hansbury", 82.5, 514, "Our school transcends traditional education, encouraging exploration, critical thinking, and creativity. Our dynamic curriculum prepares students for a future where adaptability is key.", "Students must be picked up by a parent, guardian, or a family member over the age of 13.");
lorraineHansbury.quickFacts();
PrimarySchool.pickSubstituteTeacher(["Jamal Crawford", "Lou Williams", "J. R. Smith", "James Harden", "Jason Terry", "Manu Ginobli"]);
console.log(line);

const meadowbrookAcademy = new MiddleSchool("Meadowbrook Academy", 89.2, 587, "Discover our academy, a hub for holistic education. Our devoted faculty, cutting-edge facilities, and commitment to excellence empower students academically, socially, and personally.", ["Art and Creativity Society", "Robotics Club", "Environmental Awareness Group", "Debate and Public Speaking Society"]);
meadowbrookAcademy.quickFacts();
console.log(meadowbrookAcademy.schoolClubs);
console.log(line);

const alSmith = new HighSchool("Al E. Smith", 75.8, 415, "Dedicated to excellence, we blend academics with character development. Instilling integrity, empathy, and resilience, we prepare students for leadership in a supportive and diverse community.", ["Baseball", "Basketball", "Volleyball", "Track and Field"]);
alSmith.quickFacts();
console.log(alSmith.sportsTeams);
console.log(line);

const schoolCatalog = new Catalog();
schoolCatalog.addEntry(lorraineHansbury);
schoolCatalog.addEntry(meadowbrookAcademy);
schoolCatalog.addEntry(alSmith);

console.log("All Schools in catalog:", schoolCatalog.getAllEntries());