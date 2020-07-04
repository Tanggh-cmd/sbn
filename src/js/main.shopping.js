require.config({
    paths: {
        jquery: './jquery',
        shopping: './lib/shopping',
        cookie: './cookie'
    },
    shim: {}
});

require(['shopping'], function(shopping) {
    shopping.render();
    shopping.sele();
    shopping.dele();
})