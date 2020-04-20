import Heading from './components/heading/heading';
import ShowImage from './components/showImage/showImage';
import _ from 'lodash';

const heading = new Heading();
heading.render(_.upperFirst('image'));

const showImage = new ShowImage();
showImage.render(_.upperCase());