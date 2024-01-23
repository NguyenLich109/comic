import axios from "axios";

export default defineEventHandler(async (event) => {
  const http = useRuntimeConfig().port;
  const {key, chap} = getQuery(event)
  try {
    const { data } = await axios.get(`${http}/chapter/detail?key=${key}&chap=${chap}`);
    return data;
  } catch (error) {
    throw createError({
      statusCode: 400,
      message:"Không thể gọi được api này",
    });
  }
});
