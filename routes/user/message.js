import Router from 'koa-router';
import db from '../../db/db';

const router = new Router();

router.get('/notes', async (ctx) => {
    ctx.response.body = db.notes;
});

router.post('/notes', async (ctx) => {
    db.add(ctx.request.body);
    ctx.response.status = 204;
});

router.delete('/notes/:id', async (ctx) => {
    console.log(ctx.params.id);

    db.delete(ctx.params.id);
    ctx.response.status = 204;
});

export default router;
