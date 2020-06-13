import { nextWeekRoomOpCreator } from '../../api/services/zoom';

test('if forgot set arg', () => {
  const roomOp = nextWeekRoomOpCreator();

  expect(roomOp['topic']).toBe('by my-first-zoom-app');
  expect(roomOp['timezone']).toBe('Asia/Tokyo');
});
