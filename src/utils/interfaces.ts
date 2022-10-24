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
  last_name: string
  first_name: string
  father_name: string
  birth_date: Date
  sex: 'male' | 'female'
  phone_number: string
  phone_work: string
  phone_home: string
  passport_series: string
  passport_number: string
  issued_by: string
  when_issued: Date
  region_id: number
  region: RegionInterface
  district_id: number
  district: DistrictInterface
  work_study_place: string
  email: string
}

export interface TabHeader {
  label: string
  value: string
  icon: string
}
