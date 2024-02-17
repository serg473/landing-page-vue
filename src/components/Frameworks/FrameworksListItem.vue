<script setup>
import Button from '../Button.vue'
const props = defineProps({
	item: {
		type: Object,
		required: true,
	},
})
</script>
<template>
	<div class="framework-item">
		<div class="framework-item__picture">
			<slot name="picture" :picture="item.picture"></slot>
		</div>
		<div class="framework-item__content">
			<h3 class="framework-item__title">
				<slot name="title" :title="item.title"></slot>
			</h3>
			<div class="framework-item__description">
				<slot name="desc" :desc="item.description"></slot>
			</div>
			<div class="framework-item__group-btn">
				<Button isActive="true">Read more</Button>
				<Button>Webinar</Button>
			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
.framework-item {
	display: flex;
	gap: 73px;
	border-radius: 10px;
	box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
	background: #fff;
	&__description {
		color: #808080;
		margin-top: 10px;
		height: 100%;
	}
	&__content {
		padding: 27px 0 23px 0;
		position: relative;
	}
	&__group-btn {
		position: absolute;
		bottom: 23px;
		display: flex;
		gap: 25px;
	}
	&__title {
		font-weight: 700;
		font-size: 24px;
		color: #3d3d3d;
	}
}
</style>
