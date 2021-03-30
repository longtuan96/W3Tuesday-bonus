const people = [
  {
    id: 1,
    firstName: "Loi",
    lastName: "Tran",
    age: 13,
    favoriteColors: ["red", "white", "blue"],
    favoriteSingers: ["Mariah Carey", "Justin Bieber", "Britney Spears"],
    nationality: "USA",
    gender: "m",
    zodiac: "Cancer",
    jobTitle: "Instructor",
    company: "CoderSchool",
    friendsCount: 5000,
    followers: 4000,
    height: "160mm",
    weight: "70kg",
  },
  {
    id: 2,
    firstName: "Quyen",
    lastName: "Thai",
    age: 23,
    favoriteColors: ["bronze", "white", "green"],
    favoriteSingers: ["Son Tung", "Minh", "Anh", "Taeyoung"],
    nationality: "VN",
    gender: "f",
    zodiac: "Taurus",
    jobTitle: "Student",
    company: "Grab",
    friendsCount: 1500,
    followers: 100,
    height: "160mm",
    weight: "50kg",
  },
  {
    id: 3,
    firstName: "Shawn",
    lastName: "Talvacchia",
    age: 32,
    favoriteColors: ["teal", "white", "torquise"],
    favoriteSingers: ["Romare", "Mount Kimbie", "Nicholas Jaar"],
    nationality: "USA",
    gender: "m",
    zodiac: "Cancer",
    jobTitle: "Student",
    company: "Facebook",
    friendsCount: 500,
    followers: 900,
    height: "180mm",
    weight: "70kg",
  },
  {
    id: 4,
    firstName: "Phuong",
    lastName: "Tran",
    age: 27,
    favoriteColors: ["blue", "pink", "green"],
    favoriteSingers: ["Chris Young", "Bruno Mars", "Taylor Swift"],
    nationality: "VN",
    gender: "f",
    zodiac: "Leo",
    jobTitle: "Student",
    company: "Google",
    friendsCount: 900,
    followers: 100,
    height: "155mm",
    weight: "65kg",
  },
  {
    id: 5,
    firstName: "Mai",
    lastName: "Hoang",
    age: 29,
    favoriteColors: ["red", "white", "black"],
    favoriteSingers: ["2pac", "Sia", "Johan Sebastian Von Bach"],
    nationality: "SE",
    gender: "f",
    zodiac: "Pisces",
    jobTitle: "Student",
    company: "Spotify",
    friendsCount: 1500,
    followers: 400,
    height: "140mm",
    weight: "87kg",
  },
  {
    id: 6,
    firstName: "Khuong",
    lastName: "Huynh",
    age: 18,
    favoriteColors: ["red", "green", "blue"],
    favoriteSingers: ["Adele", "Celine Dion", "Tuan Ngoc"],
    nationality: "vn",
    gender: "m",
    zodiac: "aries",
    jobTitle: "Student",
    company: "Amazon",
    friendsCount: 1505,
    followers: 10,
    height: "161mm",
    weight: "74kg",
  },
  {
    id: 7,
    firstName: "Thien",
    lastName: "Hoang",
    age: 28,
    favoriteColors: ["red", "white", "blue"],
    favoriteSingers: ["Adele", "Nat King Cole", "Westlife"],
    nationality: "VN",
    gender: "m",
    zodiac: "Aries",
    jobTitle: "Student",
    company: "Vingroup",
    friendsCount: 999,
    followers: 540,
    height: "148mm",
    weight: "54kg",
  },
  {
    id: 8,
    firstName: "Hang",
    lastName: "Tran",
    age: 29,
    favoriteColors: ["gray", "navy", "maroon"],
    favoriteSingers: ["Maroon5", "Linkin Park", "Eminem"],
    nationality: "vn",
    gender: "m",
    zodiac: "Sagittarius",
    jobTitle: "Student",
    company: "Go Viet",
    friendsCount: 500,
    followers: 300,
    height: "143mm",
    weight: "89kg",
  },
  {
    id: 9,
    firstName: "Parsa",
    lastName: "Taheri",
    age: 19,
    favoriteColors: ["Green", "Blue", "Yellow"],
    favoriteSingers: ["Shawn Mendes", "Lana Del Rey", "Eminem"],
    nationality: "UK",
    gender: "M",
    zodiac: "capricorn",
    jobTitle: "Student",
    company: "Vodafone",
    friendsCount: 2200,
    followers: 100,
    height: "173mm",
    weight: "62kg",
  },
  {
    id: 10,
    firstName: "Charles",
    lastName: "Lee",
    age: 26,
    favoriteColors: [
      "red",
      "white",
      "amber",
      "peach",
      "vanilla",
      "chocolate",
      "charcoal gray",
      "Big Apple Red",
      "Bubble Bath",
      "Kiss me on the Tulips",
    ],
    favoriteSingers: ["Kanye West"],
    nationality: "USA",
    gender: "m",
    zodiac: "Cancer",
    jobTitle: "Chief Executive Officer",
    company: "CoderSchool",
    friendsCount: 2121,
    followers: 212,
    height: "250mm",
    weight: "90kg",
  },
  {
    id: 10,
    firstName: "Phil",
    lastName: "Nguyen",
    age: 26,
    favoriteColors: ["red", "white", "blue"],
    favoriteSingers: ["Kanye West"],
    nationality: "USA",
    gender: "m",
    zodiac: "Cancer",
    jobTitle: "T.A.",
    company: "CoderSchool",
    friendsCount: 2121,
    followers: 212,
    height: "169mm",
    weight: "90kg",
  },
  {
    id: 11,
    firstName: "Duy Hung",
    lastName: "Nguyen",
    age: 13,
    favoriteColors: ["black", "yellow", "blue"],
    favoriteSingers: ["Bonnie Tyler"],
    nationality: "Vietnamese",
    gender: "m",
    zodiac: "Scorpio",
    jobTitle: "Student",
    company: "Company of Life",
    friendsCount: 500,
    followers: 300,
    height: "160mm",
    weight: "70kg",
  },
];

// ----------------------------------------------------------------------------------------------------------------------------------------
// -----> Examples
// ----------------------------------------------------------------------------------------------------------------------------------------
// 1. Define a function getAmericans() which takes the people array as an argument
// and returns an array of people who are Americans.
// It should look like this[{ firstName: 'Loi', ...}, { firstName: 'Charles', ...}]

const getAmericans = (persons) => {
  document.getElementById("getAmericans").innerHTML = persons
    .filter(({ nationality }) => nationality === "USA")
    .map((person) => person.firstName)
    .join(" ");
};

function onGetAmericans() {
  getAmericans(people);
}

// 2. Define a function getCoderSchoolStaff() which takes the people array as an argument
// and returns an array of people who work at 'CoderSchool'.
// We would want it to look something like this [{ firstName: 'Loi', ...}, { firstName: 'Charles', ...}]

const getCoderSchoolStaff = (persons) => {
  document.getElementById("getCoderSchoolStaff").innerHTML = persons
    .filter((person) => person.company === "CoderSchool")
    .map((staff) => `<li>${staff.firstName}</li>`)
    .join(" ");
};

function onGetCoderSchoolStaff() {
  getCoderSchoolStaff(people);
}

// 3. Define a function getMostPopularPerson() which takes the people array as an argument
// and returns an object. The object will have two keys. A person key will have the person as it's value.
// The total key will have the total of followers & friends of the most popular person. The person with the most followers & friends
// is the most popular.
// It should look like this { person: { firstName: 'Loi' }, total: 9000 }

const getMostPopularPerson = (persons) => {
  let mostPopulerInfo = { person: {}, totalPopularity: 0 };

  persons.map((person) => {
    const totalPopularity = person.friendsCount + person.followers;
    if (totalPopularity > mostPopulerInfo.totalPopularity) {
      const newMostPopular = { totalPopularity, person };
      mostPopulerInfo = newMostPopular;
    }
  });
  document.getElementById(
    "getMostPopularPerson"
  ).innerHTML = `${mostPopulerInfo.person.firstName} is the most popular with a score of ${mostPopulerInfo.totalPopularity}`;
};

function onGetMostPopularPerson() {
  getMostPopularPerson(people);
}

// ----------------------------------------------------------------------------------------------------------------------------------------
// -----> Assignment
// ----------------------------------------------------------------------------------------------------------------------------------------

// 4. Define a function findVietnamese() which will take the people array as an argument and
// return an array. The array will contain persons who have nationality as VN for Vietnamese.
// Make sure the function will account for 'VN' and 'vn'
// It should look like this [{}, {}, {}, ...]
function findVietnamese(array) {
  return array.filter((item) => item.nationality.toLowerCase() == "vn");
}
// console.log(findVietnamese(people));

// 5. Define a function countGenders() which will take the people array as an argument and
// return a string.
// It should look like this "There are 7 males and 3 males"

function countGenders(array) {
  let male = 0;
  let female = 0;
  array.forEach((item) => {
    if (item.gender == "m") {
      male++;
    } else {
      female++;
    }
  });
  return `There are ${male} males and ${female} females`;
}
// console.log(countGenders(people));

// 6. Define a function findTallest() which will take the people array as an argument and
// return an string.
// The string should look like "Charles was the tallest at 250mm"

function findTallest(array) {
  let sortedArray = array.sort(
    (a, b) => takeTheInt(a.height) - takeTheInt(b.height)
  );
  let h = sortedArray[sortedArray.length - 1].height;
  let name = sortedArray[sortedArray.length - 1].lastName;
  return `${name} was the tallest at ${h}`;
}
function takeTheInt(str) {
  let cutUnit = str.slice(0, 3);
  let result = parseInt(cutUnit);
  return result;
}
// console.log(findTallest(people));

// 7. Define a function findAverageHeight() which will take the people array as an argument and
// return an string.
// The string should look like "The average height of our people is 168mm."

function findAverageHeight(array) {
  let peopleHeight = array.map((item) => takeTheInt(item.height)); //takeTheInt function is at line 320
  let result = Math.floor(
    peopleHeight.reduce((sum, current) => sum + current, 0) /
      peopleHeight.length
  );
  return `The average height of our people is ${result}cm`;
}

// console.log(findAverageHeight(people));

// 8. Define a function findZodiacs() which will take the people array as an argument and
// return an string. The string should say the users were from these signs
// The string should look like "We have Cancers, Tauruss, ... among our people"

function findZodiacs(array) {
  let result = array.map((item) => item.zodiac);

  return `We have ${result.toString()} among our people`;
}
// console.log(findZodiacs(people));

// 9. Define a function findAverageAge() which will take the people array as an argument and
// return an string. The string will have the average age of the people
// The string should look like "The average age of the people is 21"

function findAverageAge(array) {
  let ageArray = array.map((item) => item.age);
  let averageAge = Math.round(
    ageArray.reduce((total, current) => total + current) / ageArray.length
  );
  return `the average age of the people is ${averageAge}`;
}
// console.log(findAverageAge(people));

// 10. Define a function findStudents() which will take the people array as an argument and
// return an array. The array will contain persons who have jobTitle listed as 'Student'.
// It should look like this [{}, {}, {}]
function findStudents(array) {
  let result = array.filter((item) => item.jobTitle.toLowerCase() == "student");
  return result;
}
// console.log(findStudents(people));

// 11. Define a function findNguyens() which will take the people array as an argument and
// return an array. The array will contain persons whose last names are Nguyen.
// It should look like this [{}, {}]

function findNguyens(array) {
  let result = array.filter((item) => item.lastName.toLowerCase() == "nguyen");
  return result;
}
// console.log(findNguyens(people));

// 12. Define a function findAdults() which will take the people array as an argument and
// return an array. The array will contain all people who's age is above 18 and above
// It should look like this [{}, {}, {}, ...]

function findAdults(array) {
  let result = array.filter((item) => item.age >= 18);
  return result;
}
// console.log(findAdults(people));

// 13. Define a function findFavoriteColors() which will take the people array as an argument and
// return an array. The array will contain UNIQUE colors collected from all persons.
// It should look like this ['red', 'black', 'pink', ...]

function findFavoriteColors(array) {
  let arr = array.reduce(
    (total, current) => total.concat(current.favoriteColors),
    []
  );
  let result = [...new Set(arr)];
  return result;
}

// console.log(findFavoriteColors(people));

// 14. Define a function findJobTitles() which will take the people array as an argument and
// return an array. The array will contain UNIQUE jobTitles.
// It should look like this ['CEO', 'Instructor', 'Student']

function findJobTitles(array) {
  let arr = array.reduce(
    (total, current) => total.concat(current.jobTitle),
    []
  );
  let result = [...new Set(arr)];
  return result;
}

// console.log(findJobTitles(people));

// 15. Define a function findBirthYears() which will take the people array as an argument and
// return an array. The array will contain all years which the people were born in.
// It should look like this ['1997', '1990', '1987', ...]

function findBirthYears(array) {
  let arr = array.reduce(
    (total, current) => total.concat(2021 - current.age),
    []
  );
  let result = [...new Set(arr)]; //delete dubplicates
  return result;
}

// console.log(findBirthYears(people));

// 16. Define a function sortOldToYoung() which will take the people array as an argument and
// return an array. The array will contain all persons sorted from oldest to youngest
// It should look like this [{}, {}, {}, ...]

function sortOldToYoung(array) {
  let arr = array.sort((a, b) => b.age - a.age);
  return arr;
}

// console.log(sortOldToYoung(people));

// 17. Define a function splitIntoMinorsAndAdults() which will take the people array as an argument and
// return three arrays. The first array will have two arrays within it.
// The two nested arrays will contain persons. The 0 index nested array will have minors and the 1 index will have adults.
// It should look like this [[{}, {}, {}, ...], [{}, {}, {}, ...]]

function splitIntoMinorsAndAdults(array) {
  let arrOld = [];
  let arrYoung = [];
  let arrPeople;
  array.forEach((item) => {
    if (item.age > 18) {
      arrOld.push(item);
    } else {
      arrYoung.push(item);
    }
  });
  arrPeople = [arrOld, arrYoung];
  return arrPeople;
}
// console.log(splitIntoMinorsAndAdults(people));

// 18. Define a function addFavoriteHerosToPeople() which will take the people array as an argument and
// return an array. The array will contain all persons in the original array where each person has
// a new key(favoriteSuperHeros) with the value of an empty array [].
// It should look like this [{firstName: 'Loi', favoriteSuperHeros: [], ...}]

function addFavoriteHerosToPeople(array) {
  array.forEach((item) => (item.favoriteHeros = []));
  return array;
}
// console.log(addFavoriteHerosToPeople(people));

// 19. Define a function addBirthPlacesToPeople() which will take the people array as an argument and
// return an array. The array will contain all the original persons in the array with an additional
// key(birthPlace) with the value of a new object {}.
// It should look like this [{firstName: 'Loi', birthPlace: {}, ...}]
function addBirthPlacesToPeople(array) {
  array.forEach((item) => (item.birthPlace = {}));
  return array;
}
// console.log(addBirthPlacesToPeople(people));
// 20. Define a function findMostFavoritedColor() which will take the people array as an argument and
// return an string. The string will be the color which has the most people that have it in their favoriteColors.
// In the event there are two colors with equal numbers. Return a string that says 'x and y were really popular!'
// It should look like this 'black' or 'black and red were really popular!'

function findMostFavoritedColor(array) {
  let colorWithUsedTime = [];
  let arrayOfAllColor = array.reduce(
    (total, current) => total.concat(current.favoriteColors),
    []
  );
  // console.log(arrayOfAllColor);
  let colors = findFavoriteColors(array); //function bonus 13
  for (let i = 0; i < colors.length - 1; i++) {
    let filteredArray = arrayOfAllColor.filter((item) => item == colors[i]);
    let timeUsed = filteredArray.length;
    // console.log(filteredArray);
    colorWithUsedTime.push({ color: colors[i], usedTime: timeUsed });
  }

  colorWithUsedTime.sort((a, b) => b.usedTime - a.usedTime);
  if (colorWithUsedTime[0].usedTime > colorWithUsedTime[1].usedTime) {
    return `${colorWithUsedTime[0].color} is really popular`;
  } else {
    return `${colorWithUsedTime[0].color} and ${colorWithUsedTime[0].color} are really popular`;
  }
}
// console.log(findMostFavoritedColor(people));
// ----------------------------------------------------------------------------------------------------------------------------------------
// -----> LOOKING AHEAD
// ----------------------------------------------------------------------------------------------------------------------------------------
// 1. This is how we could implement getAmericans() on one line. 'Descruturing' is important for how this function behaves.
// const getAmericans = persons =>
//   persons.filter(({ nationality }) => nationality === "USA");

// 2. Arguments/Parameters dictate how our function will behave. This is an example of how we could
// use an additional parameter and make our function more flexible.
const getNationality = (persons, soughtNationality) =>
  persons.filter(
    ({ nationality: userNationality }) => soughtNationality === userNationality
  );
