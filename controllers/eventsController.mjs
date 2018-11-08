import store from '../store';

export const getEvents = (req, res) => {
    res.send(store.getEvents());
};