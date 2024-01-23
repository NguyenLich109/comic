import axios from "axios";

export default defineEventHandler(async (event) => {
  const http = useRuntimeConfig().port;
  try {
    const { data } = await axios.get(`${http}/category/all`);
    return data;
  } catch (error) {
    throw createError({
      statusCode: 400,
      message:"Không thể gọi được api này",
    });
  }
});
