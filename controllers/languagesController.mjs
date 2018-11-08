import AddLanguageHandler from '../handlers/addLanguageHandler';
import store from '../store';

export const addLanguage = (req, res) => {
    const handler = new AddLanguageHandler();
    const event = handler.Emit(req.body.language, req.body.country, req.body.tag, req.userId);
    res.send(`Added a language on event ${event.id}`);
};

export const getLanguages = (req, res) => {
    res.send(store.getLanguages());
};