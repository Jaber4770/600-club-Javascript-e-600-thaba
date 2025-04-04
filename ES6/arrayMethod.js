{
    const snakes = [30, 45, 20, 60, 10];
    console.log(snakes);
    const newPrice = snakes.map(snake => snake + 13);
    console.log(newPrice);
}
{
    const players = ['messi', 'maradona', 'pele', 'zidan', 'ronaldo'];
    console.log(players);
    const largeName = players.filter(player => player.length > 5);
    console.log(largeName);
}
{
    const numbers = [10, 15, 20, 25, 30, 35, 40];
    console.log(numbers);
    const avobe20 = numbers.find(num => num > 20);
    console.log(avobe20);
}
{
    const height = [65, 70, 68, 72, 68, 73];
    console.log(height);
    const longest = height.filter(long => long > 69);
    console.log(longest);
}
{
    const numbers = [7, 10, 15, 20, 25, 30];
    numbers.map(num => console.log(num / 3));
}
{
    const friends = ['leonardo', 'brad pitt', 'kate winslet', 'audrey hepburn', 'jhonny depp'];
    friends.map(friend => console.log(friend[2]));
}
{
    const names = ['tom', 'harry', 'sam', 'jack'];
    names.find(name => {
        if (name[0] === 'h') {
            console.log(name);
        }
    })
}
{
    const array = [1, 2, 3, 4, 5];
    array.forEach(num => console.log(num));
}
{
    const animals = ['cow', 'goat', 'sheep', 'horse'];
    animals.forEach(animal => console.log(animal));
}