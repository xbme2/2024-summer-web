import supabase from "./supabase";

export async function getComments(post_id) {
  const { data, error } = await supabase
    .from("Comments")
    .select("*")
    .eq("post_id", post_id);

  if (error) {
    console.error(error);
    throw new Error("无法获取评论数据");
  }
  return data;
}

export async function createComment(newComment) {
  const { data, error } = await supabase
    .from("Comments")
    .insert(newComment)
    .select();

  if (error) {
    console.error(error);
    throw new Error("无法发布帖子");
  }

  return data;
}
