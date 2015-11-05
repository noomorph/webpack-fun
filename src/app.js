import print from 'util/print';
print(require('sync-message'));

require.ensure([], function () {
    print(require('async-message'));
});

if (module.hot) {
    module.hot.accept();
}
