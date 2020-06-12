import L from '../../common/logger';
import axios from 'axios';
import moment from 'moment';

export const run = async (): Promise<string> => {
  L.info('create zoom room');

  const roomOp = {};

  roomOp['topic'] = 'by my-first-zoom-app';
  roomOp['type'] = '2';
  roomOp['start_time'] = moment()
    .add(moment.duration(1, 'weeks'))
    .format('YYYY-MM-DDThh:mm:ss');
  roomOp['timezone'] = process.env.TIMEZONE || 'Asia/Tokyo';
  roomOp['settings'] = {};
  roomOp['settings']['use_pmi'] = 'false';

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
