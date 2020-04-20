import './heading.scss'
class Heading {
    render(pagename) {
        const h1 = document.createElement('h1');
        const body = document.querySelector('body');
        h1.innerHTML = `Welcome to Webpack Learnings. This is ${pagename} page `
        body.appendChild(h1);
    }
}

export default Heading;