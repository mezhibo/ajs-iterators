import Team from '../Team';
import Character from '../Character';

const bowman = new Character('Лучник', 'Bowman', 50, 1, 40, 10);
const magician = new Character('Маг', 'Magician', 100, 1, 10, 40);

test('should iterate over team members', () => {
  const team = new Team();

  team.add(bowman);
  team.add(magician);

  expect([...team]).toEqual([bowman, magician]);
});

test('should return correct iterator results', () => {
  const team = new Team();
  team.add(bowman);

  const iterator = team[Symbol.iterator]();

  expect(iterator.next()).toEqual({ value: bowman, done: false });
  expect(iterator.next()).toEqual({ value: undefined, done: true });
  expect(iterator[Symbol.iterator]()).toBe(iterator);
});

test('should iterate over empty team', () => {
  const team = new Team();

  expect([...team]).toEqual([]);
});

test('should support repeated iteration', () => {
  const team = new Team();
  team.add(bowman);

  expect([...team]).toEqual([bowman]);
  expect([...team]).toEqual([bowman]);
});
