export default {
  state: {
    activeNavigation: "/",
    menuVisible: false,
    navigationList: [
      { key: "1", icon: "dashboard", title: "Dashboard", link: "/" },
      {
        key: "2",
        icon: "movie",
        title: "Video Recognition",
        link: "/POC1",
      },
      {
        key: "3",
        icon: "image",
        title: "Image Recognition",
        link: "/POC2",
      },
      {
        key: "4",
        icon: "message",
        title: "MSG Integration",
        link: "/POC3",
      },
      {
        key: "5",
        icon: "description",
        title: "Excel Import",
        link: "/POC4",
      },
      { key: "6", icon: "face", title: "Face Login", link: "/POC5" },
      { key: "7", icon: "camera", title: "QR Code", link: "/POC6" },
      { key: "8", icon: "send", title: "AWS SNS", link: "/POC7" },
      { key: "9", icon: "call", title: "AWS Connect", link: "/POC8" },
      {
        key: "10",
        icon: "web",
        title: "Data Scraping",
        link: "/POC9",
      },
      { key: "11", icon: "web", title: "Geocoding", link: "/POC10" },
      {
        key: "12",
        icon: "description",
        title: "PDF to Excel",
        link: "/POC11",
      },
    ],
  },
  getters: {
    dashboardList: (state) => {
      return state.navigationList.filter((item) => item.key !== "1");
    },
    subSectionList: (state) => (link) => {
      return state.navigationList.filter((item) => item.link === link);
    },
    menuVisible: (state) => state.menuVisible,
  },
  mutations: {
    setActiveNavigation(state, link) {
      state.activeNavigation = link;
      state.menuVisible = !state.menuVisible;
    },
    setMenuVisible(state) {
      state.menuVisible = !state.menuVisible;
    },
  },
  actions: {
    setActiveNavigation({ commit }, link) {
      commit("setActiveNavigation", link);
    },
    setMenuVisible({ commit }) {
      commit("setMenuVisible");
    },
  },
  modules: {},
};
