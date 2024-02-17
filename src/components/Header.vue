<script setup></script>
<template>
	<header class="header">
		<img class="header__logo" src="../assets/img/logo.svg" alt="Logo" />
		<nav class="header__menu menu">
			<ul class="menu__list">
				<li class="menu__list-item"><a href="#">Home</a></li>
				<li class="menu__list-item"><a href="#">About us</a></li>
				<li class="menu__list-item"><a href="#">Frameworks</a></li>
				<li class="menu__list-item"><a href="#">Applications</a></li>
				<li class="menu__list-item"><a href="#">Contact us</a></li>
			</ul>
		</nav>
	</header>
</template>
<style scoped lang="scss">
$link: #3d3d3d;
.header {
	padding: 21px 77px 21px 123px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-family: 'Roboto', sans-serif;
	box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.25);
	background: #fff;
}

.menu {
	&__list {
		display: flex;
		gap: 15px;
		list-style: none;
	}

	&__list-item {
		& > a {
			text-decoration: none;
			color: $link;
			text-transform: uppercase;

			&:hover {
				color: #71a3ff;
			}
		}
	}
}
</style>
