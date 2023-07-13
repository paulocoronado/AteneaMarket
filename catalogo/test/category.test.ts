import request from 'supertest';
import app from '../src/app';

describe('API Routes', () => {
    test('should return a list of categories', async () => {
      const response = await request(app).get('/category/3');

      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);

      // Check the structure and properties of each category object
      for (const category of response.body) {
        expect(category).toHaveProperty('id');
        expect(category).toHaveProperty('name');
        expect(category).toHaveProperty('title');
        expect(category).toHaveProperty('description');
        expect(category).toHaveProperty('photos');
        expect(category.photos).toBeInstanceOf(Array);

        // Check the structure and properties of each photo object
        for (const photo of category.photos) {
          expect(photo).toHaveProperty('photo');
          expect(photo.photo).toHaveProperty('id');
          expect(photo.photo).toHaveProperty('url');
          expect(photo.photo).toHaveProperty('description');
        }
      }
    });

    test('should handle validation error and return a proper response', async () => {
      const response = await request(app).get('/category/10');

      expect(response.status).toBe(400);
      expect(response.body).toEqual({ error: 'totalItems must be less than or equal to 5' });
    });
  });