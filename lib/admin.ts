import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2ozU45BugwGk8WSchMUBEVKN6Fr",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
