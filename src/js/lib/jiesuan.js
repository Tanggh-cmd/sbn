let baseUrl = "http://localhost/wampROOM1/twoproject/project/";
define(['jquery', 'cookie'], function($, cookie) {
    return {
        render: function() {
            let shop = cookie.get('shop');
            shop = JSON.parse(shop);
            console.log(shop)
            let id;
            let num;
            shop.forEach(elm => {
                id = elm.id;
                num = elm.num;
            })
            $.ajax({
                type: "get",
                url: `${baseUrl}interface/jiesuan.php`,
                data: {
                    id: id,
                },
                dataType: "json",
                success: function(res) {
                    // let shop = cookie.get('shop');
                    // shop = JSON.parse(shop);
                    // let num;
                    // shop.forEach(elm => {
                    //     num = elm.num;
                    // })
                    let pic = res.pic商品图片
                    pic = JSON.parse(pic)
                    console.log(res)
                    let temp = `
                        <img src="${baseUrl}src/${pic[4].src}">
                    `;
                    $('.product-img').append(temp);
                    let tit = `
                        <div class="product-name">${res.title商品标题}</div>
                    `;
                    $('.product-name').append(tit);
                    let number = `
                     <div class="product-tag">数量:${num}</div>
                    `;
                    $('.product-tag').append(number);



                }
            });


        },
        vbtn: function() {
            console.log($('#GWC'))
            $('.v-btn').on('click', function() {
                location.href = `${baseUrl}/src/html/shopping.html`;
            })
        }
    }
})