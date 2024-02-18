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
	font-size: inherit;
	border: 1px solid $bg-btn;
	border-radius: 10px;
	width: 200px;
	height: auto;
	color: #3d3d3d;
	padding: 11px 0 9px 0;
	background: #ffffff;
	cursor: pointer;
	line-height: 20px;
	transition: all 0.4s ease;
	&.active {
		color: #fff;
		background: $bg-btn;
		&:hover {
			background-color: #ffffff;
			color: #3d3d3d;
		}
	}
	&:hover {
		background: $bg-btn;
		color: #ffffff;
	}
}
</style>
