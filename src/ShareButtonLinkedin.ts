import AbstractLinkShareButton from './AbstractLinkShareButton';
import EventHandler from './EventHandler';

export default class ShareButtonLinkedin extends AbstractLinkShareButton {

  constructor(className: string, eventHandler: EventHandler, url: string) {
    super(className, eventHandler, url);

  }

  createLink(): string {
    return `http://www.linkedin.com/shareArticle?url=${this.url}`
  }

}