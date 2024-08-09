import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
    default: async ({ request }) => {
        const { search_query } = Object.fromEntries(await request.formData()) as {
            search_query: string
        };
        // console.log(search_query);
        throw redirect(303, `/search/get?speciality=${search_query}`);
    },
};
