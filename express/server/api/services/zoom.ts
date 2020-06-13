import L from '../../common/logger';
import axios from 'axios';
import moment from 'moment';

export const nextWeekRoomOpCreator = (
  topic?: string,
  timeZone?: string
): { [key: string]: string | { [key: string]: string } } => {
  const roomOp = {};

  roomOp['topic'] = topic || 'by my-first-zoom-app';
  roomOp['type'] = '2';
  roomOp['start_time'] = moment()
    .add(moment.duration(1, 'weeks'))
    .format('YYYY-MM-DDThh:mm:ss');
  roomOp['timezone'] = timeZone || 'Asia/Tokyo';
  roomOp['settings'] = {};
  roomOp['settings']['use_pmi'] = 'false';

  return roomOp;
};

export const createNextWeekRoom = async (): Promise<string> => {
  L.info('create zoom room');

  const roomOp = nextWeekRoomOpCreator(
    'by my-first-zoom-app',
    process.env.TIMEZONE
  );

  try {
    const res = await axios.post(
      `https://api.zoom.us/v2/users/${process.env.ZOOM_EMAIL}/meetings`,
      roomOp,
      {
        headers: {
          authorization: `Bearer ${process.env.ZOOM_JWT_TOKEN}`,
          // TODO: JWT token has the time limit. So, need to develop feature of updating it.
        },
      }
    );

    return JSON.stringify(res.data);
  } catch (err) {
    if (err) {
      throw new Error(err);
    }
  }
};
