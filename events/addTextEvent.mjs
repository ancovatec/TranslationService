import TranslationEvent from './translationEvent';

class AddTextEvent extends TranslationEvent {

    constructor(key, text, languageTag, userId) {
        super(AddTextEvent.TYPE, userId);

        this.data = {
            key,
            text,
            languageTag
        };
    }
}

AddTextEvent.TYPE = "addText";

export default AddTextEvent;