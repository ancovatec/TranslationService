import Emmitter from '../events/translationEmitter';
import AddLanguageEvent from '../events/addLanguageEvent';
import AddTextEvent from '../events/addTextEvent';
import TranslateTextEvent from '../events/translateTextEvent';
import Store from '../store';

const RegisterListener = (eventType) => {
    Emmitter.on(eventType, event => {
        Store.addEvent(event);
    });
};

const addEvent = () => {
    [
        AddLanguageEvent.TYPE,
        AddTextEvent.TYPE,
        TranslateTextEvent.TYPE
    ].forEach(RegisterListener);
};

export default addEvent;