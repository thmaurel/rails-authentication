import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-in-list"
export default class extends Controller {
  static targets = ["items", "form", 'togglableElement']

  connect() {
    console.log(this.element)
    console.log(this.itemsTarget)
    console.log(this.formTarget)
  }

  send(event) {
    event.preventDefault()
    fetch(this.formTarget.action, {
      method: "POST", // Could be dynamic with Stimulus values
      headers: { "Accept": "application/json" },
      body: new FormData(this.formTarget)
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        if (data.inserted_item) {
          // beforeend could also be dynamic with Stimulus values
          this.itemsTarget.insertAdjacentHTML("beforeend", data.inserted_item)
        }
        this.formTarget.outerHTML = data.form
        this.togglableElementTarget.classList.add('d-none')
      })
  }
}
