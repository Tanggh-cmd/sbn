require.config({
    paths: {
        jquery: './jquery',
        shopping: './lib/shopping'
    },
    shim: {}
});

require(['shopping'], function(shopping) {
    shopping.render();
})