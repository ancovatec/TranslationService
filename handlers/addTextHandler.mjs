import Event from '../events/addTextEvent';

export default class AddLanguageHandler {

    emit(key, text, languageTag, userId) {
        const event = new Event(key, text, languageTag, userId);
        event.emit();
        return event;
    }
}