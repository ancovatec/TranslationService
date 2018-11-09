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

    addTranslation(key, translatedText, languageTag) {
        console.log(key, translatedText);
        const textData = this.texts.find(t => t.key === key);
        console.log(textData);
        if(textData) {
            textData.traductions[languageTag] = translatedText;
        }
    }

}

export default new Store();