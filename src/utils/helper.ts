import { Person } from "./type";

export const minAge = (arrObj: Person[]) => {
  let minAge = arrObj[0].age;
  for (let i = 1; i < arrObj.length; i++) {
    if (arrObj[i].age < minAge) {
      minAge = arrObj[i].age;
    }
  }
  return minAge;
}

export const maxAge = (arrObj: Person[]) => {
  let maxAge = arrObj[0].age;
  for (let i = 1; i < arrObj.length; i++) {
    if (arrObj[i].age > maxAge) {
      maxAge = arrObj[i].age;
    }
  }
  return maxAge;
}

export const sortByMinAge = (arrObj: Person[]) => {
  arrObj.sort((a, b) => a.age - b.age);
  return arrObj;
}

export const sortByMaxAge = (arrObj: Person[]) => {
  arrObj.sort((a, b) => b.age - a.age);
  return arrObj;
}