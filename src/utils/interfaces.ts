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
  id: number
  pinfl: number | string
  patient_category_id: number | null
  last_name: string
  first_name: string
  father_name: string
  birth_date: string
  gender: 'male' | 'female'
  phone_number: string
  phone_work: string
  phone_home: string
  passport_series: string
  passport_number: string
  issued_by: string
  when_issued: string
  region_id: number | null
  region?: RegionInterface
  district_id: number | null
  district?: DistrictInterface
  address: string
  work_study_place: string
  avatar: string
  email: string
  created_at: string
  last_visit: PatientVisitCardInterface
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

export interface HemotransmissiveLaboratoryFormInterface {
  date_analysis: string
  hbsag?: boolean
  hbsag_test_system?: string
  hiv?: boolean
  hiv_test_system?: string
  antihcv?: boolean
  antihcv_test_system?: string
  rw?: boolean
  rw_test_system?: string
  hemolysis?: boolean
  chilez?: boolean
}

export interface BloodSampleInterface {
  date: string
  hemotransmissible_date: string
  chemical_date: string
}

export interface PatientVisitCardInterface {
  id: number
  patient_id: number | string | null
  visit_type: PatientVisitType
  visit_status_id: number
  stage: string
  directed_by: PatientDirectorType
  medical_organization_id: object | null
  public_organization: string | null
  personalized_donation: string
  mobile_team: string
  is_personalized_donation: boolean
  is_mobile_team: boolean
  donation_type_id: number | null
  immunization_id: number | null
  donation_code: number | null
  primary_screening_result?: PrimaryScreeningFormInterface
  questionnaire: { id: number; visit_id: number } | null
  blood_sample: BloodSampleInterface
}

export interface ApiLinkInterface {
  url: null | string
  label: string
  active: boolean
}

export interface ApiPaginationInterface {
  total: number
  count: number
  per_page: number
  current_page: number
  total_pages: number
}

export interface ApiDataInterface<DataType> {
  data: DataType[]
  pagination: ApiPaginationInterface
}

type WithdrawalType = 'permanent' | 'temporary'

export interface WithdrawalFormInterface {
  type: WithdrawalType
  reason_text: string
  start_date: string
  end_date: string
  source: string
  created_by?: string
}

export interface BloodType {
  id?: number | null
  label: string
  value: string
}

export interface PrimaryScreeningFormInterface {
  date: string
  blood_type_id: number | null
  blood_type?: BloodType
  type: string
  value: number | null
  created_by?: string
}

export interface MedicalQuestionnaireFormInterface {
  age?: number
  profession?: string
  last_doctor_visit_reason?: string
  date_input1?: string
  date_input2?: string
  date_input3?: string
  checkbox1?: boolean
  checkbox2?: boolean
  checkbox3?: boolean
  checkbox4?: boolean
  checkbox5?: boolean
  checkbox6?: boolean
  checkbox7?: boolean
  checkbox8?: boolean
  checkbox9?: boolean
  checkbox10?: boolean
  checkbox11?: boolean
  checkbox12?: boolean
  checkbox13?: boolean
  checkbox14?: boolean
  checkbox15?: boolean
  checkbox16?: boolean
  checkbox17?: boolean
  checkbox18?: boolean
  checkbox19?: boolean
  checkbox20?: boolean
  checkbox21?: boolean
  checkbox22?: boolean
  checkbox23?: boolean
  checkbox24?: boolean
  checkbox25?: boolean
  checkbox26?: boolean
  checkbox27?: boolean
  checkbox28?: boolean
  checkbox29?: boolean
  textarea1?: string
}

export interface ProductInterface {
  id?: number
  donation_date: string
  donation_code: string
  donation_type: string
  blood_type: string
  visit_type: string
  rh_factor: string
  component_name: string
  dose: string
  quantity: string
  come_from: string
  personalized_donation: string
  expiry_date: string
  cryoprecipitate_quantities: string
  supernatant_plasma_amount: string
  plasma_sample_for_sterility_control: string
}

export interface SerologicalResearchFormInterface {
  blood_samples_taken_date: string
  analysis_date: string
  reaction_hendelson_brutsellez: boolean
  anti_staphylococcal_antibody_titer: string
  gemoliz?: boolean
  hilez?: boolean
}

export interface DonationContainerInterface {
  id?: number | null
  name: string
  name_lat: string
  name_cyr: string
  series: string | number
  count_hemopreservative: number | null
  hemopreservative: string
  expire_date: string
  expire_days: number | null
}

export interface ReagentInterface {
  name: string
  unit: string
  min_value: number | null
  max_value: number | null
}
