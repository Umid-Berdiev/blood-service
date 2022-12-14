// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

/// <reference types="unplugin-vue-router/client" />

import type {
  // type safe route locations
  RouteLocationTypedList,
  RouteLocationResolvedTypedList,
  RouteLocationNormalizedTypedList,
  RouteLocationNormalizedLoadedTypedList,
  RouteLocationAsString,
  RouteLocationAsRelativeTypedList,
  RouteLocationAsPathTypedList,

  // helper types
  // route definitions
  RouteRecordInfo,
  ParamValue,
  ParamValueOneOrMore,
  ParamValueZeroOrMore,
  ParamValueZeroOrOne,

  // vue-router extensions
  _RouterTyped,
  RouterLinkTyped,
  NavigationGuard,
  UseLinkFnTyped,

  // data fetching
  _DataLoader,
  _DefineLoaderOptions,
} from 'unplugin-vue-router'

declare module 'vue-router/auto/routes' {
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/[...all]': RouteRecordInfo<'/[...all]', '/:all(.*)', { all: ParamValue<true> }, { all: ParamValue<false> }>,
    '/app': RouteRecordInfo<'/app', '/app', Record<never, never>, Record<never, never>>,
    '/app/blood-sampling/journal-blood-&-components/': RouteRecordInfo<'/app/blood-sampling/journal-blood-&-components/', '/app/blood-sampling/journal-blood-&-components', Record<never, never>, Record<never, never>>,
    '/app/blood-sampling/list/': RouteRecordInfo<'/app/blood-sampling/list/', '/app/blood-sampling/list', Record<never, never>, Record<never, never>>,
    '/app/bloodborne-infections-laboratory/research-aimed-donations/': RouteRecordInfo<'/app/bloodborne-infections-laboratory/research-aimed-donations/', '/app/bloodborne-infections-laboratory/research-aimed-donations', Record<never, never>, Record<never, never>>,
    '/app/bloodborne-infections-laboratory/research-journal/': RouteRecordInfo<'/app/bloodborne-infections-laboratory/research-journal/', '/app/bloodborne-infections-laboratory/research-journal', Record<never, never>, Record<never, never>>,
    '/app/buck-laboratory/buck-control-sterility/': RouteRecordInfo<'/app/buck-laboratory/buck-control-sterility/', '/app/buck-laboratory/buck-control-sterility', Record<never, never>, Record<never, never>>,
    '/app/buck-laboratory/research-aimed-donations/': RouteRecordInfo<'/app/buck-laboratory/research-aimed-donations/', '/app/buck-laboratory/research-aimed-donations', Record<never, never>, Record<never, never>>,
    '/app/buck-laboratory/serological-research-journal/': RouteRecordInfo<'/app/buck-laboratory/serological-research-journal/', '/app/buck-laboratory/serological-research-journal', Record<never, never>, Record<never, never>>,
    '/app/buck-laboratory/supernatant-plasmas/': RouteRecordInfo<'/app/buck-laboratory/supernatant-plasmas/', '/app/buck-laboratory/supernatant-plasmas', Record<never, never>, Record<never, never>>,
    '/app/clinical-biochemical-laboratory/research-aimed-donations/': RouteRecordInfo<'/app/clinical-biochemical-laboratory/research-aimed-donations/', '/app/clinical-biochemical-laboratory/research-aimed-donations', Record<never, never>, Record<never, never>>,
    '/app/clinical-biochemical-laboratory/research-journal/': RouteRecordInfo<'/app/clinical-biochemical-laboratory/research-journal/', '/app/clinical-biochemical-laboratory/research-journal', Record<never, never>, Record<never, never>>,
    '/app/dashboard': RouteRecordInfo<'/app/dashboard', '/app/dashboard', Record<never, never>, Record<never, never>>,
    '/app/donations/containers/': RouteRecordInfo<'/app/donations/containers/', '/app/donations/containers', Record<never, never>, Record<never, never>>,
    '/app/donations/donors-for-donation/': RouteRecordInfo<'/app/donations/donors-for-donation/', '/app/donations/donors-for-donation', Record<never, never>, Record<never, never>>,
    '/app/forwarding/components-transferred-to-drugs-production/': RouteRecordInfo<'/app/forwarding/components-transferred-to-drugs-production/', '/app/forwarding/components-transferred-to-drugs-production', Record<never, never>, Record<never, never>>,
    '/app/forwarding/storage-transferred-products/': RouteRecordInfo<'/app/forwarding/storage-transferred-products/', '/app/forwarding/storage-transferred-products', Record<never, never>, Record<never, never>>,
    '/app/immunological-research-department/research-aimed-donations/': RouteRecordInfo<'/app/immunological-research-department/research-aimed-donations/', '/app/immunological-research-department/research-aimed-donations', Record<never, never>, Record<never, never>>,
    '/app/immunological-research-department/research-journal/': RouteRecordInfo<'/app/immunological-research-department/research-journal/', '/app/immunological-research-department/research-journal', Record<never, never>, Record<never, never>>,
    '/app/physician-therapist/donors-for-examination/': RouteRecordInfo<'/app/physician-therapist/donors-for-examination/', '/app/physician-therapist/donors-for-examination', Record<never, never>, Record<never, never>>,
    '/app/physician-therapist/donors-for-examination/[id]': RouteRecordInfo<'/app/physician-therapist/donors-for-examination/[id]', '/app/physician-therapist/donors-for-examination/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/app/physician-therapist/examined-donors-list/': RouteRecordInfo<'/app/physician-therapist/examined-donors-list/', '/app/physician-therapist/examined-donors-list', Record<never, never>, Record<never, never>>,
    '/app/physician-therapist/examined-donors-list/[id]': RouteRecordInfo<'/app/physician-therapist/examined-donors-list/[id]', '/app/physician-therapist/examined-donors-list/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/app/quality-control/inspected-components-log/': RouteRecordInfo<'/app/quality-control/inspected-components-log/', '/app/quality-control/inspected-components-log', Record<never, never>, Record<never, never>>,
    '/app/quality-control/received-components/': RouteRecordInfo<'/app/quality-control/received-components/', '/app/quality-control/received-components', Record<never, never>, Record<never, never>>,
    '/app/registration/donation-diverted-register/': RouteRecordInfo<'/app/registration/donation-diverted-register/', '/app/registration/donation-diverted-register', Record<never, never>, Record<never, never>>,
    '/app/registration/register-donors/': RouteRecordInfo<'/app/registration/register-donors/', '/app/registration/register-donors', Record<never, never>, Record<never, never>>,
    '/app/registration/unified-donor-register/': RouteRecordInfo<'/app/registration/unified-donor-register/', '/app/registration/unified-donor-register', Record<never, never>, Record<never, never>>,
    '/app/registration/unified-donor-register/[id]': RouteRecordInfo<'/app/registration/unified-donor-register/[id]', '/app/registration/unified-donor-register/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/app/roles/': RouteRecordInfo<'/app/roles/', '/app/roles', Record<never, never>, Record<never, never>>,
    '/app/roles/[id]/': RouteRecordInfo<'/app/roles/[id]/', '/app/roles/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/app/roles/[id]/permissions': RouteRecordInfo<'/app/roles/[id]/permissions', '/app/roles/:id/permissions', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/app/scrapping/components-to-be-scrapped/': RouteRecordInfo<'/app/scrapping/components-to-be-scrapped/', '/app/scrapping/components-to-be-scrapped', Record<never, never>, Record<never, never>>,
    '/app/scrapping/scrapped-components-log/': RouteRecordInfo<'/app/scrapping/scrapped-components-log/', '/app/scrapping/scrapped-components-log', Record<never, never>, Record<never, never>>,
    '/app/screening/donors-list-for-primary-screening/': RouteRecordInfo<'/app/screening/donors-list-for-primary-screening/', '/app/screening/donors-list-for-primary-screening', Record<never, never>, Record<never, never>>,
    '/app/screening/screening-passed-donors-list/': RouteRecordInfo<'/app/screening/screening-passed-donors-list/', '/app/screening/screening-passed-donors-list', Record<never, never>, Record<never, never>>,
    '/app/users/': RouteRecordInfo<'/app/users/', '/app/users', Record<never, never>, Record<never, never>>,
    '/app/users/[id]': RouteRecordInfo<'/app/users/[id]', '/app/users/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/auth': RouteRecordInfo<'/auth', '/auth', Record<never, never>, Record<never, never>>,
    '/auth/login': RouteRecordInfo<'/auth/login', '/auth/login', Record<never, never>, Record<never, never>>,
    '/auth/login-2': RouteRecordInfo<'/auth/login-2', '/auth/login-2', Record<never, never>, Record<never, never>>,
    '/auth/login-3': RouteRecordInfo<'/auth/login-3', '/auth/login-3', Record<never, never>, Record<never, never>>,
    '/auth/signup-1': RouteRecordInfo<'/auth/signup-1', '/auth/signup-1', Record<never, never>, Record<never, never>>,
    '/auth/signup-3': RouteRecordInfo<'/auth/signup-3', '/auth/signup-3', Record<never, never>, Record<never, never>>,
    '/error': RouteRecordInfo<'/error', '/error', Record<never, never>, Record<never, never>>,
  }
}

declare module 'vue-router/auto' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export type RouterTyped = _RouterTyped<RouteNamedMap>

  /**
   * Type safe version of `RouteLocationNormalized` (the type of `to` and `from` in navigation guards).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalized<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationNormalizedLoaded` (the return type of `useRoute()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalizedLoaded<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationResolved` (the returned route of `router.resolve()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationResolved<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationResolvedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocation` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocation<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationRaw` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationRaw<Name extends keyof RouteNamedMap = keyof RouteNamedMap> =
    | RouteLocationAsString<RouteNamedMap>
    | RouteLocationAsRelativeTypedList<RouteNamedMap>[Name]
    | RouteLocationAsPathTypedList<RouteNamedMap>[Name]

  /**
   * Generate a type safe params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParams<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['params']
  /**
   * Generate a type safe raw params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParamsRaw<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['paramsRaw']

  export function useRouter(): RouterTyped
  export function useRoute<Name extends keyof RouteNamedMap = keyof RouteNamedMap>(name?: Name): RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  export const useLink: UseLinkFnTyped<RouteNamedMap>

  export function onBeforeRouteLeave(guard: NavigationGuard<RouteNamedMap>): void
  export function onBeforeRouteUpdate(guard: NavigationGuard<RouteNamedMap>): void

  // Experimental Data Fetching

  export function defineLoader<
    P extends Promise<any>,
    Name extends keyof RouteNamedMap = keyof RouteNamedMap,
    isLazy extends boolean = false,
  >(
    name: Name,
    loader: (route: RouteLocationNormalizedLoaded<Name>) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>
  export function defineLoader<
    P extends Promise<any>,
    isLazy extends boolean = false,
  >(
    loader: (route: RouteLocationNormalizedLoaded) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>

  export {
    _definePage as definePage,
    _HasDataLoaderMeta as HasDataLoaderMeta,
    _setupDataFetchingGuard as setupDataFetchingGuard,
    _stopDataFetchingScope as stopDataFetchingScope,
  } from 'unplugin-vue-router/runtime'
}

declare module 'vue-router' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export interface TypesConfig {
    beforeRouteUpdate: NavigationGuard<RouteNamedMap>
    beforeRouteLeave: NavigationGuard<RouteNamedMap>

    $route: RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[keyof RouteNamedMap]
    $router: _RouterTyped<RouteNamedMap>

    RouterLink: RouterLinkTyped<RouteNamedMap>
  }
}
