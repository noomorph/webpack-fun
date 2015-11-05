import print from 'util/print';

let p1 = print(require('sync-message'));
let p2;

require.ensure([], function () {
    p2 = print(require('async-message'));
});

if (module.hot) {
    module.hot.accept();

    module.hot.dispose(function () {
        if (p1) { p1.remove(); }
        if (p2) { p2.remove(); }
    });
}
