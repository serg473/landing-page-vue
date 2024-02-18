<script setup>
import ApplicationsList from '@/components/ApplicationsList.vue'
import Button from '@/components/Button.vue'
import FrameworksList from '@/components/Frameworks/FrameworksList.vue'
import FrameworksNewsList from '@/components/Frameworks/FrameworksNewsList.vue'
import FormFeedback from '../components/FormFeedback.vue'
</script>
<template>
	<main class="main home">
		<div class="home__wallpaper wallpaper">
			<h2 class="wallpaper__title">Welcome to Test Page</h2>
			<h3 class="wallpaper__subtitle">Front-end developer</h3>
		</div>
		<div class="home__about about" id="about">
			<div class="container-content about__container">
				<div class="about__article">
					<h3 class="about__title">About us</h3>
					<p class="about__description">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset.
					</p>
					<div class="about__group-btn">
						<Button :isActive="true">Read more</Button>
						<Button>Contact us</Button>
					</div>
				</div>
				<div class="about__preview">
					<img src="../assets/img/about.webp" alt="About" />
				</div>
			</div>
		</div>
		<div class="home__frameworks frameworks" id="frameworks">
			<h3 class="frameworks__title">Frameworks</h3>
			<div class="container-content">
				<FrameworksList />
			</div>
		</div>
		<div class="home__news-frameworks news">
			<FrameworksNewsList />
		</div>
		<div class="home__applications applications" id="applications">
			<h3 class="applications__title">Applications</h3>
			<div class="container-content">
				<ApplicationsList />
			</div>
		</div>
		<div class="home__contact contact" id="contact">
			<h3 class="contact__title">Contact Us</h3>
			<FormFeedback />
		</div>
	</main>
</template>
<style lang="scss">
.home {
	&__wallpaper {
		padding: 262px 0;
		background-image: url('../assets/img/welcome-wallpaper.webp');
		background-size: cover;
		background-repeat: no-repeat;
		text-align: center;
		text-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.15);
		color: #ffffff;
	}
	&__news-frameworks {
		margin-top: 61px;
	}
	&__applications {
		margin-top: 44px;
	}
	&__contact {
		padding: 44px 0 59px 0;
		margin-top: 56px;
		background-color: #ffffff;
	}
}
.wallpaper {
	&__title {
		font-weight: 700;
		font-size: 70px;
		line-height: 87.5px;
	}
	&__subtitle {
		font-weight: 400;
		font-size: 36px;
		line-height: 45px;
	}
}
.about {
	padding: 90px 0;
	background-image: url('../assets/img/2-section-wallpaper.webp');
	background-repeat: no-repeat;
	background-size: cover;
	font-weight: 400;
	margin-bottom: 44px;
	&__container {
		display: flex;
		gap: 40px;
	}
	&__title {
		font-weight: bold;
		font-size: 28px;
		line-height: 35px;
	}
	&__description {
		margin: 16px 0;
		color: #808080;
		line-height: 26px;
	}
	&__group-btn {
		display: flex;
		gap: 23px;
	}
}
.frameworks {
	background: #f5f7fa;
	&__title {
		font-weight: bold;
		font-size: 28px;
		text-align: center;
		color: #3d3d3d;
		margin-bottom: 45px;
	}
}
.applications {
	&__title {
		font-size: 28px;
		font-weight: bold;
		color: #3d3d3d;
		text-align: center;
		margin-bottom: 45px;
	}
}
.contact {
	&__title {
		font-weight: 700;
		font-size: 28px;
		text-align: center;
		color: #3d3d3d;
	}
}
</style>
