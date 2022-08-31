import {
  existInTeam,
  getInfoTeam,
  infoTeam,
  toggleLocalTeam,
} from '../helpers/localTeam';

describe('testing localStorage functions', () => {
  it('should set and get a value', () => {
    toggleLocalTeam('test');
    expect(localStorage.getItem('team')).toBe('["test"]');
  }),
    it('it should return true', () => {
      expect(existInTeam('test')).toBe(true);
    }),
    it('chould create a new team name', () => {
      const info = {
        name: 'test',
        description: 'test',
      };

      infoTeam(info);
      expect(localStorage.getItem('info')).toBe(JSON.stringify(info));
    });

  it('should return the info team', () => {
    const info = '{"name":"test","description":"test"}';

    expect(getInfoTeam('info')).toEqual(JSON.parse(info));
  });
});
