// Vue
const app = Vue.createApp({
    data(){
        return {
            thumbnails: [],
            isVisible: false,
            selectedThumbnailId: undefined,
            isThumbnailLoaded: false,
            thumbnailHeight: 0,
        }
    },
    watch: {
        selectedThumbnailId(){
            this.isThumbnailLoaded = false
        }
    },
    computed: {
        currentThumbnail(){
            return this.thumbnails.find(elem => elem.id === this.selectedThumbnailId)
        },
        containerStyle(){
            return {
                height: this.thumbnailHeight + "px"
            }
        },
        currentThumbnailId(){
            return this.thumbnails.findIndex(elem => elem.id === this.selectedThumbnailId)
        },
        nextThumbnail(){
            const next = this.currentThumbnailId +1
            return this.thumbnails[next > this.thumbnails.length -1 ? 0 : next]
        },
        prevThumbnail(){
            const prev = this.currentThumbnailId -1
            return this.thumbnails[prev < 0 ? this.thumbnails.length -1 : prev]
        }
    },
    methods: {
        openModal: function(thumb){
            this.isVisible = true
            this.selectedThumbnailId = thumb.id
        },
        closeModal: function(){
            this.isVisible = false
            this.selectedThumbnailId = undefined
        },
        onLoad: function(event){
            this.isThumbnailLoaded = true
            this.thumbnailHeight = event.target.naturalHeight > 300
                ? 300
                : event.target.naturalHeight
        },
        onClickNext: function(){
            this.selectedThumbnailId = this.nextThumbnail.id
        },
        onClickPrev: function(){
            this.selectedThumbnailId = this.prevThumbnail.id
        }
    },
})
app.mount("#app")