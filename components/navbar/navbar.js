const template = document.createElement('template');
template.innerHTML = `
<link rel="stylesheet" href="components/navbar/navbar.css">
<link rel="stylesheet" href="fa-fa/css/all.min.css">
<nav>

                <i class="fas fa-bars">
                  <div id="dropDown_menu" class="hide">
                    <a href="">خانه</a>
                    <a href="">درباره ما</a>
                    <a href="">خدمات</a>
                    <a href="page_aboutUs/about_us.html">تماس با ما</a>
                  </div>
                </i>

                <div class="nav_icons">
                    <i class="fa fa-user"></i>
                    <i class="fas fa-shopping-cart"></i>
                </div>

                <ul>
                    <li><a href="">خانه</a></li>
                    <li><a href="">درباره ما</a></li>

                    <li><a href="">خدمات</a></li>
                    <li><a href="page_aboutUs/about_us.html">تماس با ما</a></li>
                </ul>

                <div class="search_container">
                    <input type="text" placeholder="جستجو">
                    <i class="	fas fa-search"></i>
                </div>

                <div class="title_container">
                    <h1 id="title_h1">خانه <span>رویایی</span></h1>
                    <h2 id="title_h2">romance <span>house</span></h2>
                </div>

            </nav>
`;




class NavbarClass extends HTMLElement {

    constructor() {

        super()

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        let bars_icon = this.shadowRoot.querySelector('.fa-bars');
        let bars_dropDown_menu = this.shadowRoot.getElementById('dropDown_menu');

        function dropDown_menu_animation(a) {
            a.style.transform = 'translateX(0)';
            a.style.opacity = 1;
        }

        bars_icon.addEventListener('click', () => {
            bars_dropDown_menu.classList.toggle('hide');

            if (bars_dropDown_menu.classList.contains('hide')) {
                bars_dropDown_menu.querySelectorAll('a').forEach((a, index) => {
                    a.style.transform = 'translateX(-200px)';
                    a.style.opacity = 0;
                })
            } else {
                bars_dropDown_menu.querySelectorAll('a').forEach((a, index) => {

                    setTimeout(() => { dropDown_menu_animation(a) }, (index + 1) * 100)

                })
            }



        })

        console.log(window);
        window.addEventListener('load', () => {
            setTimeout(function () {
                console.log('lllll');
            }, 3000)
        })
        // this.shadowRoot.querySelector('.title_container h1').style.transform = 'translateX(100px)';

    }


}



export { NavbarClass }