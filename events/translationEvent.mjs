import uuid from 'uuid/v4';
import TranslationEmitter from './translationEmitter';

export default class TranslationEvent {
    
    constructor(type, userId){
        this.id = uuid();
        this.date = new Date();
        this.type = type;
        this.userId = userId;
    }

    emit(){
        console.log("Emmiting", this);
        TranslationEmitter.emit(this.type, this);
    }
}