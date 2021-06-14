import Router from "../Core/Router";
import Controllers from "../Controllers";

export default data => {
    const router = new Router(data);

    // Your endpoints go here.
    router.get("/api/example", Controllers.example);
    router.get("/api/root", Controllers.root);

    // If route doesn't exist, returns 404
    if (!router.success) return data.res.status(404).end();
}   
