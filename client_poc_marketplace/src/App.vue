<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-large md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="setMenuVisible">
              <md-icon>menu</md-icon>
            </md-button>

            <span class="md-title">{{
              subSectionList(activeNavigation)[0].title
            }}</span>
          </div>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button">
              <md-icon>more_vert</md-icon>
            </md-button>
          </div>
        </div>

        <div class="md-toolbar-row">
          <md-tabs
            class="md-primary"
            md-sync-route
            v-for="navigation in subSectionList(activeNavigation)"
            :key="navigation.key"
          >
            <md-tab
              :id="navigation.link"
              md-label="Home"
              :to="navigation.link"
              exact
            ></md-tab>
            <md-tab
              id="tab-pages"
              md-label="Documentation"
              :to="navigation.link + '_documentation'"
            ></md-tab>
            <md-tab
              id="tab-posts"
              md-label="Technology Used"
              :to="navigation.link + '_technology'"
            ></md-tab>
          </md-tabs>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>POC</span>
        </md-toolbar>

        <md-list>
          <md-list-item
            v-for="navigation in navigationList"
            :key="navigation.key"
            :to="navigation.link"
            @click="setActiveNavigation(navigation.link)"
          >
            <md-icon>{{ navigation.icon }}</md-icon>
            <span class="md-list-item-text">{{ navigation.title }}</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>
      <md-app-content>
        <router-view />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters({
      subSectionList: "subSectionList",
      menuVisible: "menuVisible",
    }),
    ...mapState({
      navigationList: (state) => state.navigation.navigationList,
      activeNavigation: (state) => state.navigation.activeNavigation,
    }),
  },
  data: () => ({}),
  methods: {
    ...mapActions({
      setMenuVisible: "setMenuVisible",
      setActiveNavigation: "setActiveNavigation",
      toggleMenu: "setMenuVisible",
    }),
  },
};
</script>

<style lang="scss" scoped>
.md-list-item span {
  color: rgba(0, 0, 0, 0.87) !important;
}

.md-app {
  height: 100vh;
  border: 1px solid rgba(#000, 0.12);
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>