import * as express from "express";

/**
 * radio
 */
export class Radio {
    constructor() {
        
    }
    public get (req: express.Request, res: express.Response) {
        res.json({radio:'89 a radio rock'});
    }
}