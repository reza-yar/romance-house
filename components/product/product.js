const template = document.createElement('template');

template.innerHTML =
    `
    <link rel="stylesheet" href="components/product/product.css">
  <div class="product">
     <img src="" alt="">
     <h3></h3>
     <p>description</p>
  </div>
`

class Production extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.querySelector('h3').innerHTML = this.getAttribute('productName');
        this.shadowRoot.querySelector('img').src = this.getAttribute('productPic')
         this.addEventListener('load', () => {
            console.log('load');
         })

    }
}

export {Production}
