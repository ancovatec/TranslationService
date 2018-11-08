import Emmitter from '../events/translationEmitter';
import Event from '../events/addTextEvent';
import Store from '../store';

const addText = () => {
    Emmitter.on(Event.TYPE, ({ data }) => {
        const { key, text, languageTag } = data;

        Store.addText({
            key,
            text,
            languageTag
        });
    });
};

export default addText;