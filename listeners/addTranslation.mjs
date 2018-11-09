import Emmitter from '../events/translationEmitter';
import Event from '../events/textTranslatedEvent';
import Store from '../store';

const startTranslate = () => {
    Emmitter.on(Event.TYPE, ({ data }) => {
        const { key, translatedText, languageTag } = data;

        Store.addTranslation(key, translatedText, languageTag);
    });
};

export default startTranslate;