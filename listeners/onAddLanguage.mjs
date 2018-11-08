import Emmitter from '../events/translationEmitter';
import Event from '../events/addLanguageEvent';
import Store from '../store';

const onAddLanguage = () => {
    Emmitter.on(Event.TYPE, ({language, country, tag}) => {
        Store.addLanguage({
            language,
            country,
            tag
        });
    });
};

export default onAddLanguage;