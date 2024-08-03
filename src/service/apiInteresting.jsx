import { nanoid } from "nanoid";
import supabase, { supabaseUrl } from "./supabase";
import { useUser } from "../features/auth/useUser";

export async function getInterestings() {
  const { data, error } = await supabase.from("Interestings").select("*");

  if (error) {
    console.error(error);
    throw new Error("无法获取兴趣圈数据");
  }
  return data;
}

export async function createInteresting(newInteresting) {
  //https://ncrrfxsdlzdvzjocqlwq.supabase.co/storage/v1/object/public/interesting_images/R.jpg

  const imageName = `${nanoid(5)}-${newInteresting.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/interesting_images/${imageName}`;

  const { data, error } = await supabase
    .from("Interestings")
    .insert({ ...newInteresting, image: imagePath })
    .select();
  if (error) {
    console.error(error);
    throw new Error("无法创建兴趣圈");
  }

  const { error: storeImageError } = await supabase.storage
    .from("interesting_images")
    .upload(imageName, newInteresting.image);

  if (storeImageError) {
    await supabase.from("Interestings").delete().eq("id", data.id);
    console.error(storeImageError);
    throw new Error("图像存储发生错误");
  }

  return data;
}
