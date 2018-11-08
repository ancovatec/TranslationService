import Event from '../events/translateTextEvent';

export default class TranslateTextHandler {

    Emit(key, text, sourceLanguageTag, targetLanguageTag, userId) {
        const event = new Event(key, text, sourceLanguageTag, targetLanguageTag, userId);
        event.emit();
        return event;
    }
}