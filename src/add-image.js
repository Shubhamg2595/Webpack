import avatar from './avatar.png'

function addImage() {

    const img = document.createElement('img');
    img.alt = "avatar";
    img.width = 300;
    img.src = avatar;

    const body = document.querySelector('body');
    body.appendChild(img);

}

export default addImage;