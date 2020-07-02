let baseUrl = "http://localhost/wampROOM1/twoproject/project/";

define(['jquery'], function($) {
    return {
        render: function() {
            let id = location.search.split("=")[1];
            console.log(id)
            $.ajax({
                type: "get",
                url: `${baseUrl}/interface/getitem.php`,
                data: {
                    id: id
                },
                dataType: "json",
                success: function(res) {
                    console.log(res)
                    let pic = JSON.parse(res.pic商品图片);
                    let temp = `
                        <h1>${res.title商品标题}</h1>
                        <div>
                            <img src="${baseUrl}/src/${pic[1].src}">
                        </div>
                        <div>
                            <span yuan="yuan">$</span>${res.price商品价格}
                        </div>
                        <div>
                            库存:<span>${res.num商品库存}</span>
                        </div>
                        <input type="number" class="num" min="1" max="${res.num}" value="1">
                        <input type="button "class="add" value="加入购物车">
                        <div>
                            ${res.details商品详情}
                        </div>
                        `;
                    $('body').append(temp);
                }
            });
        }
    }
})