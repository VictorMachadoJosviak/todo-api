const getEntities = () => {
  return process.env.NODE_ENV === 'test'
    ? `${__dirname}/src/**/entities/*{.ts,.js}`
    : 'dist/src/**/entities/*{.ts,.js}';
};

module.exports = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  logging: true,
  entities: [getEntities()],
  migrations: ['dist/src/database/migrations/*{.js,.ts}'],
  cli: {
    migrationsDir: `${__dirname}/src/database/migrations`,
  },
};
