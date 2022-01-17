<template lang="pug">
.container(v-show="contentData")
	h2 content
	h3 {{contentData.title}}
	img(:src="contentData.urlToImage")
	p {{contentData.content}}
</template>

<style lang="stylus">
.container
	& img
		max-width 100%
</style>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	inject: ['news'],
	data() {
		return {
			contentData: this.news[0],
		};
	},
	watch: {
		$route() {
			console.log(this.$route.params.new);
			this.contentData = this.news.find(
				element => element.id == this.$route.params.new,
			);
		},
	},
});
</script>
