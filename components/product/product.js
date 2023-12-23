const template = document.createElement('template');

template.innerHTML =
    `
    <link rel="stylesheet" href="components/product/product.css">
  <div class="product">
     <img src="" alt="">
     <h3>sofa name</h3>
     <p>description</p>
  </div>
`

class Production extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
}

export {Production}
