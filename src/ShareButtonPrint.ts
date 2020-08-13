import AbstractShareButton from './AbstractShareButton';
import EventHandler from './EventHandler';

export default class ShareButtonPrint extends AbstractShareButton {
    constructor(className: string, eventHandler: EventHandler) {
        super(className, eventHandler);
    }

    createAction() {
        return () => window.print();
    }
}