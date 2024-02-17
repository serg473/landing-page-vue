<script setup>
const props = defineProps({
	isActive: Boolean,
})
</script>
<template>
	<button class="btn" :class="{ active: isActive }">
		<slot></slot>
	</button>
</template>
<style scoped lang="scss">
$bg-btn: #71a3ff;
.btn {
	font-family: inherit;
	border: 1px solid $bg-btn;
	border-radius: 10px;
	width: 200px;
	height: 40px;
	color: #3d3d3d;
	padding: 11px 0 9px 0;
	background: #ffffff;
	cursor: pointer;
	&.active {
		color: #fff;
		background: $bg-btn;
	}
}
</style>
