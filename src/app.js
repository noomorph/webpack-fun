import print from './util/print';
print(require('./sync-message'));

require.ensure([], function () {
    print(require('./async-message'));
}, 'async-chunk');
