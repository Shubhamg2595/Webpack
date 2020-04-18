import './hello-webpack-button.css';

class HelloWebpackButton {
    render() {
        const button = document.createElement('button');
        button.innerHTML = "Hello WebPack";
        button.classList.add('hello-webpack-btn')
        const body = document.querySelector('body');

        button.onclick = function () {
            const line = document.createElement('p');
            line.innerHTML = "Learning about webpack";
            line.classList.add('hello-webpack-text');
            body.appendChild(line);
        }
        // button.addEventListener('click', () => {
        // })

        body.appendChild(button);
    }
}

export default HelloWebpackButton;