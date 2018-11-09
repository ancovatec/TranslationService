import Event from '../events/addLanguageEvent';

export default class AddLanguageHandler {

    emit(language, country, tag, userId) {
        const event = new Event(language, country, tag, userId);
        event.emit();
        return event;
    }
}