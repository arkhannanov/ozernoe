"use client"
import React, { FC, useState, DragEvent, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { IMaskInput } from 'react-imask';
import { Button, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import styles from "./styles.module.scss"
import clsx from 'clsx';
import CommonButton from '../CommonButton/CommonButton';


const ApplicationForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		formState,
		control,
		setValue,
	} = useForm({
		mode: 'onSubmit',
		defaultValues: {
			name: '',
			problem: '',
			description: '',
			flat: '',
			phone: '',
			message: '',
			email: '',
		},
	});
	const [drag, setDrag] = useState(false);
	const [fileError, setFileError] = useState<string | null>(null);
	const [response, setResponse] = useState<{
		name: string;
		problem: string;
		flat: string;
		description: string;
		phone: string;
	}>({
		name: '',
		problem: '',
		description: '',
		flat: '',
		phone: '',
	});;


	const onSubmit = async (data: { name: string; flat: string; phone: string; description: string }) => {
		const formData = new FormData();
		formData.append('name', data.name);
		formData.append('phone', data.phone);
		formData.append('description', data.description);

	};

	useEffect(() => {
		setValue('message', response.description);
		setValue('flat', response.flat);
		setValue('name', response.name);
		setValue('phone', response.phone);
	}, [response, setValue]);

	return (
		<div className={styles['wrapper']}>
			<form onSubmit={handleSubmit(onSubmit)} className={styles['form-wrapper']}>
		
					<div className={styles['form-item']}>
						<p>Фамилия Имя Отчество</p>
						<div>
							<input
								{...register('name', { required: 'Имя должно быть заполнено' })}
								placeholder="Имя"
								className={styles[errors.name ? 'form-item_red' : '']}
								value={response.name}
								onChange={e => setResponse({ ...response, name: e.target.value })}
							/>
							{errors.name && (
								<span className={styles['form-item_red-text']}>{errors.name.message}</span>
							)}
						</div>
					</div>
					<div className={styles['form-item']}>
						<p>Ваша проблема</p>
						<div>
							<select
								{...register('problem', { required: 'Имя должно быть заполнено' })}
								placeholder="Проблема"
								className={styles[errors.name ? 'form-item_red' : '']}
								value={response.problem}
								onChange={e => setResponse({ ...response, problem: e.target.value })}
							>
								<option value="Залило">Залило</option>
								<option value="Затопило">Затопило</option>
								<option value="Заколебало">Заколебало</option>

							</select>
							{errors.name && (
								<span className={styles['form-item_red-text']}>{errors.problem?.message}</span>
							)}
						</div>
					</div>
					<div className={styles['form-item']}>
						<p>Кратко опишите проблему</p>
						<div>
							<textarea
								{...register('description', {
									required: 'Кратко опишите проблему',
									max: 512,
								})}
								placeholder=""
								className={styles[errors.description ? 'form-item_red' : '']}
								value={response.description}
								onChange={e => setResponse({ ...response, description: e.target.value })}
							/>
							{errors.description?.type === 'required' && (
								<span className={styles['form-item_red-text']}>{errors.description.message}</span>
							)}
							{errors.description?.type === 'max' && (
								<span className={styles['form-item_red-text']}>
									Сообщение работадателю не должно превышить 512 символов
								</span>
							)}
						</div>

					</div>
					<div className={styles['bottom-fields-wrapper']}>
						<div className={styles['form-item']}>
							<p>Номер квартиры</p>
							<div>
								<input
									{...register('flat', {
										required: 'Номер квартиры должен быть заполнен'
									})}
									placeholder="Номер квартиры"
									className={styles[errors.flat ? 'form-item_red' : '']}
									value={response.flat}
									onChange={e => setResponse({ ...response, flat: e.target.value })}
								/>
								{errors.flat?.type === 'required' && (
									<span className={styles['form-item_red-text']}>{errors.flat.message}</span>
								)}
							</div>
						</div>

						<div className={clsx(styles['form-item'], styles['last-item'])}>
							<p>Телефон</p>
							<div>
								<IMaskInput
									{...register('phone', {
										required: 'Телефон должен быть заполнен',
										pattern: /^\+7\(\d{3}\)\d{3}(-\d{2}){2}$/,
									})}
									mask="+{7}(000)000-00-00"
									placeholder="+7(999)999-99-99"
									className={styles[errors.phone ? 'form-item_red' : '']}
									value={response.phone}
									//@ts-ignore
									onChange={e => setResponse({ ...response, phone: e.target.value })}
								/>

								{errors.phone?.type === 'required' && (
									<span className={styles['form-item_red-text']}>{errors.phone.message}</span>
								)}
								{errors.phone?.type === 'pattern' && (
									<span className={styles['form-item_red-text']}>
										Убедитесь, что телефон написан правильно
									</span>
								)}
							</div>
						</div>
					</div>
					<Button
						classes={{
							root: clsx(
								styles['submit-btn']
							),
						}}
						type='submit'
					>
						Отправить заявку
					</Button>
			</form>
		</div>
	);
};

export default ApplicationForm;
