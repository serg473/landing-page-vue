<script setup>
import { getImageUrl } from '@/utils/imgUrlDynamic.js'
import { useApplications } from '../store/applications.js'
import ApplicationsListItem from './ApplicationsListItem.vue'
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
	@media screen and (max-width: 1439px) {
		gap: 45px 77px;
	}
	@media screen and (max-width: 1200px) {
		gap: 25px 77px;
	}
	@media screen and (max-width: 640px) {
		justify-content: space-between;
		gap: 25px 0;
	}
	img {
		@media screen and (max-width: 1200px) {
			width: 100%;
		}
	}
}
</style>
