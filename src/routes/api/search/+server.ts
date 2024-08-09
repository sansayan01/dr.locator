import { error, json } from '@sveltejs/kit'
import {data} from "$lib/store.js"
/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    // Get the search parameters from the URL
    let city = url.searchParams.get('city');
    if (city!=null){city = city.toLocaleLowerCase();}
    let speciality = url.searchParams.get('speciality');
    if (speciality != null){ speciality=speciality.toLocaleLowerCase()}

  
    // Fetch data from a data source based on the search parameters
    const data = await fetchDataFromSource(city, speciality);
  
    return json(data);
  }
  
  async function fetchDataFromSource(city: string | null, speciality: string | null) {
    // Implement your data fetching logic here
    // You can use the city and speciality parameters to filter the data
    try {
      const answer = data.filter(item => {
        return (city === null || item.city.toLocaleLowerCase() === city) || (speciality === null || item.speciality.toLocaleLowerCase() === speciality);
      });
      return answer;
    } catch (err) {
      console.error(err);
      throw error(500, 'Error fetching data');
    }
  }
  