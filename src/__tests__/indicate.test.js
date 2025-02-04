import indicate from '../js/indicate';



test.each([
    ['healthy', {name: 'Джаваскриптезер', health: 75}],
    ['wounded', {name: 'Питонозавр', health: 32.5}],
    ['critical', {name: 'Растафарианец', health: 7.5}],
    ['healthy', {name: 'Кроссбраузерный эквилибрист', health: 51}],
    ['wounded', {name: 'Символ@чный маг', health: 50}],
    ['critical', {name: 'Плюсоплюсный ниндзя', health: 15}],
    ['wounded', {name: 'Типизатор-тиран', health: 16}]
])('testing indicate function for %s-indicator', (indicator, player) => {
    const result = indicate(player);
    expect(result).toBe(indicator);
})