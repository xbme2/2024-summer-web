/* eslint-disable react-refresh/only-export-components */
import { nanoid } from "nanoid";
import supabase, { supabaseUrl } from "./supabase";

export async function signup({ fullName, email, password, avatar }) {
  if (!avatar) console.log("no avatar");

  let fileName = "";
  let filePath = "";
  if (avatar && avatar[0]?.name) {
    fileName = `${nanoid(5)}-${avatar[0].name}`.replaceAll("/", "");
    filePath = `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`;
    const { error: storageError } = await supabase.storage
      .from("avatars")
      .upload(fileName, avatar[0]);

    if (storageError) throw new Error(storageError.message);

    // 生成文件路径
  }
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: filePath || null,
      },
    },
  });
  if (error) throw new Error(error.message);

  return data;
}

export async function Login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session?.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function getCertainUser(id) {
  //未实现
}
