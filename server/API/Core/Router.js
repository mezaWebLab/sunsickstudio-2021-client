export default class Router {
    constructor(data) {
        this.trace = [];
        this.req = data.req;
        this.res = data.res;
        this.success = false;
    }

    get(route, controller) {
        this.routeRequest("GET", route, controller);
    }

    post(route, controller) {
        this.routeRequest("POST", route, controller);
    }

    put(route, controller) {
        this.routeRequest("PUT", route, controller);
    }

    delete(route, controller) {
        this.routeRequest("DELETE", route, controller);
    }

    routeRequest(method, route, controller) {
        if (typeof controller !== "function") return this.res.status(500).end(); 
        if (!this.success) this.trace.push({ method, route, controller });
        if (route === this.req.url && this.req.method === method) {
            this.success = true;
            controller(this.req, this.res);
        }
    }
}