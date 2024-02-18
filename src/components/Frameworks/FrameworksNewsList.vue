<script setup>
import { useFrameworks } from '../../store/frameworks.js'
import { getImageUrl } from '../../utils/imgUrlDynamic.js'
import FrameworksNewsListItem from './FrameworksNewsListItem.vue'
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
	@media screen and (max-width: 1400px) {
		flex-direction: column;
		gap: 25px;
		padding: 15px;
	}
	img {
		width: 345px;
		height: 100%;
	}
}
</style>
