<template lang="pug">
.home
  .body
    navigation(:newsData="newsList")
    content(:newsData="newsList")
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -moz-osx-font-smoothing grayscale
  font-size 62.5%
  color #2c3e50
html
  overflow hidden
.body
  display grid
  max-width 1440px
  margin 0 auto
  grid-template-columns 500px 1fr
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import newsService from './services/news.service';
import Content from './components/Content.vue';
import Navigation from './components/Navigation.vue';
export default defineComponent({
	data() {
		return {
			newsList: [] as Array<any>,
		};
	},
	components: {
		Content,
		Navigation,
	},
	mounted() {
		this.getNews();
	},
	methods: {
		getNews() {
			newsService
				.get('')
				.then(response => this.formatFetch(response.data.articles));
		},
		formatFetch(news: any) {
			for (const key in news) {
				this.newsList.push({ ...news[key], id: key });
			}
		},
	},
});
</script>
