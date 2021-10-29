export function useScore(props: any) {
    const score = toRef(props, 'score')
    const searchScore = `Query match: ${score.value.toFixed(4)}`
    return { searchScore }
}