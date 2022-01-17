<template lang="pug">
.content(v-if="contentData")
	.header
		h1 {{contentData.title}}
		p {{contentData.author}}
		p: <small>{{contentData.source.name}}</small>
		img(:src="contentData.urlToImage")
	.content-text
		p {{contentData.content}}
		button(@click="goToPage(contentData.url)") Go to the website
.empty(v-else)
	img(src="~@assets/xhockware.jpg")
</template>

<style lang="stylus" scoped>
@import '~@/mixins.styl'
.content
	overflow-y scroll
	max-height 100vh
	scrollbarStyles()
.header
	text-align center
	& img
		width 100%
	& h1
		font-size 3.6rem
		padding-top 50px
		max-width 80%
		margin 0 auto
.content-text
	display flex
	flex-direction column
	align-items center
	& p
		font-size 1.5rem
		width 90%
		margin 0 auto
		margin-top 50px
	& button
		margin 50px auto
		height 36px
		padding 0 16px
		background-color #257DE1
		color white
		font-weight bold
		border none
		border-radius 10px
		cursor pointer
.empty
	display flex
	justify-content center
	align-items center
	height 100vh
</style>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	props: ['newsData'],
	data() {
		return {
			contentData: null,
		};
	},
	watch: {
		$route() {
			console.log(this.$route.params.new);
			this.contentData = this.newsData.find(
				element => element.id == this.$route.params.new,
			);
		},
	},
	methods: {
		goToPage(url) {
			window.open(url, '_blank');
		},
	},
});
</script>
