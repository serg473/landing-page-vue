<script setup>
const props = defineProps({
	modelValue: String,
	label: {
		type: String,
		default: '',
	},
	name: String,
	type: String,
	placeholder: {
		type: String,
		default: '',
	},
	errors: {
		type: Array,
		default: () => [],
	},
})
const emit = defineEmits(['update:modelValue'])
</script>
<template>
	<div class="feedback__form-item">
		<label :for="name">{{ label }}</label>
		<input
			:class="{ 'error-border': errors.length > 0 }"
			:value="modelValue"
			:id="name"
			:name="name"
			:type="type"
			:placeholder="placeholder"
			@input="emit('update:modelValue', $event.target.value)"
		/>
		<span class="error" v-for="error in errors" :key="error.$uid">{{
			error.$message
		}}</span>
	</div>
</template>
<style scoped lang="scss">
.feedback__form-item {
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
	.error-border {
		border: 1px solid red;
	}
}
.error {
	color: red;
	font-size: 16px;
}
</style>
