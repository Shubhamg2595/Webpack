import avatar from '../../avatar.png';
import './showImage.scss';
class ShowImage{
    render() {
        const img = document.createElement('img');
        img.src = avatar;
        img.alt= 'avatar';
        img.classList.add('avatar-image');

        const body = document.querySelector('body');
        body.appendChild(img);
    }
}

export default ShowImage;