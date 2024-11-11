// seed.ts
import { db } from './db';
import { insights, procurements } from './schema';

const seedData = async () => {
  await db.insert(insights).values([
    { id: 1, name: 'Insight Example 1', value: 100 },
    { id: 2, name: 'Insight Example 2', value: 200 },
  ]);

await db.insert(insights).values([
  { name: 'Insight Example 1', value: 100 },
  { name: 'Insight Example 2', value: 200 },
]);

await db.insert(procurements).values([
  { type: 'Type A', amount: '500' },
  { type: 'Type B', amount: '1000' }
]);

  console.log('Database seeded successfully');
};

seedData().catch((error) => {
  console.error('Error seeding data:', error);
});