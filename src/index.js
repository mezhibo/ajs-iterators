import Character from './js/Character';
import Team from './js/Team';

const team = new Team();

team.add(new Character('Лучник', 'Bowman', 50, 1, 40, 10));
team.add(new Character('Мечник', 'Swordsman', 100, 1, 40, 30));
team.add(new Character('Маг', 'Magician', 100, 1, 10, 40));

const characters = [];

for (const character of team) {
  characters.push(character);
}

document.getElementById('result').textContent = JSON.stringify(characters, null, 2);
