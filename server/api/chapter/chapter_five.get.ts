import axios from "axios";

export default defineEventHandler(async (event) => {
  const http = useRuntimeConfig().port;
  const {key} = getQuery(event)
  try {
    const { data } = await axios.get(`${http}/chapter/chapter_five?key=${key}`);
    return data;
  } catch (error) {
    throw createError({
      statusCode: 400,
      message:"Không thể gọi được api này",
    });
  }
});
