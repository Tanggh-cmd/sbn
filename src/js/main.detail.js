require.config({
    paths: {
        jquery: './jquery',
        detail: './lib/detail'
    }


});
require(['detail'], function(detail) {
    detail.render();
})