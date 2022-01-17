<template lang="pug">
.container
	div(v-for="newItem in news")
		h1 {{newItem.title}}
</template>

// The inject works
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	inject: ['news'],
});
</script>
