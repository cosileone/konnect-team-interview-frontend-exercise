import { useRoute, useRouter } from 'vue-router'

export default function useSearchParam(paramName: string) {
  const route = useRoute()
  const router = useRouter()

  const value = (): any => {
    return route.query[paramName] ?? ''
  }
  const setter = () => {
    return async (value: any) => {
      await router.push({
        path: route.path,
        query: {
          ...route.query,
          [paramName as string]: value,
        },
      })
    }
  }

  return [value(), setter()]
}
