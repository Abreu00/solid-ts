import AbstractLinkShareButton from './AbstractLinkShareButton';
import EventHandler from './EventHandler';

export default class ShareButton extends AbstractLinkShareButton {

  constructor(className: string, eventHandler: EventHandler, url: string) {
    super(className, eventHandler, url);

  }

  createLink(): string {
    return `https://www.twitter.com/share?url=${this.url}`
  }

}