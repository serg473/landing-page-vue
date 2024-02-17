<script setup>
import FrameworksNewsListItem from './FrameworksNewsListItem.vue'
import { useFrameworks } from '../../store/frameworks.js'
import { getImageUrl } from '../../utils/imgUrlDynamic.js'
const store = useFrameworks()
</script>
<template>
	<div class="frameworks-news">
		<FrameworksNewsListItem
			v-for="newsItem in store.listFrameworksNews"
			:key="newsItem.id"
			:item="newsItem"
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
		</FrameworksNewsListItem>
	</div>
</template>
<style lang="scss">
.frameworks-news {
	display: flex;
	background: white;
	padding: 0 102px 0 122px;
}
</style>
