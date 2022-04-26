import getSlides from "./slides/getSlides.js"
import getWatches from "./watches/getWatches.js"
import filter from "./watches/filter.js"

const routes = (app) => {
    getSlides(app)
    
    getWatches(app)
    
    filter(app)


}

export default routes