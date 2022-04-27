import getSlides from "./slides/getSlides.js"
import getWatches from "./watches/getWatches.js"
import filter from "./watches/filter.js"
import getFilterList from "./getFilterList/getFilterList.js"

const routes = (app) => {
    getSlides(app)
    
    getWatches(app)

    getFilterList(app)
    
    filter(app)


}

export default routes