<template>
  <div class="home">
    <div class="md-layout md-gutter">
      <div
        v-for="navigation in dashboardList"
        :key="navigation.key"
        class="md-layout-item md-size-33"
      >
        <md-card md-with-hover @click="handleNavigation">
          <md-ripple>
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">{{ navigation.title }}</div>
                <div class="md-subhead">Medium size</div>
              </md-card-header-text>

              <md-card-media md-medium>
                <md-icon class="iconSize md-primary">{{
                  navigation.icon
                }}</md-icon>
              </md-card-media>
            </md-card-header>
            <md-card-content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
            </md-card-content>
            <md-card-actions>
              <md-button>Open</md-button>
            </md-card-actions>
          </md-ripple>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  computed: { ...mapGetters({ dashboardList: "dashboardList" }) },
  methods: {
    handleNavigation() {
      this.menuVisible = !this.menuVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
.iconSize {
  height: 100%;
  width: 100%;
  font-size: 100px !important;
}
.md-layout-item {
  padding-top: 40px;
  &:after {
    width: 100%;
    height: 100%;
    display: block;
    content: " ";
  }
}
</style>
