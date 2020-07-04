let baseUrl = "http://localhost/wampROOM1/twoproject/project/";

define(['jquery', 'cookie'], function($, cookie) {
    return {
        render: function(callback) {
            let id = location.search.split("=")[1];
            // console.log(id)
            $.ajax({
                type: "get",
                url: `${baseUrl}/interface/getitem.php`,
                data: {
                    id: id,
                },
                dataType: "json",
                success: function(res) {
                    let pic = JSON.parse(res.pic商品图片)
                    console.log(pic)

                    let picone = `
                           <img style="width:100%; height:100%;" src="${baseUrl}/src/${pic[4].src}">
                    `;
                    let picsmallone = `
                   <li> <img src="${baseUrl}/src/${pic[0].src}"></li>
                    `;
                    let picsmalltwo = `
                   <li> <img src="${baseUrl}/src/${pic[1].src}"></li>
                   `;
                    let picsmallthree = `
                    <li>    <img src="${baseUrl}/src/${pic[2].src}"></li>
                    `;
                    let picsmallfour = `
                    <li><img src="${baseUrl}/src/${pic[3].src}"></li>
                   `;
                    let tit = `
                        <p>
                            ${res.price商品价格}
                        </p>
                    `;
                    let title = `
                        <h1>${res.title商品标题}</h1>
                    `;
                    $(".displaybox").append(picone);
                    $(".price_left").append(tit);
                    $(".title_tt").append(title);
                    $(".smbox").append(picsmallone)
                    $(".smbox").append(picsmalltwo)
                    $(".smbox").append(picsmallthree)
                    $(".smbox").append(picsmallfour)

                    callback && callback(res.Id, res.price商品价格);
                }
            });
        },
        addItem: function(id, price, num) {
            //shop
            let shop = cookie.get('shop'); //获取cookie中的购物车
            // 不存在就 创建
            // 存在     修改
            console.log(cookie)
            let detail = {
                id: id,
                price: price,
                num: num
            }
            if (shop) { //存在
                shop = JSON.parse(shop); // 将字符串转成数组
                // 判断数组中已经存在的商品的Id
                // 只修改num值 而不是将商品放入数组
                if (shop.some(elm => elm.id == id)) {
                    shop.forEach(elm => {
                        elm.id == id ? elm.num = num : null;
                    })
                } else {
                    shop.push(detail)
                }

            } else {
                shop = []; //不存在新建数组
                shop.push(detail); //放入商品
            }

            cookie.set('shop', JSON.stringify(shop), 1)

        },
        addplus: function() {
            $('.add').on('click', function() {
                let val = $(this).prev().val();
                val++;
                $(this).prev().val(val);
                // alert(1);
            });
            $('.reduce').on('click', function() {
                let val = $(this).next().val();
                if (val > 1) {
                    val--
                }

                $(this).next().val(val);
                // alert(1);
            });
            $('.btn1').on('click', function() {
                location.href = ""
            })
        },
        add_success: function() {
            $('.btn1').on('click', function() {
                location.href = `${baseUrl}/src/html/jiesuan.html`;
            })
        }

    }

})