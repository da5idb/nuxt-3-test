import { Series } from '../model/show.model';
export function useApi<Type>(getResults: (query: string) => Promise<Type>) {
    const query = ref('')
    const result = ref<Type>()
    const loading = ref(false)
    const error = ref(false)

    const callApi = async() => {
        error.value = false
        loading.value = true
        try {
            result.value = await getResults(query.value)
        } catch (e) {
            console.log(e)
            error.value = true
        } finally {
            loading.value = false
        }
    }

    return { query, result, callApi, loading, error }
}
