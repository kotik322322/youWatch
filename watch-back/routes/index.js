import getSlides from "./slides/getSlides.js"
import getWatches from "./watches/getWatches.js"
import getWatchesByName from "./watches/filterByName.js"

const routes = (app) => {
    getSlides(app)
    
    getWatches(app)
    
    getWatchesByName(app)


}

export default routes