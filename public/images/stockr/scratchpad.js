// Database reset
async function resetDatabase(){
    try {
        await dropTables();
        await createTable();
        await seedData();
        console.log('Database reset complete');
    } catch (error) {
        console.error('Database reset fails:', error);
    } finally {
        // End the pool object
        await pool.end();
    }
}