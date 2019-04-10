import { check } from 'express-validator/check';
import { validateRequest, handleError } from './index';
import db from '../models';
import { updateTicketsAvailability } from '../services/events.service';
import { ticketsChannel, ticketsEvent, pusher } from '../services/pusher.service';

const { Event, TicketsType, Guest } = db;

export const fetchAll = async (req, res) => {
  try {
    const data = await Event.findAll({ attributes: ['url', 'name'] });
    res.json(data);
  } catch (err) {
    handleError(err, res);
  }
};

export const fetchByUrl = async (req, res) => {
  try {
    const data = await Event.findOne({ 
      where: { url: '/' + req.params.url },
      include: [{ model: TicketsType, as: 'tickets', attributes: ['id', 'name', 'available'] }]
    });
    res.json({ success: true, data });
  } catch (err) {
    handleError(err, res);
  }
};

export const checkout = async (req, res) => {
  try {
    if (!validateRequest(req, res)) {
      return;
    }
    const { tickets: bodyTickets } = req.body;
    const origins = await Promise.all(bodyTickets.map(t => TicketsType.findByPk(t.id)));
    const tickets = await updateTicketsAvailability(bodyTickets, origins);
  
    pusher.trigger(ticketsChannel, ticketsEvent, {eventUrl: '/' + req.params.url, tickets});
    res.json({ success: true });
  } catch (err) {
    handleError(err, res);
  }
};

export const release = async (req, res) => {
  try {
    if (!validateRequest(req, res)) {
      return;
    }
    const { tickets: bodyTickets } = req.body;
    const origins = await Promise.all(bodyTickets.map(t => TicketsType.findByPk(t.id)));
    const tickets = await updateTicketsAvailability(bodyTickets, origins, true);
  
    pusher.trigger(ticketsChannel, ticketsEvent, {eventUrl: '/' + req.params.url, tickets});
    res.json({ success: true });
  } catch (err) {
    handleError(err, res);
  }
};

export const confirm = async (req, res) => {
  try {
    if (!validateRequest(req, res)) {
      return;
    }
    const { user, tickets } = req.body;
    const data = await Guest.create({ ...user, tickets: JSON.stringify(tickets) });
    res.json({ success: true, referenceId: data.id });
  } catch (err) {
    handleError(err, res);
  }
};

export const validate = method => {
  switch (method) {
    case 'fetchByUrl':
      return [ 
        check('tickets', 'Tickets are required').exists()
      ];
    case 'checkout':
    case 'release':
      return [ 
        check('tickets', 'Tickets are required').exists()
      ];
    case 'confirm':
      return [ 
        check('tickets', 'Tickets are required').exists(),
        check('user', 'User is required').exists(),
        check('user.email', 'Invalid email').exists().isEmail(),
        check('user.firstName', 'Invalid email').exists(),
        check('user.lastName', 'Invalid email').exists(),
      ];
  }
}
