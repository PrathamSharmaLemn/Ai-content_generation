/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://nenodb_owner:bjrJ1hKpozm4@ep-floral-glitter-a59wp82u.us-east-2.aws.neon.tech/AI-Content-Generator?sslmode=require',
    }
  };