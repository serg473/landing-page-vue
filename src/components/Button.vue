<script setup>
const props = defineProps({
	active: {
		type: boolean,
	},
})
</script>
<template>
	<button class="{{`${active}`}}">
		<slot></slot>
	</button>
</template>
<style scoped lang="scss">
button {
	border: 1px solid #71a3ff;
	border-radius: 10px;
	width: 200px;
	height: 40px;
}
</style>
