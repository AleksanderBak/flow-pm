import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

const authData = await pb.admins.authWithPassword(
  "aleksanderbak9@gmail.com",
  "qwertyuiop123"
);

export const getProjects = async () => {
  const projects = await pb.collection("projects").getFullList();
  return projects;
};
