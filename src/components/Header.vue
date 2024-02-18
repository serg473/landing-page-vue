<script setup>
import { ref } from 'vue'
import MobileMenu from './MobileMenu.vue'
const isOpen = ref(false)
const hideModal = () => (isOpen.value = false)
</script>
<template>
	<header class="header">
		<img class="header__logo" src="../assets/img/logo.svg" alt="Logo" />
		<nav class="header__menu menu">
			<div class="menu__mobile" @click="isOpen = true">
				<img src="../assets/img/menu.svg" alt="Menu mobile" />
			</div>
			<ul class="menu__list">
				<li class="menu__list-item"><a href="/">Home</a></li>
				<li class="menu__list-item"><a href="#about">About us</a></li>
				<li class="menu__list-item"><a href="#frameworks">Frameworks</a></li>
				<li class="menu__list-item">
					<a href="#applications">Applications</a>
				</li>
				<li class="menu__list-item"><a href="#contact">Contact us</a></li>
			</ul>
		</nav>
		<Teleport to="body">
			<Transition>
				<MobileMenu @isShow="hideModal" v-if="isOpen" />
			</Transition>
		</Teleport>
	</header>
</template>
<style scoped lang="scss">
$link: #3d3d3d;
.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
.header {
	padding: 21px 77px 21px 123px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-family: 'Roboto', sans-serif;
	box-shadow: 0 1px 10px 0 rgba(156, 124, 124, 0.25);
	background: #fff;
	@media screen and (max-width: 1200px) {
		padding: 21px 77px 21px 77px;
	}
	@media screen and (max-width: 970px) {
		padding: 21px 30px 21px 30px;
	}
	@media screen and (max-width: 640px) {
		padding: 21px 15px 21px 15px;
	}
}

.menu {
	&__list {
		display: flex;
		gap: 15px;
		list-style: none;
		@media screen and (max-width: 970px) {
			display: none;
		}
	}
	&__mobile {
		display: none;
		@media screen and (max-width: 970px) {
			display: block;
			width: 60px;
			height: 60px;
		}
		@media screen and (max-width: 640px) {
			width: 30px;
			height: 30px;
		}
	}
	&__list-item {
		& > a {
			text-decoration: none;
			color: $link;
			text-transform: uppercase;
			line-height: 21.09px;
			&:hover {
				color: #71a3ff;
			}
		}
	}
}
</style>
