import getSlides from "./slides/getSlides.js"
import getWatches from "./watches/getWatches.js"
import filter from "./watches/filter.js"
import getFilterList from "./getFilterList/getFilterList.js"
import getImages from "./getImages/getImages.js"
import getCardInfo from "./getCardInfo/getCardInfo.js"
import getBlogItems from "./blog/getBlogItems.js"
import getBlogItemById from "./blog/getBlogItemById.js"

const routes = (app) => {
    getSlides(app)
    
    getWatches(app)

    getFilterList(app)
    
    filter(app)
    
    getCardInfo(app)

    getImages(app)

    getBlogItems(app)

    getBlogItemById(app)


}

export default routes