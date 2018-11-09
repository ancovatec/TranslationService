import Event from '../events/textTranslatedEvent';

export default class TranslateTextHandler {

    emit(key, translatedText, languageTag, userId) {
        const event = new Event(key, translatedText, languageTag, userId);
        event.emit();
        return event;
    }
}