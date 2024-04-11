const template = document.createElement("template")
template.innerHTML = `
    <style>
      * {
        box-sizing: border-box;
      }
      .card {
        border: 1px solid red;
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 15px;
        background-color: #f2f2f2;
      }
      .footer {
        margin-top: auto;
        text-transform: uppercase;
      }
      .footer p {
        margin-bottom: 0;
        color: red;
        font-size: 12px; 
      }
      .title {
        text-transform: capitalize;
        font-weight: 500;
        line-height: 1.25;
      }

      .card.completed {
        border-color: #5ce3ba;
      }
      .completed .footer p {
        color: #5ce3ba;
      }
    </style>
    <div class="card">
      <span class="number"></span>
      <h3 class="title"><slot /></h3>
      <div class="footer">
        <p><span class="status"></span> | user id: <span class="user-id"></span></p>
      </div>
    </div>
  `

class ItemCard extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.shadowRoot.querySelector(".number").innerText =
      "#" + this.getAttribute("number")
    this.shadowRoot.querySelector(".user-id").innerText =
      this.getAttribute("user-id")

    if (this.getAttribute("completed").toLowerCase() === "true") {
      this.shadowRoot.querySelector(".status").innerText = "completed"
      this.shadowRoot.querySelector(".card").classList.add("completed")
    } else {
      this.shadowRoot.querySelector(".status").innerText = "not completed"
    }
  }
}

window.customElements.define("item-card", ItemCard)
