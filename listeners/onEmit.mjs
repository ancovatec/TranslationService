import Emmitter from '../events/translationEmitter';
import AddLanguageEvent from '../events/addLanguageEvent';
import Store from '../store';

const RegisterListener = (eventType) => {
    Emmitter.on(eventType, event => {
        Store.addEvent(event);
    });
};

const onEmit = () => {
    [
        AddLanguageEvent.TYPE
    ].forEach(RegisterListener);
};

export default onEmit;