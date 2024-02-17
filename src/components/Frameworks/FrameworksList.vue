<script setup>
import FrameworksListItem from './FrameworksListItem.vue'
import { useFrameworks } from '../../store/frameworks.js'
import { getImageUrl } from '../../utils/imgUrlDynamic.js'
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
				img {
					border-radius: 0 10px 10px 0;
				}
			}
			.framework-item__content {
				padding-left: 11px;
			}
		}
	}
}
</style>
