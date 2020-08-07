const student = [
    {name:"karim", id:12},
    {name:"salam", id:23},
    {name:"jabed", id:45},
    {name:"kalam", id:41}
];

const sName = student.map(element => element.name);
const sId = student.map(element => element.id);
const bigger = student.filter(element => element.id > 20);
const biggerOne = student.find(element => element.id > 20);

console.log(sName, sId, bigger, biggerOne)