# sURL

URL shortener.

## Development

Update .env with db connection URL. Update /prisma/schema.prisma to fit db.

Synchronize prisma schema with db schema:

```sh
$ npx prisma db push
```

Run prisma studio:

```sh
$ npx prisma studio
```

Run dev server:

```sh
$ pnpm dev
```

<hr>

Copyright ©2022 [Andrew X. Shah](https://github.com/kito0).<br>
[MIT](https://github.com/kito0/surl/blob/master/LICENSE) licensed.
