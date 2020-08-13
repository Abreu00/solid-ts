import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonFacebook from './ShareButtonFacebook';
import ShareButtonLinkedin from './ShareButtonLinkedin';
import ShareButtonPrint from './ShareButtonPrint';
import DOMEventHandler from './DOMEventHandler';

const eventHandler = new DOMEventHandler();

const twitter = new ShareButtonTwitter(".btn-twitter", eventHandler, "http://www.youtube.com/rodrigobranas");
twitter.bind();

const facebook = new ShareButtonFacebook(".btn-facebook", eventHandler, "http://www.youtube.com/rodrigobranas");
facebook.bind();

const linkedin = new ShareButtonLinkedin(".btn-linkedin", eventHandler, "http://www.youtube.com/rodrigobranas");
linkedin.bind();

const print = new ShareButtonPrint(".btn-print", eventHandler);
print.bind();
