import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";
import { data } from "$lib/store"; // Assuming you have a data file

export const load: PageServerLoad = async ({ url }) => {
    const city = url.searchParams.get('city')?.toLowerCase() || null;
    const speciality = url.searchParams.get('speciality')?.toLowerCase() || null;

    async function fetchDataFromSource(city: string | null, speciality: string | null) {
        try {
            const answer = data.filter(item => {
                return (city === null || item.city.toLowerCase() === city) &&
                       (speciality === null || item.speciality.toLowerCase() === speciality);
            });
            return answer;
        } catch (err) {
            console.error(err);
            throw error(500, 'Error fetching data');
        }
    }

    try {
        const articles = await fetchDataFromSource(city, speciality);
        return {
            articles:articles
        };
    } catch (err) {
        console.error(err);
        throw error(500, "Could not fetch articles");
    }
};