import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";

/**
 * / route
 *
 * @class User
 */
export class VoteRoute extends BaseRoute {

  /**
   * Create the routes.
   *
   * @class IndexRoute
   * @method create
   * @static
   */
  public static create(router: Router) {
    //log
    console.log("[VoteRoute::create] Creating uvtl route.");

    //add home page route
    router.get("/uvtl", (req: Request, res: Response, next: NextFunction) => {
      new VoteRoute().index(req, res, next);
    });
    router.post("/uvtl/:id/upvote", (req: Request, res: Response, next: NextFunction) => {
      new VoteRoute().doUpVote(req, res, next);
    });
    router.post("/uvtl/:id/downvote", (req: Request, res: Response, next: NextFunction) => {
      new VoteRoute().doDownVote(req, res, next);
    });
  }

  /**
   * Constructor
   *
   * @class IndexRoute
   * @constructor
   */
  constructor() {
    super();
  }
  /**
   * The home page route.
   *
   * @class IndexRoute
   * @method index
   * @param req {Request} The express Request object.
   * @param res {Response} The express Response object.
   * @next {NextFunction} Execute the next method.
   */
  public index(req: Request, res: Response, next: NextFunction) {
    if (req.statusCode !== 200) {
      next();
    }

    //set custom title
    //set message
    let options: Object = {
      "message": "Please Supply an Id"
    };

    //render template
    this.renderJsonResponse(res, 404, options);
  }

  /**
   * The home page route.
   *
   * @class IndexRoute
   * @method index
   * @param req {Request} The express Request object.
   * @param res {Response} The express Response object.
   * @next {NextFunction} Execute the next method.
   */
  public doUpVote(req: Request, res: Response, next: NextFunction) {
    if (req.statusCode !== 200) {
      next();
    }
    //set custom title
    //set message 

    let options: Object;
    if (Number(req.params.id)) {
      options = {
        "message": "called with number" + req.params.id
      };
    }
    else {

      options = {
        "message": "called with id " + req.params.id
      };


    }


    //render template
    this.renderJsonResponse(res, 404, options);
  }

  /**
   * The home page route.
   *
   * @class IndexRoute
   * @method index
   * @param req {Request} The express Request object.
   * @param res {Response} The express Response object.
   * @next {NextFunction} Execute the next method.
   */
  public doDownVote(req: Request, res: Response, next: NextFunction) {
    if (req.statusCode !== 200) {
      next();
    }

    //set custom title
    //set message
    let options: Object = {
      "message": "Please Supply an Id"
    };

    //render template
    this.renderJsonResponse(res, 404, options);
  }


}