// @ts-ignore
/* eslint-disable */
import axios from '@/utils/axios';
import { ip, ip3 } from '@/utils/ip';
import { request } from 'umi';

export async function getDataTinTuc(options?: { [key: string]: any }) {
  return request<IRecordTinTuc.RootObject>(`${ip}/odoo-user-service/tin-tuc/me/pageable`, {
    method: 'GET',
    params: { page: 1, limit: 20 },
    ...(options || {}),
  });
}

export async function getInfo() {
  return axios.get(`${ip3}/odoo-user/me/profile`);
}

export async function putInfo(payload: Login.Profile) {
  return axios.put(`${ip3}/odoo-user/me/profile`, payload);
}

export async function getInfoAdmin() {
  return axios.get(`${ip3}/user/me`);
}

export async function login(payload: { login?: string; password?: string }) {
  return axios.post(`${ip3}/odoo-auth/login/web`, payload);
}

export async function adminlogin(payload: { login?: string; password?: string }) {
  return axios.post(`${ip3}/auth/login/web`, payload);
}

export async function changePassword(payload: { oldPassword: string; newPassword: string }) {
  return axios.post(`${ip3}/odoo-user/me/change/password`, payload);
}
