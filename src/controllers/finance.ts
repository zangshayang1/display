import { Request, Response } from "express";

import * as httpm from "typed-rest-client/HttpClient";

/**
 * GET /finance
 *
 */
export let stock = async(req: Request, res: Response) => {

  const url: string = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&outputsize=full&apikey=demo";
  const _http: httpm.HttpClient = new httpm.HttpClient("stock");
  const result: httpm.HttpClientResponse = await _http.get(url);
  const body: string = await result.readBody();
  // const obj: any = JSON.parse(body);

  res.render("stock", {
                  pass: {
                    data: 1,
                    title: "title",
                    result: body,
                  }
            });
};
