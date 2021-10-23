const users = [
  {
    id: 1,
    name: "john",
    tags: "employee, person",
  },
  {
    id: 2,
    name: "henry",
    tags: "businessman, person",
  },
];

const tags = "gardener,person";
const givenTag = "employee";
// let keywordFound = false
const keywordFound = tags.split(",").some((tag) => tag === givenTag);
// console.log(keywordFound)
const foundUsers = users
  .filter((user) => user.tags.split(", ").some((tag) => tag === givenTag))
  .map((user) => ({ id: user.id, name: user.name }));
console.log(foundUsers);
