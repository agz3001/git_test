// Vue
const app = Vue.createApp({
    setup(){
        const selectedIndex = Vue.ref(0)
        const imageTransitionName = Vue.ref("prev")
        const items = Vue.ref([
            {
                id: 1,
                src: "https://placehold.jp/300x300.png"
            },
            {
                id: 2,
                src: "https://placehold.jp/3d4070/ffffff/300x200.png"
            },
            {
                id: 3,
                src: "https://placehold.jp/b32020/ffffff/300x400.png"
            }
        ])

        // computed
        const target = () => {
            return items.value[selectedIndex]
        }
        const lastIndex = () => {
            return items.value.length -1
        }
        // methods
        const onClickPager = (index) => {
            selectedIndex.value = index
            imageTransitionName.value = selectedIndex > index ? "next" : "prev"
        }
        const onClickNext = () => {
            selectedIndex.value = selectedIndex > lastIndex ? 0 : selectedIndex.value +1
            imageTransitionName.value = "next"
        }
        const onClickPrev = () => {
            selectedIndex.value = selectedIndex < 0 ? lastIndex : selectedIndex -1
            imageTransitionName.value = "prev"
        }

        return {
            selectedIndex,
            imageTransitionName,
            items,
            target,
            lastIndex,
            onClickPager,
            onClickNext,
            onClickPrev
        }
    }
})
app.mount("#app")