// import { Pool } from 'pg';

// export default async function Page() {
//   async function create(formData: FormData) {
//     "use server";
//     const pool = new Pool({
//       connectionString: process.env.DATABASE_URL,
//       ssl: true
//     });
//     const client = await pool.connect();
//     await client.query("CREATE TABLE IF NOT EXISTS comments (comment TEXT)");
//     const comment = formData.get("comment");
//     await client.query("INSERT INTO comments (comment) VALUES ($1)", [comment]);
//   }
//   return (
//     <form action={create}>
//       <input type="text" placeholder="write a comment" name="comment" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }