import {  takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    
    const {  name, surname, email, address, city, district, whatsapp, doc} = payload.data;

    const profile = Object.assign(
      { name, surname, email, address, city, district, whatsapp, doc },
    );

    const response = yield call(api.put, 'users', profile);

    toast.success('Perfil atualizado com sucesso');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar perfil.');
    yield put(updateProfileFailure());
    
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
]);
