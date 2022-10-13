class ControlRefresh {
  constructor({ template = "Search this area", callback = null }) {
    this.template = template;
    this.callback = callback;
  }

  onAdd(map) {
    this.container = document.createElement("button");
    this.container.className = "btn-refresh";
    this.container.type = "button";
    this.container["aria-label"] = this.template;
    this.container.innerHTML = `<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.625 15.75C14.3529 15.75 17.375 12.7279 17.375 9C17.375 5.27208 14.3529 2.25 10.625 2.25C6.89708 2.25 3.875 5.27208 3.875 9V12.4875L1.85 10.4625L1.0625 11.25L4.4375 14.625L7.8125 11.25L7.025 10.4625L5 12.4875V9C5 5.8934 7.5184 3.375 10.625 3.375C13.7316 3.375 16.25 5.8934 16.25 9C16.25 12.1066 13.7316 14.625 10.625 14.625V15.75Z" fill="#001133" fillOpacity="0.6"/>
    </svg> <div class="search-this-area">${this.template}</div>`;

    this.container.onclick = () => {
      if (this.callback) {
        this.callback(map.getCenter());
      }
    };

    this._container = document.createElement("div");
    this._container.className = "mapboxgl-ctrl";
    this._container.appendChild(this.container);

    return this._container;
  }

  onRemove() {
    setTimeout(() => {
      this.container.parentNode.removeChild(this.container);
      this.map = undefined;
    }, 100);
  }
}

export default ControlRefresh;
