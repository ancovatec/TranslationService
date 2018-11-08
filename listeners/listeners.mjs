import addLanguage from './addLanguage';
import addText from './addText';
import addEvent from './addEvent';
import startTranslate from './startTranslate';
import translateText from './translateText';

const listener = () => {
    addEvent();
    addLanguage();
    addText();
    startTranslate();
    translateText();
};

export default listener;