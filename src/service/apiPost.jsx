import { nanoid } from "nanoid";
import supabase, { supabaseUrl } from "./supabase";

export async function getPosts(interesting_id) {
  const { data, error } = await supabase
    .from("Posts")
    .select("*")
    .eq("interesting_id", interesting_id);

  if (error) {
    console.error(error);
    throw new Error("无法获取帖子数据");
  }
  return data;
}

export async function createPost(newPost) {
  //https://ncrrfxsdlzdvzjocqlwq.supabase.co/storage/v1/object/public/interesting_images/R.jpg

  let imagePath = null;
  let imageName = null;
  if (newPost.image) {
    imageName = `${nanoid(4)}-${newPost.image.name}`.replaceAll("/", "");
    imagePath = `${supabaseUrl}/storage/v1/object/public/post-images/${imageName}`;
  }

  /*
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);
  */
  const { data, error } = await supabase
    .from("Posts")
    .insert({ ...newPost, image: imagePath })
    .select();

  if (error) {
    console.error(error);
    throw new Error("无法发布帖子");
  }
  if (newPost.image) {
    console.log(newPost.image);
    const { error: storeImageError } = await supabase.storage
      .from("post-images")
      .upload(imageName, newPost.image);

    if (storeImageError) {
      await supabase.from("Posts").delete().eq("id", data.id);
      console.error(storeImageError);
      throw new Error("图像存储发生错误");
    }
  }

  return data;
}
