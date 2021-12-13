import Component from "./core/Component.js";
import TabMenu from "./components/TabMenu.js";
import TabContent from "./components/TabContent.js";

export default class App extends Component {
  setup() {
    this.$state = {
      tabItems: [
        {
          seq: 1,
          id: "tab1",
          title: "tab1",
        },
        {
          seq: 2,
          id: "tab2",
          title: "tab2",
        },
        {
          seq: 3,
          id: "tab3",
          title: "tab3",
        },
      ],
    };
  }

  template() {
    return `
        <header data-component="tab-menu"></header>
        <main data-component="tab-content"></main>
      `;
  }

  mounted() {
    const { tabItems, changeTab } = this;
    const $tabMenu = this.$target.querySelector('[data-component="tab-menu"]');
    const $tabContent = this.$target.querySelector(
      '[data-component="tab-content"]'
    );

    new TabMenu($tabMenu, {
      tabItems,
      changeTab: changeTab.bind(this),
    });

    new TabContent($tabContent, { tabSeq: 0 });
  }

  get tabItems() {
    const { tabItems } = this.$state;
    return tabItems;
  }

  changeTab(seq) {
    const $tabContent = this.$target.querySelector(
      '[data-component="tab-content"]'
    );
    const tabItems = [...this.$state.tabItems];
    const index = tabItems.findIndex((v) => v.seq === seq);

    new TabContent($tabContent, { tabSeq: index });
  }
}
