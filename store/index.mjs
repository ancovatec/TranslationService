class Store {

    constructor(){
        this.events = [];
        this.languages = [];
        this.texts = [];
    }

    addEvent(event) {
        this.events.push(event);
    }
    
    getEvents() {
        return this.events;
    }

    addLanguage(languageData){
        this.languages.push(languageData);
    }

    getLanguages() {
        return this.languages;
    }

    addText(textData) {
        this.texts.push(textData);
    }

    getTexts() {
        return this.texts;
    }

}

export default new Store();