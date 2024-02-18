<script setup>
import { useVuelidate } from '@vuelidate/core'
import { email, minLength, numeric, required } from '@vuelidate/validators'
import { reactive } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import Button from '../components/Button.vue'
import BaseInput from './BaseInput.vue'

const validations = {
	firstName: { required, minLength: minLength(3) },
	lastName: { required, minLength: minLength(3) },
	company: { required, minLength: minLength(3) },
	email: { required, minLength: minLength(3), email },
	job: { required, minLength: minLength(3) },
	country: { required, minLength: minLength(3) },
	state: { required, minLength: minLength(3) },
	zip: { required, numeric, minLength: minLength(1) },
}
const form = reactive({
	firstName: '',
	lastName: '',
	company: '',
	email: '',
	job: '',
	country: '',
	state: '',
	zip: '',
})
const resetFields = () => {
	form.firstName = ''
	form.lastName = ''
	form.company = ''
	form.email = ''
	form.job = ''
	form.country = ''
	form.state = ''
	form.zip = ''
}
const v$ = useVuelidate(validations, form)
const submit = async () => {
	const valid = await v$.value.$validate()
	if (valid) {
		toast('Data sent successfully!', {
			type: 'success',
			position: 'top-center',
			autoClose: 4000,
			transition: 'zoom',
			dangerouslyHTMLString: true,
		})
		await resetFields()
	}
}
</script>
<template>
	<div class="feedback">
		<form @submit.prevent class="feedback__form">
			<BaseInput
				name="firstName"
				v-model="form.firstName"
				type="text"
				label="First Name *"
				placeholder="Enter your First name"
				:errors="v$.firstName.$errors"
			/>

			<BaseInput
				name="lastName"
				v-model="form.lastName"
				type="text"
				label="Last Name *"
				placeholder="Enter your Last name"
				:errors="v$.lastName.$errors"
			/>
			<BaseInput
				name="company"
				v-model="form.company"
				type="text"
				label="Company *"
				placeholder="Enter your company"
				:errors="v$.company.$errors"
			/>
			<BaseInput
				name="email"
				v-model="form.email"
				type="text"
				label="Email *"
				placeholder="Enter your email"
				:errors="v$.email.$errors"
			/>

			<BaseInput
				name="job"
				v-model="form.job"
				type="text"
				label="Job Title *"
				placeholder="Enter Job Title"
				:errors="v$.job.$errors"
			/>
			<BaseInput
				name="country"
				v-model="form.country"
				type="text"
				label="Country *"
				placeholder="Enter Your Country"
				:errors="v$.country.$errors"
			/>
			<BaseInput
				name="state"
				v-model="form.state"
				type="text"
				label="State *"
				placeholder="Enter Your State"
				:errors="v$.state.$errors"
			/>
			<BaseInput
				name="zip"
				v-model="form.zip"
				type="text"
				label="Zip code *"
				placeholder="Enter Your Zip Code"
				:errors="v$.zip.$errors"
			/>
			<div class="feedback__submit">
				<Button @click="submit" :isActive="true"> Submit </Button>
			</div>
		</form>
	</div>
</template>
<style lang="scss">
.feedback {
	padding: 0 139px;
	margin-top: 44px;
	@media screen and (max-width: 970px) {
		padding: 0 55px;
	}
	@media screen and (max-width: 640px) {
		padding: 0 15px;
		margin-top: 25px;
	}
	&__form {
		width: 1155px;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 15px 13.95px;
		@media screen and (max-width: 1439px) {
			width: auto;
			justify-content: flex-start;
			gap: 15px 26.95px;
		}
		@media screen and (max-width: 1200px) {
			width: auto;
			justify-content: flex-start;
			gap: 15px 95.95px;
		}
		@media screen and (max-width: 970px) {
			gap: 25px 95.95px;
		}
	}
	&__submit {
		margin-top: 26px;
		@media screen and (max-width: 1200px) {
			width: 100%;
		}
	}
	.feedback__submit {
		@media screen and (max-width: 1439px) {
			margin-top: 30px;
		}
		@media screen and (max-width: 640px) {
			margin-top: 0;
		}
		button {
			@media screen and (max-width: 1439px) {
				width: 280px;
			}
			@media screen and (max-width: 970px) {
				width: 100%;
			}
		}
	}
}
</style>
