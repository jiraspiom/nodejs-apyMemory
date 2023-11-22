npm init -y
npm i typescript @types/node -D

npx tsc --init
npx eslint --init

npx prisma init --datasource-provider SQLite
npx prisma migrate dev
npx prisma studio
npx prisma reset