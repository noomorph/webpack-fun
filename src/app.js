function print(msg) {
    var el = document.createElement('p');
    el.textContent = msg;
    document.body.appendChild(el);
}

print(require('./sync-message'));
