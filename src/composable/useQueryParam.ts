// this is an example of useXxx function that we can reuse across components.
// it will return writable computeds that works like ref values
// but the values will be sync with the route query params
function useQueryParam() {
  const router = useRouter()
  const route = useRoute()

  // when the params match those value,
  // we don't set their value to the query params
  const defaultLimit = 10
  const defaultPage = 1
  const defaultSearch = ''
  const defaultSort = ''

  const searchTerm = computed({
    get: () => {
      let searchTermQuery: string

      // read "search" from the query params
      if (Array.isArray(route?.query?.search)) {
        searchTermQuery = route.query.search?.[0] ?? defaultSearch
      } else {
        searchTermQuery = route.query.search ?? defaultSearch
      }

      return searchTermQuery
    },
    set(value) {
      // update the route query params with our new "search" value.
      // we can use router.replace instead of router.push
      // to not write state to the browser history
      router.push({
        query: {
          search: value === defaultSearch ? undefined : value,
          sort: sort.value === defaultSort ? undefined : sort.value,
          limit: limit.value === defaultLimit ? undefined : limit.value,
          page: page.value === defaultPage ? undefined : page.value,
        },
      })
    },
  })

  const sort = computed({
    get: () => {
      let sortQuery: string

      // read "sort" from the query params
      if (Array.isArray(route?.query?.sort)) {
        sortQuery = route.query.sort?.[0] ?? defaultSort
      } else {
        sortQuery = route.query.sort ?? defaultSort
      }

      return sortQuery
    },
    set(value) {
      // update the route query params with our new "sort" value.
      // we can use router.replace instead of router.push
      // to not write state to the browser history
      router.push({
        query: {
          search: searchTerm.value === defaultSearch ? undefined : searchTerm.value,
          sort: value === defaultSort ? undefined : value,
          limit: limit.value === defaultLimit ? undefined : limit.value,
          page: page.value === defaultPage ? undefined : page.value,
        },
      })
    },
  })

  const limit = computed({
    get: () => {
      let limitQuery: number

      // read "limit" from the query params
      if (Array.isArray(route?.query?.limit)) {
        limitQuery = parseInt(route.query.limit[0] ?? `${defaultLimit}`)
      } else {
        limitQuery = parseInt(route.query.limit ?? `${defaultLimit}`)
      }

      if (Object.is(limitQuery, NaN)) {
        limitQuery = defaultLimit
      }

      return limitQuery
    },
    set(value) {
      // update the route query params with our new "limit" value.
      // we can use router.replace instead of router.push
      // to not write state to the browser history
      router.push({
        query: {
          search: searchTerm.value === defaultSearch ? undefined : searchTerm.value,
          sort: sort.value === defaultSort ? undefined : sort.value,
          limit: value === defaultLimit ? undefined : value,
          page: page.value === defaultPage ? undefined : page.value,
        },
      })
    },
  })

  const page = computed({
    get: () => {
      let pageQuery: number

      if (Array.isArray(route?.query?.page)) {
        pageQuery = parseInt(route.query.page[0] ?? `${defaultPage}`)
      } else {
        pageQuery = parseInt(route.query.page ?? `${defaultPage}`)
      }

      // read "page" from the query params
      if (Object.is(pageQuery, NaN)) {
        pageQuery = defaultPage
      }

      return pageQuery
    },
    set(value) {
      // update the route query params with our new "page" value.
      // we can use router.replace instead of router.push
      // to not write state to the browser history
      router.push({
        query: {
          search: searchTerm.value === defaultSearch ? undefined : searchTerm.value,
          sort: sort.value === defaultSort ? undefined : sort.value,
          limit: limit.value === defaultLimit ? undefined : limit.value,
          page: value === defaultPage ? undefined : value,
        },
      })
    },
  })

  return reactive({
    searchTerm,
    sort,
    limit,
    page,
  })
}

export default useQueryParam
