export default class Modal {
  constructor() {
    this.title = document.getElementById("modal-title");
    this.description = document.getElementById("modal-description");
    this.btn = document.getElementById("modal-btn");
    this.completed = document.getElementById("modal-completed");
  }

  onClick(callback) {
    this.btn.onclick = () => {
      if (title.value === "" || description.value === "") {
        // console.error('Title and description are required');
        this.alert.show("Title and description are required");
        return;
      }

      $("#modal").modal("toggle");
    };
  }
}
