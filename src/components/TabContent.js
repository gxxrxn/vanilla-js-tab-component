import Component from "../core/Component.js";
import page from "../pages/page.js";

export default class TabContent extends Component {
  template() {
    const { tabSeq } = this.$props;
    return `
      <div data-component="${tabSeq}">
        ${page({ tabSeq })}
      </div>
    `;
  }
}
