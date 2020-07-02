let baseUrl = "http://localhost/wampROOM1/twoproject/project/";
define(['jquery'], function($) {
    return {
        render: function() {
            $.ajax({
                type: "get",
                url: `${baseUrl}/interface/getall.php`,
                dataType: "json",
                success: function(res) {
                    let temp = '';
                    console.log(res)
                    res.forEach(elm => {
                        let pic = JSON.parse(elm.pic商品图片);
                        console.log(pic)
                        temp += ` <li class="item" >
                        <a href="${baseUrl}/src/html/detail.html?id=${elm.Id}">
                            <div class="p-pic inline_">
                                <img src="${baseUrl}/src${pic[0].src}" alt="${baseUrl}/src/${pic[0].title}">
                            </div>
                            <div class="p-title inline_">
                                ${elm.title商品标题}
                            </div>
                            <div class="p-price inline_"><span class="yuan"></span>${elm.price商品价格}</div>
                        </a>
                    </li>`;

                    })
                    $('.list').html(temp);

                }
            });
        }
    }
})