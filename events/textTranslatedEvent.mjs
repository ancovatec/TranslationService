import TranslationEvent from './translationEvent';

class TextTranslatedEvent extends TranslationEvent {

    constructor(key, translatedText, languageTag, userId) {
        super(TextTranslatedEvent.TYPE, userId);

        this.data = {
            key,
            translatedText,
            languageTag
        };
    }
}

TextTranslatedEvent.TYPE = "textTranslated";

export default TextTranslatedEvent;