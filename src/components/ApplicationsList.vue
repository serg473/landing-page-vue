<script setup>
import ApplicationsListItem from './ApplicationsListItem.vue'
import { useApplications } from '../store/applications.js'
import { getImageUrl } from '@/utils/imgUrlDynamic.js'
const store = useApplications()
</script>
<template>
	<div class="applications-list">
		<ApplicationsListItem
			v-for="listItem in store.listApplications"
			:key="listItem.id"
			:item="listItem"
		>
			<template #title="{ title }">
				{{ title }}
			</template>
			<template #picture="{ picture }">
				<img :src="getImageUrl(picture)" />
			</template>
		</ApplicationsListItem>
	</div>
</template>
<style lang="scss">
.applications-list {
	display: flex;
	flex-wrap: wrap;
	gap: 45px 85px;
}
</style>
