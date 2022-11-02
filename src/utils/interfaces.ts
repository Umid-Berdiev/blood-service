export interface PaginationInterface {
  current_page: number
  per_page: number
  total: number
  total_pages: number
  search?: string
  sort?: string
}

export interface DefaultDataInterface {
  pagination: PaginationInterface
  result: []
}

export interface UserInterface {
  id: number
  name: string
  initials: string
  location: string
  pic: string
  badge: string
  position: string
  bio: string
}

export interface PermissionMethod {
  id: number
  method: string
  value: number
}

export interface PermissionData {
  label: string
  value: string | number
  methods?: PermissionMethod[]
}

export interface RoleData {
  id?: number
  name: {
    uz: string
    ru: string
    en: string
  }
  department: {
    uz: string
    ru: string
    en: string
  }
}

export interface StatusData {
  color: string
  description: string
  id: number
  name: string
  type: string
}

export interface UserData {
  avatar: string
  email: string
  first_name: string
  last_name: string
  username: string
  department?: string
  id?: number
  is_employee?: boolean
  name?: string
  role_id?: number
  role?: RoleData
}

export interface SearchErrorInterface {
  lastname: string
  firstname: string
  middlename: string
  passpordId: string
}

export interface RegionInterface {
  name: {
    uz: string
    ru: string
    en: string
  }
  soato: number
}
export interface DistrictInterface {
  name: {
    uz: string
    ru: string
    en: string
  }
  soato: number
  region_id: number
}

export interface PatientInterface {
  id?: number
  pinfl: number | string
  patient_category_id: number | null
  last_name: string
  first_name: string
  father_name: string
  birth_date: Date
  gender: 'male' | 'female'
  phone_number: string
  phone_work: string
  phone_home: string
  passport_series: string
  passport_number: string
  issued_by: string
  when_issued: Date
  region_id: number | null
  region?: RegionInterface
  district_id: number | null
  district?: DistrictInterface
  address: string
  work_study_place: string
  avatar: string
  email: string
}

export interface TabHeader {
  label: string
  value: string
  icon: string
  to?: string
}

export type PatientVisitType = 'gratuitous' | 'chargeable'

export type PatientDirectorType =
  | 'medical_organization'
  | 'public_organization'
  | 'independently'

export interface PatientVisitCardInterface {
  patient_id: number | string | null
  visit_type: PatientVisitType
  directed_by: PatientDirectorType
  medical_organization_id: object | null
  public_organization: string | null
  personalized_donation: string
  mobile_team: string
  is_personalized_donation: boolean
  is_mobile_team: boolean
}

export interface ApiLinkInterface {
  url: null | string
  label: string
  active: boolean
}

export interface ApiDataInterface {
  data: []
  current_page: number
  per_page: number
  total: number
  first_page_url?: string
  from?: number
  last_page?: number
  last_page_url?: string
  links?: ApiLinkInterface[]
  next_page_url?: string
  path?: string
  prev_page_url?: null | string
  to?: number
}

type WithdrawalType = 'permanent' | 'temporary'

export interface WithdrawalFormInterface {
  type: WithdrawalType
  reason: string
  start_date: string
  end_date: string
  source: string
}

export interface MedicalQuestionnaireFormInterface {
  age: number
  profession: string
  last_donated_at: string
  last_visited_at: string
  last_visited_reason: string
  is_pregnant: boolean
  in_6_month_had_birth_miscarriages: boolean
  do_you_breastfeed: boolean
  is_feeling_well: boolean
  have_chronic_diseases: boolean
  in_last_week_have_medicines: boolean
  had_hepatitis_brucellosis: boolean
  had_doctor_told_not_donate: boolean
  in_last_2_week_had_dental_procedures: boolean
  in_last_6_month_had_travel_to_foreign_countries: boolean
}
