import { rest } from 'msw'
import { dataBaits } from '../data/dataBaits'
import { dataCatageory } from '../data/dataCategory'
export const handlers = [
    rest.get('http://localhost:5137/categorys', (req, res, ctx) => {

        return res(
            ctx.status(200),
            ctx.json(dataCatageory),
        )
    }),
    rest.get('http://localhost:5137/baits', (req, res, ctx) => {

        return res(
            ctx.status(200),
            ctx.json(dataBaits),
        )
    }),
    rest.get('http://localhost:5137/baits/:id', (req, res, ctx) => {

        return res(
            ctx.status(200),
            ctx.json(dataBaits.find((b) => b.id === Number(req.params.id))),
        )
    })
]