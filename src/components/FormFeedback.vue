<script setup>
import Button from '../components/Button.vue'
</script>
<template>
	<div class="feedback">
		<form class="feedback__form">
			<div class="feedback__form-item">
				<label for="firstName">First Name *</label>
				<input
					id="firstName"
					name="firstName"
					type="text"
					placeholder="Enter your First name"
				/>
			</div>
			<div class="feedback__form-item">
				<label for="lastName">Last Name *</label>
				<input
					id="lastName"
					name="lastName"
					type="text"
					placeholder="Enter your Last name"
				/>
			</div>

			<div class="feedback__form-item">
				<label for="company">Company *</label>
				<input
					id="company"
					name="company"
					type="text"
					placeholder="Enter your company"
				/>
			</div>
			<div class="feedback__form-item">
				<label for="email">Email *</label>
				<input
					id="email"
					name="email"
					type="text"
					placeholder="Enter Your Email"
				/>
			</div>

			<div class="feedback__form-item">
				<label for="job">Job Title *</label>
				<input id="job" name="job" type="text" placeholder="Enter job title" />
			</div>

			<div class="feedback__form-item">
				<label for="country">Country</label>
				<input
					id="country"
					name="country"
					type="text"
					placeholder="Enter Your Country"
				/>
			</div>

			<div class="feedback__form-item">
				<label for="state">State *</label>
				<input
					id="state"
					name="state"
					type="text"
					placeholder="Enter your State"
				/>
			</div>

			<div class="feedback__form-item">
				<label for="zip">Zip code *</label>
				<input
					id="zip"
					name="zip"
					type="text"
					placeholder="Enter Your Zip Code"
				/>
			</div>
			<div class="feedback__submit">
				<Button isActive="true"> Submit </Button>
			</div>
		</form>
	</div>
</template>
<style lang="scss">
.feedback {
	padding: 0 139px;
	margin-top: 44px;
	&__form {
		width: 1155px;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 15px 13.95px;
	}
	&__form-item {
		display: flex;
		flex-direction: column;
		width: 278px;
		gap: 6px;
		label {
			color: #3d3d3d;
			line-height: 24px;
		}
		input {
			padding: 9px 31px 9px 11px;
			border-radius: 10px;
			background: #f8f8f8;
			line-height: 20px;
			width: 100%;
			height: 40px;
			border: none;
			font-size: 16px;
			font-family: inherit;
			&::placeholder {
				color: #c4c4c4;
			}
		}
	}
	&__submit {
		margin-top: 26px;
	}
}
</style>
