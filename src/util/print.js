export default function print(msg) {
    var el = document.createElement('p');
    el.textContent = msg;
    document.body.appendChild(el);
    return el;
}
