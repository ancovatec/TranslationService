import addLanguage from './addLanguage';
import addText from './addText';
import addEvent from './addEvent';
import startTranslate from './startTranslate';
import translateText from './translateText';
import addTranslation from './addTranslation';

const listener = () => {
    addEvent();
    addLanguage();
    addText();
    startTranslate();
    translateText();
    addTranslation();
};

export default listener;