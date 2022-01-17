<template lang="pug">
.container
	div(v-for="newItem in news")
		.new-link(@click="goToNew(newItem.id)")
			.new-link__image
				img(:src="newItem.urlToImage")
			.new-link__text
				h3 {{newItem.title}}
				p: <small>{{newItem.description}}</small>
</template>

<style lang="stylus" scoped>
.container
	max-width 100%
	.new-link
		display grid
		grid-template-columns 200px 1fr
		align-items center
		margin-bottom 10px
		gap 20px
		&:hover
			background-color: #cecece
			cursor pointer
		&__image > img
			height 100px
			width 100%
			margin-right 10px
</style>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	inject: ['news'],
	methods: {
		goToNew(id) {
			this.$router.push(id);
		},
	},
});
</script>
