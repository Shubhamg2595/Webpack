import HelloWebpackButton from './components/hello-webpack-button/hello-webpack-button';
import Heading from './components/heading/heading';

const heading = new Heading();
heading.render();

const helloWebpackButton = new HelloWebpackButton();
helloWebpackButton.render();

if(process.env.NODE_ENV === 'production')
{
    console.log('Production mode')
}
else if(process.env.NODE_ENV === 'development')
{
    console.log('development mode')
}


helloWebpackButton.test();