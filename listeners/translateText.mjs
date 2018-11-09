import strictUriEncode from 'strict-uri-encode';
import Emmitter from '../events/translationEmitter';
import Event from '../events/translateTextEvent';
import TextTranslatedHandler from '../handlers/textTranslatedHandler';
import fetch from 'node-fetch';

const getTranslateUrl = (sourceLanguageTag, targetLanguageTag, text) => 
    `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguageTag}&tl=${targetLanguageTag}&dt=t&q=${strictUriEncode(text)}`;

const translateText = () => {
    Emmitter.on(Event.TYPE, ({ userId, data }) => {
        const { key, text, sourceLanguageTag, targetLanguageTag } = data;
        const url = getTranslateUrl(sourceLanguageTag, targetLanguageTag, text);

        fetch(url)
            .then(res => res.json())
            .then(json => {
                const handler = new TextTranslatedHandler();
                const translatedText = json[0][0][0];
                handler.emit(key, translatedText, targetLanguageTag, userId);
            });
    });
};

export default translateText;