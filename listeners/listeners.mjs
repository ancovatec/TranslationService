import onAddLanguage from './onAddLanguage';
import onEmit from './onEmit';

const listener = () => {
    onAddLanguage();
    onEmit();
};

export default listener;