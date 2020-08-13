import AbstractLinkShareButton from './AbstractLinkShareButton';
import EventHandler from './EventHandler';

export default class ShareButtonFacebook extends AbstractLinkShareButton {

  constructor(className: string, eventHandler: EventHandler, url: string) {
    super(className, eventHandler, url);

  }

  createLink(): string {
    return `https://www.facebook.com/sharer.php?u=${this.url}`
  }

}