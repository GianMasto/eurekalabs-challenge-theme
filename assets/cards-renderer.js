class CardsRenderer {
  constructor(parentElement, numberOfCards) {
    this.parentElement = parentElement
    this.numberOfCards = numberOfCards
  }

  async fetchData() {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${this.numberOfCards}`
    )

    if (!res.ok) {
      throw new Error("There was a problem retrieving the data.")
    }

    return await res.json()
  }

  async renderCards() {
    try {
      const items = await this.fetchData()
      this.parentElement.innerHTML = ""

      items.forEach((item) => {
        const card = document.createElement("item-card")

        card.setAttribute("number", item.id)
        card.setAttribute("user-id", item.userId)
        card.setAttribute("completed", item.completed)
        card.innerText = item.title

        this.parentElement.appendChild(card)
      })
    } catch (error) {
      this.parentElement.innerHTML = `<p class="text-red-500 m-0">Error: ${error.message}</p>`
    }
  }
}
