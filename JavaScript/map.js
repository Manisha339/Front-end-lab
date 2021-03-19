const map = new Map();

map.set("fname","Nani");
map.set("lname","Allu");
map.set("age",25);
map.set("desg","Developer");
console.log(map);

console.log("map has age  ?"+map.has("age"));
console.log("map has salary  ?"+map.has("sal"));
console.log("Get me lastname "+map.get("lname"));
console.log("Delete desg "+map.delete("desg"));
console.log(map);
map.clear();
console.log(map);

