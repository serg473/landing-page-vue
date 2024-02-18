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
				<Button isActive="true">{{ item.button }}</Button>
			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
.framework-item {
	display: flex;
	gap: 20px;
	border-radius: 10px;
	background: #fff;
	@media screen and (max-width: 640px) {
		flex-direction: column;
	}
	&__description {
		color: #808080;
		margin-top: 10px;
		padding-right: 20px;
		line-height: 26px;
		@media screen and (max-width: 970px) {
			font-size: 14px;
			line-height: 23px;
		}
	}
	&__content {
		padding: 26px 0 26px 0;
		position: relative;
		@media screen and (max-width: 1400px) {
			padding: 0;
		}
	}
	&__group-btn {
		position: absolute;
		bottom: 13px;
		display: flex;
		gap: 25px;
		@media screen and (max-width: 1400px) {
			position: static;
			margin-top: 15px;
		}
		button.btn {
			@media screen and (max-width: 970px) {
				font-size: 14px;
				padding: 9px 0 9px 0;
			}
			@media screen and (max-width: 640px) {
				width: 100%;
			}
		}
	}
	&__title {
		font-weight: 700;
		font-size: 24px;
		color: #3d3d3d;
		line-height: 30px;
		@media screen and (max-width: 970px) {
			font-size: 20px;
			line-height: 20px;
		}
	}
}
</style>
