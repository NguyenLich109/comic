import axios from "axios";

export default defineEventHandler(async (event) => {
  const http = useRuntimeConfig().port;
  const {page, key_search, genre} = getQuery(event)
  try {
    const { data } = await axios.get(`${http}/story/all?page=${page}&key_search=${key_search}&genre=${genre}`);
    return data;
  } catch (error) {
    throw createError({
      statusCode: 400,
      message:"Không thể gọi được api này",
    });
  }
});
