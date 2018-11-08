import TranslationEvent from './translationEvent';

class TranslateTextEvent extends TranslationEvent {

    constructor(key, text, sourceLanguageTag, targetLanguageTag, userId) {
        super(TranslateTextEvent.TYPE, userId);

        this.data = {
            key,
            text,
            sourceLanguageTag,
            targetLanguageTag
        };
    }
}

TranslateTextEvent.TYPE = "translateText";

export default TranslateTextEvent;