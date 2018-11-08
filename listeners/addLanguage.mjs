import Emmitter from '../events/translationEmitter';
import Event from '../events/addLanguageEvent';
import Store from '../store';

const addLanguage = () => {
    Emmitter.on(Event.TYPE, ({ data }) => {
        const {language, country, tag} = data;

        Store.addLanguage({
            language,
            country,
            tag
        });
    });
};

export default addLanguage;