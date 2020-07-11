import express from 'express';
const request = require('request');

const PORT = 8080;
const app: express.Application = express();

const post = async (uri: string, body: any): Promise<void> => {
  const options = {
    uri,
    form: body,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  return new Promise((resolve: any, reject: any) => {
    request.post(options, (error: Error) => {
      if (error) {
        console.error(error);
        reject();
      }
      console.log(`HttpService: Post request made to: ${uri}`);
      resolve();
    });
  });
};

async function main() {
  app.get('/hello', async (_req: express.Request, res: express.Response) => {
    const data = await post('https://checked-api.herokuapp.com/api/users/create', {username: 'cors', password: 'ffs'});
    res.send(data);
  });
  app.listen(PORT, () => console.log(`API listening on port ${PORT}`));
} main();