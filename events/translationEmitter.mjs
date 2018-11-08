import EventEmitter from 'events';

class TranslationEmitter extends EventEmitter {
}

const emitter = new TranslationEmitter();

emitter.setMaxListeners(0);

export default emitter;