<template lang="pug">
.container
	div(v-for="newItem in newsData")
		.new-link(@click="goToNew(newItem.id)" :class="[{visited: visited.includes(newItem.id)}]")
			.new-link__image
				img(:src="newItem.urlToImage")
			.new-link__text
				h3 {{newItem.title}}
				p: <small v-html="newItem.description"></small>
</template>

<style lang="stylus" scoped>
@import '~@/mixins.styl'
.container
	max-width 100%
	overflow-y scroll
	max-height 100vh
	scrollbarStyles()
	& img
		max-width 100%
	.new-link
		display grid
		grid-template-columns 200px 1fr
		margin-bottom 10px
		height 100px
		overflow hidden
		border-radius 10px
		gap 10px
		&.visited
			color #aaa
		&:hover
			background-color: #cecece
			cursor pointer
</style>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	props: ['newsData'],
	data() {
		return {
			visited: [] as Array<any>,
		};
	},
	mounted() {
		console.log(this.newsData);
	},
	methods: {
		goToNew(id: any) {
			this.visited.push(id);
			this.$router.push(id);
		},
	},
});
</script>
