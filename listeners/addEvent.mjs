import Emmitter from '../events/translationEmitter';
import Store from '../store';

import AddLanguageEvent from '../events/addLanguageEvent';
import AddTextEvent from '../events/addTextEvent';
import TranslateTextEvent from '../events/translateTextEvent';
import TextTranslatedEvent from '../events/textTranslatedEvent';

const RegisterListener = (eventType) => {
    Emmitter.on(eventType, event => {
        Store.addEvent(event);
    });
};

const addEvent = () => {
    [
        AddLanguageEvent.TYPE,
        AddTextEvent.TYPE,
        TranslateTextEvent.TYPE,
        TextTranslatedEvent.TYPE
    ].forEach(RegisterListener);
};

export default addEvent;