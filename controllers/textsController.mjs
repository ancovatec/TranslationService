import addTextHandler from '../handlers/addTextHandler';
import store from '../store';

export const addText = (req, res) => {
    const handler = new addTextHandler();
    const event = handler.Emit(req.body.key, req.body.text, req.body.languageTag, req.userId);
    res.send(`Added a text on event ${event.id}`);
};

export const getTexts = (req, res) => {
    res.send(store.getTexts());
};