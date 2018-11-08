import TranslationEvent from './translationEvent';

class AddLanguageEvent extends TranslationEvent {

    constructor(language, country, tag, userId) {
        super(AddLanguageEvent.TYPE, userId);

        this.data = {
            language,
            country,
            tag
        };
    }
}

AddLanguageEvent.TYPE = "addLanguage";

export default AddLanguageEvent;