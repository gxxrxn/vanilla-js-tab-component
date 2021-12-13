import Component from "../core/Component.js";

export default class TabMenu extends Component {
  template() {
    const { tabItems } = this.$props;
    return `
    <nav style="height: 50px">
      <ul style="list-style: none; padding: 0px;">
        ${tabItems
          .map(
            ({ seq, id, title }) => `
              <li data-seq="${seq}" style="float: left; margin-right: 15px;">
                <button class="tabButton">${title}</button>
              </li>
            `
          )
          .join("")}
      </ul>
      </nav>
    `;
  }

  setEvent() {
    const { changeTab } = this.$props;

    this.addEvent("click", ".tabButton", ({ target }) => {
      changeTab(Number(target.closest("[data-seq]").dataset.seq));
    });
  }
}
