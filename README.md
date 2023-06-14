# coingecko_adonijs

1. setup intial project with the help of command : npm init adonis-ts-app@latest coingecko
2. added db connection and migration for saving data
   - npm i @adonisjs/lucid
   - node ace configure @adonisjs/lucid
3. Added model
   - node ace make:model coingecko
4. Run the migration
   - node ace migration:run
5. generate command for save the data
   - node ace make:command Savedata
   - axios for api request
