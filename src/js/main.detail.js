require.config({
    paths: {
        jquery: './jquery',
        detail: './lib/detail',
        cookie: './cookie'
    }


});
require(['jquery', 'detail'], function($, detail) {
    detail.render(function(id, price) {
        $('.btn1').on('click', function() {

            detail.addItem(id, price, $('.nnum').val())
        })

    });

    detail.addplus();
    detail.add_success();

})