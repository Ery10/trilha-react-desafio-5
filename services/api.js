import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dgrfbjjmarkdmauknvsl.supabase.co/rest/v1',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRncmZiamptYXJrZG1hdWtudnNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA4MTIzODksImV4cCI6MTk5NjM4ODM4OX0.sW0a9pUtNroBICuaqmU6r3Vs6ADATX6u22Xnw--yZO8',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRncmZiamptYXJrZG1hdWtudnNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA4MTIzODksImV4cCI6MTk5NjM4ODM4OX0.sW0a9pUtNroBICuaqmU6r3Vs6ADATX6u22Xnw--yZO8',
  },
});
