const getEntities = () => {
  return process.env.NODE_ENV === 'test'
    ? `${__dirname}/src/**/entities/*{.ts,.js}`
    : 'dist/src/**/entities/*{.ts,.js}';
};

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'todo',
  logging: true,
  entities: [getEntities()],
  migrations: ['dist/src/database/migrations/*{.js,.ts}'],
  cli: {
    migrationsDir: `${__dirname}/src/database/migrations`,
  },
};
