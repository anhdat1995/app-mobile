var index = 1;
changeImage = function(){
    var imgs = ["./image/image1.png","./image/image2.png","./image/image3.png"];
    document.getElementById('img').src = imgs[index];
    index++;
    if(index==3){
        index=0;
    }
}
setInterval(changeImage,3000);
const $ = document.querySelector.bind(document)
const $$= document.querySelectorAll.bind(document)
const app = {
    items: [
        {
            reduce: 'Giảm 7%',
            installment: 'Trả góp 0%',
            img: './image/list3.png',
            life: 'Máy tính bảng Apple iPad Pro',
            machine: '12.9"M2 2022 - Wifi - 128GB',
            performance: 'Wifi-128GB',
            Accessibility: '5GB-128GB',
            ram: '8GB',
            spped: '12.9',
            hz: '120HZ"',
            price: '27.650.000đ',
            origin: '29.500.000đ',
            quantity: 'Hàng vừa về',
            quanliti: 'Mới 100%'
        },
        {
            reuce: 'Giảm 6%',
            installment: 'Trả góp 0%',
            img: './image/list3.png',
            life: 'Máy tính bảng Apple iPad Pro',
            machine: '11"M2 2022 - 5GB - 128GB',
            performance: '5gb-128GB',
            Accessibility: 'Wifi-128GB',
            ram: '8GB',
            spped: '12.9',
            hz: '120HZ"',
            price: '24.390.000đ',
            origin: '25.990.000đ',
            quantity: 'Hàng có sẵn',
            quanliti: 'Mới 100%'
        },
        {
            reduce: 'Trả góp 0%',
            installment: 'Trả góp 0%',
            img: './image/list1.png',
            life: 'Máy tính bảng Apple iPad Air',
            machine: '5 2022 - 5GB - 256GB',
            performance: '5gb-256GB',
            Accessibility: 'Wifi-64GB',
            ram: '8GB',
            spped: '10.9"',
            hz: '60HZ',
            price: '21.790.000đ',
            origin: '22.990.000đ',
            quantity: 'Hàng vừa về',
            quanliti: 'Mới 100%'
        },
        {
            reduce: 'Giảm 10%',
            installment: 'Trả góp 0%',
            img: './image/list1.png',
            life: 'Máy tính bảng Apple iPad Air',
            machine: '5 2022-Wifi-256GB',
            performance: 'Wifi-256GB',
            Accessibility: 'Wifi-64GB',
            ram: '8GB',
            spped: '10.9"',
            hz: '60HZ',
            price: '17.890.000đ',
            origin: '18.990.000đ',
            quantity: 'Hàng mới về',
            quanliti: 'Mới 100%'
        },
        {
            reduce: 'Giảm 10%',
            installment: 'Trả góp 0%',
            img: './image/list.png',
            life: 'Máy tính bảng Apple iPad Air',
            machine: '5 2022-Wifi-64GB',
            performance: '5GB-64GB',
            Accessibility: 'Wifi-64GB',
            ram: '8GB',
            spped: '10.9"',
            hz: '60HZ',
            price: '17.390.000đ',
            origin: '18.390.000đ',
            quantity: 'Hàng mới về',
            quanliti: 'Mới 100%'
        },
    ],
    render:function(){
        const htmls = this.items.map(item => {
            return `
                <div class="list-item">
                    <div class="pan">
                        <span>${item.reduce}</span>
                        <span>${item.installment}</span>
                    </div>
                    <div class="bay">
                        <a href="#">
                            <img src="${item.img}" alt="">
                        </a>
                    </div>
                    <div class="sta">
                        <span>${item.life}</sapn>
                        <p>${item.machine}</p>
                    </div>
                    <div id="myDIV" class="list-nav">
                        <span class="hi active">${item.performance}</span>
                        <span class="hi">${item.Accessibility}</span>
                    </div>
                    <div class="list-nav">
                        <span>${item.ram}</span>
                        <span>${item.spped}</span>
                        <span>${item.hz}</span>
                    </div>
                    <div class="price">
                        <span>${item.price}</span>
                        <p>${item.origin}</p>
                    </div>
                    <div class="time">
                        <span>${item.quantity}</span>
                        <span>${item.quanliti}</span>
                    </div>
                    <div class="star">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                </div>
            `
        })
        $(".nav-list").innerHTML = htmls.join('')
    },
    start:function() {
        this.render()
    },
}
app.start()
const app1 = {
    items1: [
        {
            reduce1: 'Giảm 8%',
            installment: 'Trả góp 0%',
            img1: './image/img1.png',
            life1: 'Điện thoại Apple iPhone 14',
            machine1: 'Plus 256GB VN/A',
            performance1: '256GB',
            Accessibility1: '128GB',
            Acce1: '512GB',
            ram1: '6GB',
            spped1: '6.7',
            hz1: '60HZ"',
            price1: '24.090.000đ',
            origin1: '26.100.000đ',
            quantity1: 'Hàng đang về',
            quanliti1: 'Mới 100%',
        },
        {
            reduce1: 'Giảm 10%',
            installment: 'Trả góp 0%',
            img1: './image/img2.png',
            life1: 'Điện thoại Apple iPhone 14',
            machine1: '128GB VN/A',
            performance1: '128GB',
            Accessibility1: '512GB',
            Acce1: '256GB',
            ram1: '6GB',
            spped1: '6.1',
            hz1: '60HZ"',
            price1: '19.490.000đ',
            origin1: '21.590.000đ',
            quantity1: 'Hàng mới về',
            quanliti1: 'Mới 100%',
        },
        {
            reduce1: 'Giảm 3%',
            installment: 'Trả góp 0%',
            img1: './image/img3.png',
            life1: 'Điện thoại Apple iPhone 14',
            machine1: 'Pro 128GB VN/A',
            performance1: '128GB',
            Accessibility1: '512GB',
            Acce1: '256GB',
            ram1: '6GB',
            spped1: '6.1',
            hz1: '120HZ"',
            price1: '25.890.000đ',
            origin1: '26.690.000đ',
            quantity1: 'Hàng vừa về',
            quanliti1: 'Mới 100%',
        },
        {
            reduce1: 'Giảm 5%',
            installment: 'Trả góp 0%',
            img1: './image/img4.png',
            life1: 'Điện thoại Apple iPhone 14',
            machine1: 'Pro 512GB VN/A',
            performance1: '512GB',
            Accessibility1: '256GB',
            Acce1: '128GB',
            ram1: '6GB',
            spped1: '6.1',
            hz1: '120HZ"',
            price1: '32.390.000đ',
            origin1: '23.390.000đ',
            quantity1: 'Hàng đang về',
            quanliti1: 'Mới 100%',
        },
        {
            reduce1: 'Giảm 5%',
            installment: 'Trả góp 0%',
            img1: './image/img5.png',
            life1: 'Điện thoại Apple iPhone 14',
            machine1: 'Pro Max 256GB VN/A',
            performance1: '256GB',
            Accessibility1: '128GB',
            Acce1: '1TB',
            ram1: '6GB',
            spped1: '6.7',
            hz1: '120HZ"',
            price1: '30.890.000đ',
            origin1: '33.390.000đ',
            quantity1: 'Hàng sắp về',
            quanliti1: 'Mới 100%',
        },
        {
            reduce1: 'Giảm 7%',
            installment: 'Trả góp 0%',
            img1: './image/img6.png',
            life1: 'Điện thoại Apple iPhone 14',
            machine1: 'Pro Max 128GB VN/A',
            performance1: '128GB',
            Accessibility1: '256GB',
            Acce1: '1TB',
            ram1: '6GB',
            spped1: '6.7',
            hz1: '120HZ"',
            price1: '28.190.000đ',
            origin1: '30.390.000đ', 
            quantity1: 'Hàng mới về',
            quanliti1: 'Mới 100%',
        },
        {
            reduce1: 'Giảm 7%',
            installment: 'Trả góp 0%',
            img1: './image/img7.png',
            life1: 'Điện thoại Samsung Garaxy',
            machine1: 'S23 Ultra-RAM 12GB - 1T',
            performance1: '1TB',
            Accessibility1: '256GB',
            Acce1: '512GB',
            ram1: '12GB',
            spped1: '6.8',
            hz1: '120HZ"',
            price1: '39.990.000đ',
            origin1: '40.390.000đ',
            quantity1: 'Hàng vừa về',
            quanliti1: 'Mới 100%',
        },
        {
            reduce1: 'Giảm 7%',
            installment: 'Trả góp 0%',
            img1: './image/img7.png',
            life1: 'Điện thoại Samsung Garaxy',
            machine1: 'S23 Ultra-RAM 12GB - 512GB',
            performance1: '512GB',
            Accessibility1: '256GB',
            Acce1: '1TB',
            ram1: '12GB',
            spped1: '6.8',
            hz1: '120HZ"',
            price1: '36.990.000đ',
            origin1: '8.390.000đ',
            quantity1: 'Hàng đang về',
            quanliti1: 'Mới 100%',
        },
        {
            reduce1: 'Giảm 7%',
            installment: 'Trả góp 0%',
            img1: './image/img8.png',
            life1: 'Điện thoại Samsung Garaxy',
            machine1: 'S23 Ultra-RAM 8GB - 256GB',
            performance1: '256GB',
            Accessibility1: '512GB',
            Acce1: '1TB',
            ram1: '8GB',
            spped1: '6.6',
            hz1: '120HZ"',
            price1: '26.990.000đ',
            origin1: '80.390.000đ',
            quantity1: 'Hàng sắp về',
            quanliti1: 'Mới 100%',
        },
        {
            reduce1: 'Giảm 7%',
            installment: 'Trả góp 0%',
            img1: './image/img7.png',
            life1: 'Điện thoại Samsung Garaxy',
            machine1: 'S23 Ultra-RAM 8GB - 512GB',
            performance1: '512GB',
            Accessibility1: '256GB',
            Acce1: '1TB',
            ram1: '12GB',
            spped1: '6.8',
            hz1: '120HZ"',
            price1: '29.990.000đ',
            origin1: '30.390.000đ',
            quantity1: 'Hàng sắp về',
            quanliti1: 'Mới 100%',
        },
    ],
    render1:function(e){
        const htmls1 = this.items1.map(item1 => {
            return `
                <div class="list-item">
                    <div class="pan">
                        <span>${item1.reduce1}</span>
                        <span>${item1.installment}</span>
                    </div>
                    <div class="bay">
                        <a href="#">
                            <img src="${item1.img1}" alt="">
                        </a>
                    </div>
                    <div class="sta">
                        <span>${item1.life1}</sapn>
                        <p>${item1.machine1}</p>
                    </div>
                    <div class="list-nav">
                        <span class="hi active">${item1.performance1}</span>
                        <span class="hi">${item1.Accessibility1}</span>
                        <span class="hi">${item1.Acce1}</span>
                    </div>
                    <div class="list-nav">
                        <span>${item1.ram1}</span>
                        <span>${item1.spped1}</span>
                        <span>${item1.hz1}</span>
                    </div>
                    <div class="price">
                        <span>${item1.price1}</span>
                        <p>${item1.origin1}</p>
                    </div>
                    <div class="time">
                        <span>${item1.quantity1}</span>
                        <span>${item1.quanliti1}</span>
                    </div>
                    <div class="star">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                </div>
            `
        })
        $(".nav-list1").innerHTML = htmls1.join('')
    },
    start1:function() {
        this.render1()
    },
}
app1.start1()
const app2 = {
    items2: [
        {
            reduce2: 'Giảm 18%',
            installmen2: 'Trả góp 0%',
            img2: './image/watch1.png',
            life2: 'Đồng hồ Amazfit GTS 2 Mini 2022',
            performance2: 'Dây...',
            Accessibility2: '40.5mm',
            Acce2: '14 ngày',
            price2: '1.790.000đ',
            origin2: '2.190.000đ',
            quanliti2: 'Mới 100%',
        },
        {
            reduce2: 'Giảm 10%',
            installmen2: 'Trả góp 0%',
            img2: './image/watch2.png',
            life2: 'Đồng hồ Amazfit GTR 4',
            performance2: 'Dây...',
            Accessibility2: '46mm',
            Acce2: '130 ngày',
            price2: '4.990.000đ',
            origin2: '4.990.000đ',
            quanliti2: 'Mới 100%',
        },
        {
            reduce2: 'Giảm 6%',
            installmen2: 'Trả góp 0%',
            img2: './image/watch3.png',
            life2: 'Đồng hồ Amazfit GTS 2 Mini 2022',
            performance2: 'Dây...',
            Accessibility2: '45mm',
            Acce2: '30 ngày',
            price2: '12.490.000đ',
            origin2: '14.190.000đ',
            quanliti2: 'Mới 100%',
        },
        {
            reduce2: 'Giảm 9%',
            installmen2: 'Trả góp 0%',
            img2: './image/watch4.png',
            life2: 'Đồng hồ Huawei Watch GT3 Pro Daay Silicone',
            performance2: 'Dây...',
            Accessibility2: '46mm',
            Acce2: '8-14 ngày',
            price2: '6.890.000đ',
            origin2: '8.190.000đ',
            quanliti2: 'Mới 100%',
        },
        {
            reduce2: 'Giảm 12%',
            installmen2: 'Trả góp 0%',
            img2: './image/watch5.png',
            life2: 'Vòng đeo tay thông minh Huawei Band 7',
            performance2: 'Dây...',
            Accessibility2: '44.5mm',
            Acce2: '10-14 ngày',
            price2: '950.000đ',
            origin2: '1.190.000đ',
            quanliti2: 'Mới 100%',
        },
    ],
    render2:function(){
        const htmls2 = this.items2.map(item2 => {
            return `
                <div class="list-item">
                    <div class="pan">
                        <span>${item2.reduce2}</span>
                        <span>${item2.installmen2}</span>
                    </div>
                    <div class="bay">
                        <a href="#">
                            <img src="${item2.img2}" alt="">
                        </a>
                    </div>
                    <div class="sta">
                        <span>${item2.life2}</span>
                    </div>
                    <div class="list-nav">
                        <span class="hi active">${item2.performance2}</span>
                        <span class="hi">${item2.Accessibility2}</span>
                        <span class="hi">${item2.Acce2}</span>
                    </div>
                    <div class="price">
                        <span>${item2.price2}</span>
                        <p>${item2.origin2}</p>
                    </div>
                    <div class="time">
                        <span>${item2.quanliti2}</span>
                        <span class="star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
            `
        })
        $(".nav-list2").innerHTML = htmls2.join('')
    },
    start2:function() {
        this.render2()
    },
}
app2.start2()