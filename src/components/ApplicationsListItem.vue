<script setup>
const props = defineProps({
	item: {
		type: Object,
	},
})
</script>
<template>
	<div class="applictions-item">
		<h3 class="applictions-item__title">
			<slot name="title" :title="item.title"></slot>
		</h3>
		<slot name="picture" :picture="item.picture"></slot>
	</div>
</template>
<style scoped lang="scss">
.applictions-item {
	width: 227px;
	height: 162px;
	position: relative;
	border-radius: 2px;
	box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
	&__title {
		color: #fff;
		background-color: #3d3d3d;
		font-size: 16px;
		font-weight: 400;
		text-align: center;
		padding: 12px 0;
		position: absolute;
		bottom: 0;
		width: 100%;
	}
}
</style>
