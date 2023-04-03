export const GET = async ({ request }) => {
    // request is not any, since it's inferred as Request by sveltekit
    request.headers // error: @typescript-eslint/no-unsafe-member-access
    return new Response('asdf')
}