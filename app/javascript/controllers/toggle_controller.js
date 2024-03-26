import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = ['togglableElement']

  toggleForm() {
    this.togglableElementTarget.classList.toggle('d-none')
  }
}
