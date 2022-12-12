import { i18n } from '../plugins/i18n'

export const visitTypes = [
  { value: 'gratuitous', label: i18n.global.t('Gratuitous') },
  { value: 'chargeable', label: i18n.global.t('Chargeable') },
]

export const donationTypes = [
  {
    id: 1,
    name: i18n.global.t('Whole_blood_donation'),
  },
  {
    id: 2,
    name: i18n.global.t('Plasmapheresis'),
  },
  {
    id: 3,
    name: i18n.global.t('Plateletpheresis'),
  },
]
