const orderedSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza"
])
console.log(orderedSet);

console.log(new Set("Hari"));

console.log(orderedSet.size);
console.log(orderedSet.has("Pizza"));
console.log(orderedSet.has("Bread"));

orderedSet.add("Garlic Bread");
orderedSet.add("Garlic Bread");
console.log(orderedSet);

orderedSet.delete('Risotto')
console.log(orderedSet);


for (const order of orderedSet) {
  console.log(order);
}

orderedSet.clear();
console.log(orderedSet);

// Example:
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

console.log(new Set('jonasSchedtmann').size);
console.log(new Set('jonasSchedtmann'));
console.log([...new Set('jonasSchedtmann')]);

// Sets challenges
// 1
const numbers = [1, 2, 2, 3, 4, 4, 5, 1];

const getUniqueNumbers = function (nums) {
  console.log([...new Set(nums)]);
}

getUniqueNumbers(numbers)

// 2
const users = [
  { name: "Hari", role: "Frontend" },
  { name: "Arjun", role: "Backend" },
  { name: "Ravi", role: "Frontend" },
  { name: "Kumar", role: "Fullstack" },
  { name: "Siva", role: "Backend" },
];

const countUniqueRoles = function (users) {
  // console.log(new Set(user).size);
  // const [{ name, role }] = users
  // console.log(role);
  // console.log(new Set(role));
  let uniRoles = new Set();
  for (const userRole of users) {
    console.log(userRole);
    const { name, role } = userRole
    console.log(name, role);
    uniRoles.add(role)
    // console.log([...new Set(role)]);
  }
  return uniRoles.size
}

console.log(countUniqueRoles(users))

// 3
const dev1Skills = ["JavaScript", "React", "CSS", "HTML"];
const dev2Skills = ["JavaScript", "Node.js", "CSS", "MongoDB"];

const getCommonSkills = function () {
  const commonSkills = [];
  const dev1 = new Set(dev1Skills)
  // const dev2 = new Set(dev2Skills)
  console.log(dev1);

  for (const skill of dev2Skills) {
    console.log(skill);
    dev1.has(skill) ? commonSkills.push(skill) : "No CommonSkills"
  }
  return commonSkills
}

console.log(getCommonSkills());