import axios, { AxiosError } from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { Notyf } from 'notyf';
import { BASEURL } from './config';
import { Status } from './interface';
import 'notyf/notyf.min.css';

// eslint-disable-next-line import/prefer-default-export
export const fetchDataByDatesRange = async (
	from: string,
	to: string,
	setStatus: Dispatch<SetStateAction<Status[]>>
) => {
	try {
		if (!from || !to) throw new Error('Please enter full date');
		if (from >= to) throw new Error("Your 'from' input must be earlier tham the 'to' one");
		const { data } = await axios.get(`${BASEURL}/daily/getByRange?from=${from}&to=${to}`);
		setStatus(data);
	} catch (error) {
		const err = error as AxiosError;
		const notyf = new Notyf();
		if (err.response) notyf.error(err.response?.data);
		else if (err.message) notyf.error(err.message);
		else notyf.error('Error occured');
	}
};
