import getStorage from "./storage.js";

(async () => {
    await getStorage().teardown()
    await getStorage().setup()
})().catch(err => console.log(err.stack))

import './api.js'
