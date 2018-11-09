import Emmitter from '../events/translationEmitter';
import Event from '../events/addTextEvent';
import TranslateTextHandler from '../handlers/translateTextHandler';
import Store from '../store';

const startTranslate = () => {
    Emmitter.on(Event.TYPE, ({ userId, data }) => {
        const { key, text, languageTag } = data;
        const handler = new TranslateTextHandler();

        Store.getLanguages().forEach(language => {
            if(language.tag !== languageTag) {
                handler.emit(key, text, languageTag, language.tag, userId);
            }
        });;
    });
};

export default startTranslate;