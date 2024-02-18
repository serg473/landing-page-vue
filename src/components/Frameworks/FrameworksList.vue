<script setup>
import { useFrameworks } from '../../store/frameworks.js'
import { getImageUrl } from '../../utils/imgUrlDynamic.js'
import FrameworksListItem from './FrameworksListItem.vue'
const store = useFrameworks()
</script>
<template>
	<div class="frameworks-list">
		<FrameworksListItem
			v-for="listItem in store.listFrameworks"
			:key="listItem.id"
			:item="listItem"
		>
			<template #title="{ title }">
				{{ title }}
			</template>
			<template #picture="{ picture }">
				<img :src="getImageUrl(picture)" />
			</template>
			<template #desc="{ desc }">
				{{ desc }}
			</template>
		</FrameworksListItem>
	</div>
</template>
<style lang="scss">
.frameworks-list {
	display: flex;
	flex-direction: column;
	gap: 45px;
	.framework-item {
		&:nth-child(2n) {
			.framework-item__picture {
				order: 1;
				@media screen and (max-width: 970px) {
					order: 0;
				}
				img {
					border-radius: 0 10px 10px 0;
					@media screen and (max-width: 970px) {
						border-radius: 10px 10px 0 0;
						width: 100%;
					}
				}
			}
			.framework-item__content {
				padding-left: 11px;
				@media screen and (max-width: 970px) {
					padding-left: 23px;
				}
			}
		}
	}
	img {
		border-radius: 10px 0 0 10px;
		width: 535px;
		height: 100%;
		@media screen and (max-width: 970px) {
			width: 100%;
			border-radius: 10px 10px 0 0;
		}
	}
}
</style>
