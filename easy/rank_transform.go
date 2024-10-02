import "sort"

func arrayRankTransform(arr []int) []int {
	rank_map := make(map[int]int)
	sorted := append([]int(nil), arr...)
	sort.Ints(sorted)

	rank := 1
	for _, num := range sorted {
		if _, exists := rank_map[num]; !exists {
			rank_map[num] = rank
			rank++
		}
	}

	ranks := make([]int, len(arr))
	for i, x := range arr {
		ranks[i] = rank_map[x]
	}
	return ranks
}