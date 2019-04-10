import Pusher from 'pusher';
import configJson from '../config/config.json';

const config = configJson[process.env.NODE_ENV || 'development']

export const pusher = new Pusher({
  appId: config.pusher.appId,
  key: config.pusher.appKey,
  secret: config.pusher.appSecret,
  cluster: 'eu',
  encrypted: true
});

export const ticketsChannel = 'tickets_channel';
export const ticketsEvent = 'tickets_events';
