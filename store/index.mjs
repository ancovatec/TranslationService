class Store {

    constructor(){
        this.events = [];
        this.languages = [];
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

}

export default new Store();