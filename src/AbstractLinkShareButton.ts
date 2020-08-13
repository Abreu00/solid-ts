import AbstractShareButton from './AbstractShareButton';
import EventHandler from './EventHandler';

export default abstract class AbstractLinkShareButton extends AbstractShareButton {
    url: string;

    constructor(className: string, eventHandler: EventHandler, url: string) {
        super(className, eventHandler)
        this.url = url;
    }

    abstract createLink(): string;

    createAction() {
        const link = this.createLink();
        return () => window.open(link);
    }
} 