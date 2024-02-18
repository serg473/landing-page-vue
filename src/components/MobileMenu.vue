<script setup>
const props = defineProps({
	isOpen: Boolean,
})
const emit = defineEmits(['isShow'])
const linkMenu = [
	{ title: 'Home', link: '/' },
	{ title: 'About us', link: 'about' },
	{ title: 'Frameworks', link: 'frameworks' },
	{ title: 'Applications', link: 'applications' },
	{ title: 'Contact us', link: 'contact' },
]
</script>
<template>
	<div class="modal-menu menu">
		<div class="modal-menu__close" @click="emit('isShow')">
			<img src="../assets/img/close.png" alt="Close" />
		</div>
		<div class="modal-menu__list">
			<ul>
				<li
					v-for="(linkItem, linkIndex) in linkMenu"
					::key="`Link__${linkIndex}`"
				>
					<a @click="emit('isShow')" :href="`#${linkItem.link}`">{{ linkItem.title }}</a>
				</li>
				<!-- <li><a href="/">Home</a></li>
				<li><a href="#about">About us</a></li>
				<li><a href="#frameworks">Frameworks</a></li>
				<li>
					<a href="#applications">Applications</a>
				</li>
				<li><a href="#contact">Contact us</a></li> -->
			</ul>
		</div>
	</div>
</template>
<style scoped lang="scss">
.modal-menu {
	padding: 22px 24px;
	margin-bottom: 1.2em;
	transition: background-color 0.5s ease;
	position: fixed;
	z-index: 999;
	top: 0;
	bottom: 0;
	height: 100%;
	left: 0;
	background: #ffff;
	width: 100%;
	margin-left: 0;
	&__close {
		background: transparent;
		border: none;
		display: flex;
		justify-content: flex-end;
	}
	&__list {
		ul {
			margin-top: 15px;
			display: flex;
			flex-direction: column;
			gap: 20px;
			text-align: center;
			a {
				text-decoration: none;
				color: #3d3d3d;
				font-weight: bold;
				font-size: 18px;
				transition: color 0.4s linear;
				&:hover {
					color: #71a3ff;
				}
			}
		}
	}
}
</style>
