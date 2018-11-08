import strictUriEncode from 'strict-uri-encode';
import Emmitter from '../events/translationEmitter';
import Event from '../events/translateTextEvent';
//import TranslateTextHandler from '../handlers/translateTextHandler';
import fetch from 'node-fetch';

const getTranslateUrl = (sourceLanguageTag, targetLanguageTag, text) => 
    `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguageTag}&tl=${targetLanguageTag}&dt=t&q=${strictUriEncode(text)}`;

const translateText = () => {
    Emmitter.on(Event.TYPE, ({ userId, data }) => {
        const { key, text, sourceLanguageTag, targetLanguageTag } = data;
        const url = getTranslateUrl(sourceLanguageTag, targetLanguageTag, text);

        fetch(url)
            .then(res => res.json())
            .then(json => console.log(json));
    });
};

export default translateText;