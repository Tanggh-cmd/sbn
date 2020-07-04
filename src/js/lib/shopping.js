let baseUrl = "http://localhost/wampROOM1/twoproject/project/";
define(['jquery', 'cookie'], function($, cookie) {
    return {
        render: function() {
            let shop = cookie.get('shop');
            // console.log(shop)
            if (shop) {
                shop = JSON.parse(shop);
                let idlist = shop.map(elm => elm.id).join();
                $.ajax({
                    type: "get",
                    url: `${baseUrl}/interface/shop.php`,
                    data: {
                        idlist: idlist,
                    },
                    dataType: "json",
                    success: function(res) {
                        console.log(res)
                        let temp = '';

                        res.forEach(elm => {
                            let pic = JSON.parse(elm.pic商品图片);
                            // 从cookie中获取 于当前从数据库中遍历出的相同元素
                            let arr = shop.filter(val => val.id == elm.Id)
                                // console.log(arr)
                            temp += `<li class="item">
                            <div class="c-box">
                                <input type="checkbox" id="p1" class="check">
                            </div>
                            <div class="p-pri">
                                <img src="${baseUrl}/src/${pic[4].src}" alt="">
                            </div>
                            <div class="p-title">
                                <a href=""> ${elm.title商品标题}</a>
                            </div>
                            <div class="p-price">
                                ${elm.price商品价格}
                            </div>
                            <div class="p-num">
                                数量:<input type="number" value="${arr[0].num}" min="1" max="${elm.num商品库存}">
                            </div>
                            
                            <div class="p-price-sum">
                                总价:￥${arr[0].num*elm.price商品价格}
                            </div>
                            <div class="p-del">
                                <a href="javasript:;">删除</a>
                            </div>
                        </li>`
                        })
                        $('.list').html(temp);

                    }
                });
            }



        },
        sele: function() {
            // console.log($('.checkbox'))
            $('.checkbox').on('click', function() {
                if ($('.checkbox').prop('checked')) {
                    $(':checkbox').prop('checked', true)
                } else {
                    $(':checkbox').prop('checked', false)
                    console.log($(':checkbox'))
                }

            });

            // for (var a = 0; a < $(':checkbox').length; a++) {
            //     console.log($(':checkbox'))
            //     console.log($('.check'))
            //         // console.log($($(':checkbox')[a]).prop('checked'))
            //     if ($($(':checkbox')[1, 2, 3]).prop('checked')) {
            //         $('.checkbox').prop('checked', true)
            //     } else {
            //         $('.checkbox').prop('checked', false)
            //     }
            // }
            // console.log($(':checkbox'))

        },
        dele: function() {
            // $('.checked').on('click', function() {
            //     console.log(this)
            //     $('.checked').attr({ display: 'none' })
            // })
        }
    }
})