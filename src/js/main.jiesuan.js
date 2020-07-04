require.config({
    paths: {
        jquery: './jquery',
        jiesuan: './lib/jiesuan',
        cookie: './cookie'
    }
});
require(['jquery', 'jiesuan'], function($, jiesuan) {
    jiesuan.render();
    jiesuan.vbtn();
})