const map = new Map();

map.set('name', 'sangyan');
map.set('level', 'undergrad');
map.set('sem', 3);

console.log(map.get('name'));
console.log(map)

for(const key of map){
    console.log(key);   //this prints the entire map
}

//in order to print individual value

